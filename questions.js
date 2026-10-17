/* Banco de preguntas — Parcial 2, Gestión de Proyectos.
   Formato: Q(tema, pregunta, correcta, [incorrectas], explicación)
   La correcta se escribe primero; el orden real se mezcla al rendir. */
(function () {
  var Q = function (t, q, ok, bad, e) {
    var opts = [{ x: ok, ok: true }].concat(bad.map(function (x) { return { x: x, ok: false }; }));
    opts.forEach(function (o, k) { o.k = k; });
    return { t: t, q: q, o: opts, e: e };
  };

  var R = 'RRHH', C = 'Comunicaciones', L = 'Liderazgo', T = 'Testing';

  var ex1 = [
    Q(R, '¿Cuántos procesos tiene la gestión de los recursos humanos?', '4', ['3', '5', '6'],
      'Planificar, Adquirir, Desarrollar y Gestionar el equipo.'),
    Q(R, '¿Cuál es considerado el mejor tipo de poder?', 'Experto', ['Formal', 'Penalidad', 'Referente'],
      'Experto (junto con recompensas). El poder formal suele creerse el mejor, pero no lo es.'),
    Q(R, 'Se contrata a alguien como director de proyecto solo porque fue un excelente ingeniero. ¿Qué error se cometió?', 'Efecto halo',
      ['Negociación fallida', 'Asignación previa', 'Formación de un equipo virtual'],
      'Asumir que quien fue muy bueno en algo lo será en otra cosa es el efecto halo (ej.: buen jugador, entonces buen técnico).'),
    Q(R, 'En el modelo de Tuckman, ¿qué etapa se caracteriza por discutir decisiones técnicas y de gestión con poca colaboración?', 'Tormenta',
      ['Formación', 'Normalización', 'Desempeño'],
      'En Tormenta se discuten las decisiones y hay poca colaboración.'),
    Q(R, 'Según el libro de Lledó, ¿cuál es el primer paso para resolver un conflicto?', 'Identificar la causa del problema',
      ['Implementar una decisión', 'Identificar alternativas de solución', 'Revisar si la decisión resolvió el problema'],
      'Orden: identificar la causa, analizar el problema, identificar alternativas, implementar una decisión y revisar si resolvió el problema.'),
    Q(R, '¿Qué herramienta de Planificar RRHH muestra el cargo y el nivel jerárquico de cada persona?', 'Organigramas y descripción de cargos',
      ['Decisiones multicriterio', 'Reglas básicas', 'Registro de incidentes'],
      'Pueden ser jerárquicos, matriciales o en texto.'),
    Q(R, 'Una reunión informal los viernes, con cervezas pagas por la empresa y sin traje, es un ejemplo de...', 'Creación de relaciones de trabajo (conexiones)',
      ['Teoría de la organización', 'Capacitación', 'Asignación previa'],
      'Es una herramienta de Planificar la gestión de RRHH.'),

    Q(C, 'Hay 6 interesados en un proyecto. ¿Cuántos canales de comunicación existen?', '15', ['12', '18', '36'],
      'Canales = n × (n − 1) / 2 = (6 × 5) / 2 = 15.'),
    Q(C, 'Enviar un e-mail unilateral es un método de comunicación:', 'Push', ['Pull', 'Interactivo', 'Bidireccional'],
      'La intranet es pull; la reunión es interactiva o bidireccional.'),
    Q(C, '¿Qué proceso de Comunicaciones comunica el estado de avance del proyecto?', 'Controlar las comunicaciones',
      ['Planificar las comunicaciones', 'Gestionar las comunicaciones', 'Gestionar el equipo'],
      'Controlar (grupo de control) asegura que los interesados reciban la información que necesitan, con los informes de avance.'),
    Q(C, 'Un ruido que nace de las actitudes e ideas previas de las partes (por ejemplo, el nacionalismo) es un ruido:', 'De influencia',
      ['Semántico', 'Técnico', 'De canal'],
      'Los tres tipos del apunte son de semántica, de influencia y técnicos.'),
    Q(C, '¿Cuál es un canal mediatizado?', 'E-mail', ['Hablar cara a cara', 'Indicios no verbales', 'Escuchar'],
      'Los mediatizados requieren tecnología; los directos son cara a cara.'),

    Q(L, '¿Qué estilo de liderazgo se basa en un sistema de recompensa y castigo, con motivación extrínseca?', 'Transaccional',
      ['Transformacional', 'Laissez-faire', 'De la curva'],
      'Se enfoca en el cumplimiento y los objetivos a corto plazo.'),
    Q(L, 'El enfoque de “comando y control”, que puede servir en emergencias, corresponde al liderazgo:', 'Autoritario o autocrático',
      ['Democrático', 'Laissez-faire', 'De la curva'],
      'Se basa en la autoridad del cargo y puede servir cuando hay que decidir rápido.'),
    Q(L, '¿Cuál NO es una conducta de la escucha activa?', 'Interrumpir para dar tu opinión',
      ['Parafrasear', 'Resumir', 'Hacer preguntas'],
      'Interrumpir es de lo que no hay que hacer. Parafrasear, resumir y preguntar son señales de escucha activa.'),
    Q(L, '¿Cuáles son los dos elementos que facilitan la escucha activa, según el apunte?', 'Disposición psicológica y expresar que se está escuchando',
      ['Empatía y juicio de valor', 'Parafrasear y dar consejos', 'Contacto visual y silencio total'],
      'Disposición psicológica (preparación interna, estar presente) y expresión de que se escucha (verbal, como la función fática, y no verbal).'),

    Q(T, '¿Cuál NO es un objetivo del testing?', 'Eliminar la necesidad de los requisitos',
      ['Encontrar defectos', 'Ganar confianza sobre el nivel de calidad', 'Prevenir defectos'],
      'Los objetivos son encontrar defectos, ganar confianza y proporcionar información, y prevenir defectos.'),
    Q(T, '¿Qué nivel de prueba verifica cada módulo, clase o unidad de forma independiente?', 'Componentes (unitario)',
      ['Integración', 'Sistema', 'Aceptación'],
      'Se prueba cada componente tras su construcción para descubrir fallos por defectos internos.'),
    Q(T, 'Tras arreglar un defecto, se vuelve a probar para confirmar que fue retirado. Eso es testing de:', 'Confirmación',
      ['Regresión', 'Humo', 'Estructural'],
      'La regresión busca errores nuevos causados por el cambio; la confirmación verifica que el defecto original se fue.'),
    Q(T, 'Las pruebas de performance, volumen, concurrencia y stress son testing:', 'No funcional',
      ['Estructural', 'De confirmación', 'De caja blanca'],
      'Miden “cómo” funciona el sistema, con características cuantificables como tiempos de respuesta.')
  ];

  var ex2 = [
    Q(R, '¿Qué proceso de RRHH pertenece al grupo de planificación?', 'Planificar la gestión de RRHH',
      ['Adquirir el equipo', 'Desarrollar el equipo', 'Gestionar el equipo'],
      'Los otros tres son de ejecución.'),
    Q(R, '¿Cuál es el peor tipo de poder?', 'Penalidad', ['Formal', 'Referente', 'Recompensas'],
      'Es el que usa castigos.'),
    Q(R, '¿Cuál NO es una herramienta de Adquirir el equipo?', 'Modelo de Tuckman',
      ['Asignación previa', 'Negociación', 'Decisiones multicriterio'],
      'Tuckman es de Desarrollar el equipo.'),
    Q(R, '¿En qué etapa de Tuckman el equipo es una unidad organizada, interdependiente y resuelve problemas?', 'Desempeño',
      ['Normalización', 'Tormenta', 'Disolución'],
      'Orden: Formación, Tormenta, Normalización, Desempeño, Disolución.'),
    Q(R, '¿Qué técnica es de las mejores para resolver conflictos?', 'Reunión cara a cara con los involucrados',
      ['Mail a la alta gerencia', 'Separar físicamente a las personas', 'Ignorarlo hasta que baje'],
      'Después se deja registro del problema y su resolución en el registro de incidentes.'),
    Q(R, 'Apagar los celulares en las reuniones o lavar las tazas de café son ejemplos de:', 'Reglas básicas',
      ['Capacitación', 'Reconocimiento y recompensas', 'Asignación previa'],
      'Son normas de convivencia, herramienta de Desarrollar el equipo.'),
    Q(R, '¿Qué etapa de Tuckman se caracteriza por el trabajo en equipo, la colaboración y la confianza?', 'Normalización',
      ['Formación', 'Tormenta', 'Disolución'],
      'En Formación hay independencia e individualismo; en Disolución el trabajo está completo.'),

    Q(C, 'La interpretación de expresiones corporales y faciales se llama:', 'Quinesia',
      ['Paralingüística', 'Codificación', 'Escucha efectiva'],
      'La paralingüística es el tono de voz.'),
    Q(C, 'Frases como “eso es imposible” o “será carísimo” son:', 'Bloqueadores de la información',
      ['Ruidos', 'Codificación', 'Canales'],
      'Los ruidos son mala codificación, distancias, hostilidad, lenguaje y cultura.'),
    Q(C, '¿Cuál NO es una recomendación para reuniones efectivas?', 'Dejar abierto el horario de cierre',
      ['Distribuir la orden del día por anticipado', 'Respetar el horario de inicio y fin', 'Documentar y publicar la minuta'],
      'Hay que fijar horario de inicio y fin, y respetarlo.'),
    Q(C, '¿Cuál es el tipo de ruido más fácil de evitar?', 'Técnico',
      ['Semántico', 'De influencia', 'Todos son igual de difíciles'],
      'Los ruidos técnicos se deben a defectos en los medios de transmisión.'),
    Q(C, 'Según el apunte, la comunicación tiene éxito cuando:', 'Lo que interpreta el receptor coincide con lo que el emisor pretendía comunicar',
      ['El emisor envía muchos mensajes', 'Se usa un canal masivo', 'No hay receptor'],
      'El éxito depende de que el mensaje se entienda sin distorsiones.'),

    Q(L, 'El líder que inspira, actúa como mentor o coach y busca la motivación intrínseca practica un liderazgo:', 'Transformacional',
      ['Transaccional', 'Autocrático', 'Natural'],
      'Se enfoca en el cambio y la visión a largo plazo.'),
    Q(L, '¿En qué liderazgo el líder tiene la última palabra pero la meta es el consenso?', 'Participativo o democrático',
      ['Autocrático', 'Transaccional', 'Liberal'],
      'Hay colaboración activa y diálogo constante, pero el líder tiene la última palabra.'),
    Q(L, '¿Cuáles son las 4 R del apunte para manejar un conflicto?', 'Relajarse, Reflexionar, Respetar, Responder',
      ['Reunir, Revisar, Resolver, Registrar', 'Reconocer, Reclamar, Reparar, Rendir', 'Reclutar, Retener, Recompensar, Reevaluar'],
      'Mantener la calma, entender la postura del otro, dejar que exprese lo que siente y hacerle notar que lo oíste.'),
    Q(L, 'Según el apunte, ¿cuál NO es característica del liderazgo transaccional?', 'Fomenta la innovación y desafiar el statu quo',
      ['Comunicación unidireccional', 'Motivación extrínseca', 'Relación formal de administrador a trabajador'],
      'Eso es del transformacional; el transaccional busca mantener el statu quo.'),

    Q(T, '¿Cuál es el orden de los niveles de prueba, de adentro hacia afuera?', 'Componentes, Integración, Sistema, Aceptación',
      ['Sistema, Componentes, Integración, Aceptación', 'Aceptación, Sistema, Integración, Componentes', 'Integración, Componentes, Aceptación, Sistema'],
      'Los niveles están anidados, de adentro hacia afuera.'),
    Q(T, 'Si los casos de prueba se eligen según la estructura interna del código, es testing de:', 'Caja blanca',
      ['Caja negra', 'Funcional', 'Humo'],
      'En caja negra los casos salen del análisis de la especificación.'),
    Q(T, 'Una revisión rápida antes de la recepción formal, para ver que no hay defectos que interrumpan la operación básica, es una prueba de:', 'Humo',
      ['Regresión', 'Confirmación', 'Estructural'],
      'El smoke testing comprueba que el producto funciona antes de entregarlo al equipo de pruebas o al usuario final.'),
    Q(T, '¿Cuántos casos de prueba es deseable tener, como mínimo, por requisito?', '2 (uno positivo y uno negativo)',
      ['1', '3', '5'],
      'Un caso de prueba positiva y otro de prueba negativa.')
  ];

  var ex3 = [
    Q(R, 'Para la “vieja escuela”, el conflicto:', 'Debe evitarse y se resuelve separando a las personas o con la alta gerencia',
      ['Es inevitable y beneficioso', 'Se resuelve entre los involucrados identificando las causas', 'Surge de interacciones organizacionales'],
      'Las otras opciones describen la gestión moderna.'),
    Q(R, 'Sobre los premios al equipo, el material recomienda:', 'Premiar a cualquiera que supere el objetivo',
      ['Un único ganador por mes', 'No dar premios', 'Premiar solo a los líderes'],
      'Los premios con un solo ganador pueden perjudicar la cohesión del equipo.'),
    Q(R, '¿Qué tipo de poder se basa en la posición jerárquica en la empresa?', 'Formal',
      ['Experto', 'Recompensas', 'Referente'],
      'Se cree que es el mejor, pero no lo es: pesan más el poder de experto y el de recompensas.'),
    Q(R, '¿Cuál de estas es una actividad de Gestionar el equipo?', 'Resolver conflictos y polémicas',
      ['Negociar con gerentes funcionales', 'Elaborar el organigrama', 'Capacitar al equipo'],
      'Gestionar: seguimiento del desempeño, retroalimentación al equipo y resolución de conflictos.'),
    Q(R, 'Elegir al equipo con criterios ponderados (disponibilidad, capacidades, idiomas, salario, experiencia) es la herramienta:', 'Decisiones multicriterio',
      ['Asignación previa', 'Equipos virtuales', 'Teoría de la organización'],
      'Es una herramienta de Adquirir el equipo.'),
    Q(R, '¿Qué salidas tiene el proceso Adquirir personal?', 'Personas asignadas y disponibilidad de recursos',
      ['Organigrama y roles y responsabilidades', 'Evaluaciones de desempeño', 'Solicitudes de cambio y actualizaciones'],
      'El organigrama sale del Plan de RRHH; las evaluaciones, de Desarrollar el equipo.'),
    Q(R, '¿Qué pregunta hay que responder al planificar los recursos humanos?', 'Cómo y cuándo se incorpora y se desafecta a cada persona',
      ['Cuántos canales de comunicación hay', 'Qué casos de prueba se ejecutarán', 'En qué etapa de Tuckman está el equipo'],
      'También: capacidades y formación, roles y responsabilidades, informes y reuniones, recompensas y protección ante contingencias.'),

    Q(C, 'La comunicación entre colegas del proyecto es:', 'Horizontal', ['Vertical', 'Externa', 'Oral formal'],
      'La vertical es jefe-empleado.'),
    Q(C, '¿Qué incluye el plan de gestión de las comunicaciones?', 'Frecuencia de la comunicación y glosario de términos comunes',
      ['Plan de recompensas individual', 'Convenios colectivos de trabajo', 'Evaluaciones de desempeño del equipo'],
      'Canales, formato y contenido, responsables, receptores, tecnología, frecuencia y glosario.'),
    Q(C, 'Según el apunte, las redes sociales son un canal:', 'Interactivo', ['Personal', 'Interpersonal', 'Directo'],
      'Son canales de amplio alcance que permiten interacción con los usuarios.'),
    Q(C, 'Hay 10 interesados en un proyecto. ¿Cuántos canales de comunicación existen?', '45', ['90', '100', '55'],
      'Canales = n × (n − 1) / 2 = (10 × 9) / 2 = 45.'),
    Q(C, 'Aproximadamente, ¿qué porcentaje de las comunicaciones es no verbal?', '60%', ['10%', '30%', '90%'],
      'El 90% es el tiempo que el director de proyecto dedica a comunicar, no la parte no verbal.'),

    Q(L, 'Una persona sin título de líder, a quien el grupo sigue voluntariamente porque cree en ella, ejerce liderazgo:', 'Natural',
      ['Participativo', 'Autoritario', 'Liberal'],
      'Surge de manera orgánica dentro del grupo y no impone su voluntad.'),
    Q(L, 'En el liderazgo laissez-faire, ¿qué condición debe cumplirse?', 'Que el líder esté convencido de que los miembros son autónomos y capaces de decidir',
      ['Que el equipo no reciba recursos', 'Que todo recaiga sobre el líder', 'Que la motivación sea extrínseca'],
      'El líder solo provee recursos y herramientas.'),
    Q(L, '¿Qué estilo de liderazgo se basa en la “curva de la felicidad”?', 'De la curva',
      ['Transaccional', 'Autocrático', 'Natural'],
      'Crea un entorno positivo para que el bienestar y la motivación suban solos.'),
    Q(L, 'En el método de 7 pasos del apunte de Liderazgo, ¿cuál es el primer paso?', 'Escuchar: relato de todos los involucrados',
      ['Solución: acuerdo sobre una solución posible', 'Evaluación: implementación y retroalimentación', 'Sentimientos: analizar los de la otra parte'],
      'Orden: escuchar, descripción, preguntas y respuestas, sentimientos, el problema, solución y evaluación. No confundir con los 5 pasos del libro.'),

    Q(T, '¿Cuál NO es parte de un caso de prueba?', 'Presupuesto',
      ['Identificador', 'Objetivo', 'Resultado esperado'],
      'Las partes son funcionalidad, identificador, objetivo, descripción y resultado esperado.'),
    Q(T, '¿Qué nivel de prueba verifica la interacción entre componentes una vez integrado el sistema?', 'Integración',
      ['Componentes', 'Sistema', 'Aceptación'],
      'Comprueba las funciones externas y puede ser ejecutada por desarrolladores, testers o ambos.'),
    Q(T, '¿Cuándo se hacen las pruebas de regresión?', 'Cuando el software o su entorno cambian, para descubrir errores introducidos por el cambio',
      ['Solo antes de la primera ejecución del sistema', 'Únicamente para confirmar que un defecto fue retirado', 'Cuando se pide una revisión rápida antes de la recepción formal'],
      'Su alcance depende del riesgo de no encontrar errores en lo que funcionaba.'),
    Q(T, 'El testing que mide cuánto de la estructura cubrieron los casos de prueba, y es de caja blanca, es:', 'Estructural',
      ['Funcional', 'No funcional', 'De humo'],
      'Se usa sobre todo en pruebas de componentes (unitarias) y de integración.')
  ];

  var withIds = function (id, list) {
    list.forEach(function (q, i) { q.id = id + '-' + (i + 1); });
    return list;
  };

  var blurb = function (list) {
    var n = {};
    list.forEach(function (q) { n[q.t] = (n[q.t] || 0) + 1; });
    return Object.keys(n).map(function (k) { return k + ' ' + n[k]; }).join(' · ');
  };

  window.EXAMS = [
    { id: 1, title: 'Simulacro 1', questions: withIds(1, ex1), blurb: blurb(ex1) },
    { id: 2, title: 'Simulacro 2', questions: withIds(2, ex2), blurb: blurb(ex2) },
    { id: 3, title: 'Simulacro 3', questions: withIds(3, ex3), blurb: blurb(ex3) }
  ];
})();
