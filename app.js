(function () {
  'use strict';

  var KEY = 'simulacros-gp-v1';
  var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
  var app = document.getElementById('app');

  /* ---------- almacenamiento (puede fallar en ventanas privadas) ---------- */
  function load() {
    try {
      var d = JSON.parse(localStorage.getItem(KEY));
      if (d && typeof d === 'object') return { prefs: d.prefs || {}, exams: d.exams || {} };
    } catch (e) { /* sin storage */ }
    return { prefs: {}, exams: {} };
  }
  var data = load();
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* sin storage */ }
  }

  /* ---------- utilidades ---------- */
  function h(tag, props) {
    var el = document.createElement(tag);
    var p = props || {};
    Object.keys(p).forEach(function (k) {
      var v = p[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'class') el.className = v;
      else if (k.indexOf('on') === 0) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    });
    for (var i = 2; i < arguments.length; i++) append(el, arguments[i]);
    return el;
  }
  function append(el, kid) {
    if (kid === null || kid === undefined || kid === false) return;
    if (Array.isArray(kid)) { kid.forEach(function (k) { append(el, k); }); return; }
    el.appendChild(kid.nodeType ? kid : document.createTextNode(String(kid)));
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var lastSig = {};
  function signature(qs) {
    return qs.map(function (q) { return q.id + ':' + q.o.map(function (o) { return o.k; }).join(''); }).join('|');
  }
  /* Arma un intento nuevo: mezcla las preguntas y las opciones de cada una.
     Si por casualidad quedara igual al intento anterior, vuelve a mezclar. */
  function build(exam) {
    var qs, sig, tries = 0;
    do {
      qs = shuffle(exam.questions).map(function (q) {
        return { id: q.id, t: q.t, q: q.q, e: q.e, o: shuffle(q.o) };
      });
      sig = signature(qs);
      tries++;
    } while (sig === lastSig[exam.id] && tries < 20);
    lastSig[exam.id] = sig;
    return qs;
  }

  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }

  function mount() {
    var nodes = Array.prototype.slice.call(arguments);
    app.replaceChildren.apply(app, nodes);
    window.scrollTo(0, 0);
    var f = app.querySelector('[data-focus]');
    if (f) { f.setAttribute('tabindex', '-1'); f.focus({ preventScroll: true }); }
  }

  /* ---------- estado del intento ---------- */
  var S = null; // { ex, qs, ans, i, instant, done }
  var onlyWrong = true;

  /* ---------- vista: inicio ---------- */
  function home() {
    S = null;
    var instantInput = h('input', {
      type: 'checkbox', id: 'instant',
      checked: data.prefs.instant ? true : null,
      onchange: function (e) { data.prefs.instant = e.target.checked; save(); }
    });

    var cards = EXAMS.map(function (ex) {
      var st = data.exams[ex.id] || {};
      var total = ex.questions.length;
      return h('li', { class: 'sheet exam-card' },
        h('div', { class: 'exam-num', 'aria-hidden': 'true' }, String(ex.id)),
        h('div', null,
          h('h2', null, ex.title),
          h('p', { class: 'muted', style: 'margin:4px 0 0' }, total + ' preguntas de opción múltiple'),
          h('ul', { class: 'chips', 'aria-label': 'Temas' },
            ex.blurb.split(' · ').map(function (b) { return h('li', { class: 'chip' }, b); }))
        ),
        h('p', { class: 'stat' },
          st.attempts
            ? ['Intentos ', h('b', null, st.attempts), '  ·  Mejor ', h('b', null, st.best + '/' + total), '  ·  Último ', h('b', null, st.last + '/' + total)]
            : 'Todavía no lo hiciste'),
        h('div', { class: 'card-actions' },
          h('button', { class: 'btn primary', type: 'button', onclick: function () { start(ex.id); } },
            st.attempts ? 'Rendir de nuevo' : 'Empezar'))
      );
    });

    mount(
      h('h1', { 'data-focus': true }, 'Practicá el ', h('em', null, 'parcial'), '.'),
      h('p', { class: 'lead' },
        '3 simulacros de 20 preguntas. Cada vez que arrancás o reintentás se mezclan el orden de las preguntas y el de las opciones, así no te las aprendés de memoria por la posición.'),
      h('div', { class: 'options-bar' },
        h('label', { for: 'instant' }, instantInput, 'Corrección al instante (modo práctica)'),
        h('p', { class: 'hint' }, 'Apagado, es como el parcial: respondés todo y la corrección aparece al final.')),
      h('ul', { class: 'exam-list' }, cards)
    );
  }

  /* ---------- vista: pregunta ---------- */
  function start(id) {
    var ex = EXAMS.filter(function (e) { return e.id === id; })[0];
    var qs = build(ex);
    S = { ex: ex, qs: qs, ans: qs.map(function () { return null; }), i: 0, instant: !!data.prefs.instant, done: false };
    onlyWrong = true;
    question();
  }

  function pick(k) {
    var q = S.qs[S.i];
    if (S.instant && S.ans[S.i] !== null) return;
    if (k >= q.o.length) return;
    S.ans[S.i] = k;
    question(true);
  }

  function go(i) {
    if (i < 0 || i >= S.qs.length) return;
    S.i = i;
    question();
  }

  function question(keepScroll) {
    var y = window.scrollY;
    var qs = S.qs, i = S.i, q = qs[i], a = S.ans[i];
    var locked = S.instant && a !== null;
    var last = i === qs.length - 1;
    var answered = S.ans.filter(function (x) { return x !== null; }).length;

    var opts = q.o.map(function (o, k) {
      var cls = 'option';
      if (locked) { if (o.ok) cls += ' ok'; else if (k === a) cls += ' bad'; }
      return h('li', null,
        h('button', {
          class: cls, type: 'button',
          'aria-pressed': a === k ? 'true' : 'false',
          'aria-disabled': locked ? 'true' : null,
          onclick: function () { pick(k); }
        },
          h('span', { class: 'bubble', 'aria-hidden': 'true' }, LETTERS[k]),
          h('span', { class: 'label' }, o.x)));
    });

    var feedback = null;
    if (locked) {
      var right = q.o[a].ok;
      var correct = q.o.filter(function (o) { return o.ok; })[0];
      feedback = h('div', { class: 'feedback ' + (right ? 'ok' : 'bad'), role: 'status' },
        h('strong', null, right ? '¡Correcta! ' : 'Incorrecta. '),
        right ? '' : ['La respuesta era: ', h('b', null, correct.x), '. '],
        q.e);
    }

    var map = qs.map(function (qq, n) {
      var cls = '';
      if (S.ans[n] !== null) {
        cls = S.instant ? (qq.o[S.ans[n]].ok ? 'ok' : 'bad') : 'done';
      }
      return h('li', null, h('button', {
        type: 'button', class: cls, 'aria-label': 'Ir a la pregunta ' + (n + 1) + (S.ans[n] !== null ? ' (respondida)' : ''),
        'aria-current': n === i ? 'step' : null, onclick: function () { go(n); }
      }, String(n + 1)));
    });

    mount(
      h('div', { class: 'exam-head' },
        h('div', { class: 'where' }, S.ex.title + ' · Pregunta ', h('b', null, (i + 1) + ' de ' + qs.length)),
        h('button', {
          class: 'btn quiet', type: 'button',
          onclick: function () { if (confirm('¿Salir del simulacro? Se pierde este intento.')) home(); }
        }, 'Salir')),
      h('div', { class: 'progress', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': String(qs.length), 'aria-valuenow': String(answered), 'aria-label': 'Preguntas respondidas' },
        h('i', { style: 'width:' + pct(answered, qs.length) + '%' })),
      h('section', { class: 'sheet question', 'aria-labelledby': 'qt' },
        h('p', { class: 'topic' }, q.t),
        h('h2', { class: 'q-text', id: 'qt', 'data-focus': true }, q.q),
        h('ul', { class: 'option-list' }, opts),
        feedback),
      h('div', { class: 'exam-nav' },
        h('button', { class: 'btn', type: 'button', 'aria-disabled': i === 0 ? 'true' : null, onclick: function () { go(i - 1); } }, '← Anterior'),
        last
          ? h('button', { class: 'btn primary', type: 'button', onclick: finish }, 'Finalizar')
          : h('button', { class: 'btn primary', type: 'button', onclick: function () { go(i + 1); } }, 'Siguiente →')),
      h('p', { class: 'map-title' }, answered + ' de ' + qs.length + ' respondidas'),
      h('ul', { class: 'qmap' }, map)
    );
    if (keepScroll) {
      window.scrollTo(0, y);
      var sel = app.querySelector('.option[aria-pressed="true"]');
      if (sel) sel.focus({ preventScroll: true });
    }
  }

  /* ---------- vista: resultados ---------- */
  function finish() {
    var missing = S.ans.filter(function (x) { return x === null; }).length;
    if (missing && !confirm('Te faltan ' + missing + (missing === 1 ? ' pregunta' : ' preguntas') + ' sin responder. ¿Finalizar igual?')) return;
    S.done = true;

    var score = 0;
    S.qs.forEach(function (q, n) { if (S.ans[n] !== null && q.o[S.ans[n]].ok) score++; });
    S.score = score;

    var st = data.exams[S.ex.id] || { attempts: 0, best: 0, last: 0 };
    st.attempts += 1;
    st.last = score;
    st.best = Math.max(st.best, score);
    data.exams[S.ex.id] = st;
    save();
    results();
  }

  function results() {
    var total = S.qs.length, score = S.score, p = pct(score, total);

    var byTopic = {};
    S.qs.forEach(function (q, n) {
      var t = byTopic[q.t] || (byTopic[q.t] = { ok: 0, n: 0 });
      t.n++;
      if (S.ans[n] !== null && q.o[S.ans[n]].ok) t.ok++;
    });

    var verdict = p >= 90 ? 'Muy sólido. Casi sin fisuras.'
      : p >= 70 ? 'Vas bien. Repasá las que quedaron marcadas en rojo.'
      : p >= 50 ? 'A mitad de camino. Mirá la corrección y volvé a intentarlo.'
      : 'Todavía falta. Leé las explicaciones y probá de nuevo.';

    var topicRows = Object.keys(byTopic).map(function (k) {
      var t = byTopic[k];
      return h('li', null,
        h('span', null, k),
        h('span', { class: 'bar', 'aria-hidden': 'true' }, h('i', { style: 'width:' + pct(t.ok, t.n) + '%' })),
        h('span', { class: 'n' }, t.ok + '/' + t.n));
    });

    var items = S.qs.map(function (q, n) {
      var a = S.ans[n];
      var okAns = a !== null && q.o[a].ok;
      var correct = q.o.filter(function (o) { return o.ok; })[0];
      var state = a === null ? 'skip' : okAns ? 'ok' : 'bad';
      return { n: n, q: q, a: a, okAns: okAns, correct: correct, state: state };
    });

    var shown = items.filter(function (it) { return !onlyWrong || !it.okAns; });
    var list = shown.length
      ? shown.map(function (it) {
        return h('li', null,
          h('details', { open: it.okAns ? null : true },
            h('summary', null,
              h('span', { class: 'mark ' + it.state, 'aria-hidden': 'true' }, it.state === 'ok' ? '✓' : it.state === 'bad' ? '✗' : '–'),
              h('span', { class: 'qt' }, (it.n + 1) + '. ' + it.q.q)),
            h('div', { class: 'body' },
              h('p', { class: 'yours ' + (it.okAns ? 'ok' : 'bad') },
                h('span', { class: 'tag' }, 'Tu respuesta'),
                it.a === null ? 'Sin responder' : it.q.o[it.a].x),
              it.okAns ? null : h('p', null, h('span', { class: 'tag' }, 'Correcta'), h('span', { class: 'right' }, it.correct.x)),
              h('p', { class: 'muted' }, it.q.e))));
      })
      : [h('li', null, h('p', { class: 'lead', style: 'margin:0' }, '¡No te equivocaste en ninguna!'))];

    mount(
      h('section', { class: 'sheet score-card' },
        h('p', { class: 'topic' }, S.ex.title + ' · resultado'),
        h('h2', { 'data-focus': true, class: 'score', 'aria-label': score + ' de ' + total + ' correctas' }, String(score), h('small', null, ' / ' + total)),
        h('p', { class: 'verdict' }, p + '% · ' + verdict),
        h('ul', { class: 'topics', 'aria-label': 'Resultado por tema' }, topicRows)),
      h('div', { class: 'result-actions' },
        h('button', { class: 'btn primary', type: 'button', onclick: function () { start(S.ex.id); } }, 'Reintentar (nuevo orden)'),
        h('button', { class: 'btn', type: 'button', onclick: home }, 'Volver al inicio')),
      h('div', { class: 'review-head' },
        h('h2', null, 'Corrección'),
        h('button', {
          class: 'btn quiet', type: 'button',
          onclick: function () { onlyWrong = !onlyWrong; results(); }
        }, onlyWrong ? 'Ver todas las preguntas' : 'Ver solo las que fallé')),
      h('ul', { class: 'review' }, list)
    );
  }

  /* ---------- teclado: A-D / 1-4 eligen, flechas navegan ---------- */
  document.addEventListener('keydown', function (e) {
    if (!S || S.done || e.ctrlKey || e.metaKey || e.altKey) return;
    var tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    var key = e.key.toLowerCase();
    var idx = 'abcd'.indexOf(key);
    if (idx === -1 && /^[1-4]$/.test(key)) idx = Number(key) - 1;
    if (idx > -1) { pick(idx); e.preventDefault(); return; }
    if (e.key === 'ArrowRight') { go(S.i + 1); e.preventDefault(); }
    if (e.key === 'ArrowLeft') { go(S.i - 1); e.preventDefault(); }
  });

  /* Exponer para pruebas */
  window.__sim = { build: build, EXAMS: EXAMS };

  home();
})();
