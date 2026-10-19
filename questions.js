/* Banco de preguntas — Parcial 2, basado exclusivamente en Manual_Audio_Concreto_Completo.txt
   3 simulacros de 20 preguntas. La opción correcta se mezcla al rendir.
   Formato: Q(tema, pregunta, correcta, [incorrectas], explicación). */
(function () {
  var Q = function (t, q, ok, bad, e) {
    var opts = [{ x: ok, ok: true }].concat(bad.map(function (x) { return { x: x, ok: false }; }));
    opts.forEach(function (o, k) { o.k = k; });
    return { t: t, q: q, o: opts, e: e };
  };
  var R = 'RRHH', L = 'Liderazgo y conflictos', C = 'Comunicaciones', T = 'Testing';

  var ex1 = [
    Q(R,'¿Qué proceso de RRHH define roles, responsabilidades y habilidades necesarias?','Planificar el equipo',['Adquirir el equipo','Desarrollar el equipo','Gestionar el equipo'],'Planificar define qué se necesita y cómo se organizará.'),
    Q(R,'Un profesional es elegido para liderar solo porque fue un excelente programador. ¿Qué sesgo describe esto?','Efecto halo',['Ruido semántico','Decisión de regresión','Liderazgo liberal'],'El efecto halo consiste en asumir que alguien será bueno en otro puesto porque destacó en uno.'),
    Q(R,'¿En qué grupo de procesos ocurre Adquirir el equipo?','Ejecución',['Planificación','Control','Cierre'],'Adquirir consiste en conseguir o incorporar personas y ocurre durante la ejecución.'),
    Q(R,'¿Cuál es el poder que se basa en el conocimiento y la experiencia?','Poder experto',['Poder formal','Poder de penalidad','Poder referente'],'El poder experto deriva de los conocimientos de la persona.'),
    Q(L,'Un líder inspira innovación y una visión de largo plazo, promoviendo motivación interna. ¿Qué estilo es?','Transformacional',['Transaccional','Autoritario','Liberal'],'El transformacional inspira cambio, innovación y visión a largo plazo.'),
    Q(L,'El líder ofrece premios por cumplir objetivos y sanciones por incumplirlos. ¿Qué estilo predomina?','Transaccional',['Transformacional','Natural','Democrático'],'El transaccional se apoya en recompensas y castigos y en motivación externa.'),
    Q(L,'¿Qué etapa de Tuckman se caracteriza por discusiones y poca colaboración?','Tormenta',['Formación','Normalización','Desempeño'],'La secuencia es formación, tormenta, normalización, desempeño y disolución.'),
    Q(L,'En la etapa de normalización, el equipo suele:','Construir confianza y establecer acuerdos',['Discutir con poca colaboración','Terminar el proyecto y disolverse','Trabajar ya coordinadamente en su máximo desempeño'],'La normalización se caracteriza por confianza, acuerdos y colaboración creciente.'),
    Q(L,'¿Cuál es una práctica propia de la escucha activa?','Parafrasear y resumir lo que expresó la otra persona',['Interrumpir para dar consejos rápidamente','Emitir un juicio antes de preguntar','Desviar la conversación hacia una experiencia propia'],'La escucha activa incluye atención, empatía, preguntas, parafraseo y resumen.'),
    Q(L,'Según los cinco pasos de Lledó, luego de identificar la causa corresponde:','Analizar el problema',['Implementar una decisión','Comprobar el resultado','Elegir una alternativa sin analizar'],'El orden es identificar causa, analizar, buscar alternativas, decidir y comprobar.'),
    Q(C,'¿Cómo se calcula la cantidad de canales de comunicación entre n participantes?','n × (n − 1) / 2',['n × 2','n − 1','n²'],'La fórmula es n multiplicado por n menos uno, dividido por dos.'),
    Q(C,'Con cinco participantes, ¿cuántos canales de comunicación hay?','10',['5','20','25'],'5 × (5 − 1) / 2 = 10 canales.'),
    Q(C,'El director publica un documento en una intranet para que cada interesado lo consulte. ¿Qué método usa?','Pull',['Push','Interactivo','Exclusivamente oral'],'Pull permite que el receptor busque la información disponible.'),
    Q(C,'Enviar un correo directamente a los interesados es un ejemplo de:','Push',['Pull','Comunicación interactiva','Comunicación cara a cara'],'Push consiste en enviar la información al destinatario.'),
    Q(C,'Una reunión en la que las partes intercambian mensajes es comunicación:','Interactiva',['Pull','Push','Unidireccional'],'La comunicación interactiva es bidireccional, como una reunión.'),
    Q(C,'¿Qué término refiere al tono de voz?','Paralingüística',['Quinesia','Ruido técnico','Codificación visual'],'Paralingüística se relaciona con el tono de voz; quinesia, con gestos y expresiones.'),
    Q(T,'¿Qué nivel de testing prueba cada módulo de manera independiente?','Componentes o unitario',['Integración','Sistema','Aceptación'],'El testing unitario prueba módulos o unidades por separado.'),
    Q(T,'¿Qué nivel comprueba la interacción entre componentes integrados?','Integración',['Componentes','Sistema','Aceptación'],'Integración verifica cómo interactúan los componentes.'),
    Q(T,'Una prueba comprueba el comportamiento según especificaciones sin inspeccionar el código. Es:','Caja negra',['Caja blanca','Estructural','Regresión'],'Caja negra se centra en el comportamiento; caja blanca examina la estructura interna.'),
    Q(T,'¿Qué tipo de prueba evalúa rendimiento, volumen o concurrencia?','No funcional',['Funcional','Confirmación','Humo'],'Las pruebas no funcionales evalúan cómo funciona el sistema, por ejemplo su rendimiento.')
  ];

  var ex2 = [
    Q(R,'¿Cuál de estas tareas corresponde a Gestionar el equipo?','Dar retroalimentación y resolver conflictos',['Contratar nuevos integrantes','Definir inicialmente roles y responsabilidades','Organizar la capacitación como única actividad'],'Gestionar incluye seguimiento del desempeño, retroalimentación y resolución de conflictos.'),
    Q(R,'¿Cuál herramienta de planificación de RRHH estudia el comportamiento de las personas en las organizaciones?','Teoría de la organización',['Pruebas de regresión','Minuta de reunión','Registro de incidentes'],'La teoría de la organización es una herramienta de planificación de RRHH.'),
    Q(R,'¿Qué poder se basa en que otras personas reconocen o se identifican con alguien?','Poder referente',['Poder formal','Poder de penalidad','Poder de recompensas'],'El poder referente surge de la identificación o reconocimiento de otras personas.'),
    Q(R,'¿Qué puede perjudicar la cohesión del equipo según el manual?','Premiar a un único ganador como reconocimiento exclusivo',['Reconocer al equipo por objetivos superados','Capacitar al equipo','Establecer reglas básicas compartidas'],'Los premios con un solo ganador pueden dañar la cohesión.'),
    Q(L,'Un líder permite autonomía porque confía en que el equipo tiene destrezas para decidir. ¿Qué estilo es?','Liberal o laissez-faire',['Autoritario','Transaccional','Transformacional'],'El estilo liberal deja decidir a personas capacitadas y autónomas.'),
    Q(L,'En el liderazgo democrático, ¿quién tiene la última palabra?','El líder, aunque promueve participación y consenso',['El integrante de mayor antigüedad','Una votación obligatoria sin intervención del líder','Cada persona por separado'],'El equipo participa y busca consenso, pero el líder decide al final.'),
    Q(L,'¿Qué caracteriza al liderazgo natural?','Surge sin que la persona tenga necesariamente un cargo formal',['Se basa siempre en sanciones formales','Solo aparece durante una emergencia','Requiere nombramiento jerárquico'],'El liderazgo natural emerge del grupo sin depender de un cargo.'),
    Q(L,'¿Qué enfoque considera que el conflicto es inevitable y puede ser útil si se gestiona bien?','Visión moderna',['Visión tradicional','Enfoque de silencio','Enfoque de separación obligatoria'],'La visión moderna considera que el conflicto puede aportar si se resuelve adecuadamente.'),
    Q(L,'En las cuatro erres para abordar conflictos, “dejar que la otra persona exprese lo que siente” corresponde a:','Respetar',['Relajarse','Reflexionar','Responder'],'Respetar implica permitir que la otra parte exprese sus sentimientos.'),
    Q(L,'¿Qué conviene hacer ante un conflicto, según el manual?','Hablar cara a cara y registrar el incidente',['Evitar documentarlo','Resolverlo solo mediante mensajes impersonales','Separar siempre físicamente a los involucrados'],'El manual recomienda conversar cara a cara y dejar constancia en el registro de incidentes.'),
    Q(C,'¿Qué confirma que el receptor comprendió el mensaje?','La retroalimentación',['El canal por sí solo','El ruido técnico','La cantidad de participantes'],'La retroalimentación permite confirmar la comprensión.'),
    Q(C,'Una interrupción causada por una falla del medio de transmisión es ruido:','Técnico',['Semántico','De influencia','Organizacional'],'El ruido técnico se origina en fallas del medio.'),
    Q(C,'Un prejuicio o actitud previa que distorsiona la recepción es ruido:','De influencia',['Técnico','Semántico','De volumen'],'El ruido de influencia nace de actitudes o prejuicios.'),
    Q(C,'Cuando las palabras usadas generan una interpretación confusa, se trata de ruido:','Semántico',['Técnico','De influencia','De agenda'],'El ruido semántico se relaciona con el lenguaje.'),
    Q(C,'La comunicación entre colegas del mismo nivel jerárquico es:','Horizontal',['Vertical','Externa','Siempre informal'],'Horizontal es la comunicación entre colegas; vertical, entre niveles jerárquicos.'),
    Q(C,'¿Qué debería hacerse antes de elegir el medio de comunicación?','Conocer al público objetivo y adaptar el mensaje',['Elegir siempre el medio más tecnológico','Enviar idéntico mensaje a todos sin considerar sus necesidades','Definir primero el presupuesto de testing'],'El manual indica conocer al público, sus hábitos, necesidades y costumbres.'),
    Q(T,'¿Qué etapa del proceso de testing define objetivos, riesgos, estrategia y criterios?','Planificación y control',['Análisis y diseño','Implementación y ejecución','Aceptación'],'En planificación y control se definen objetivos, riesgos, estrategia y criterios.'),
    Q(T,'¿En qué etapa se crean condiciones, casos, datos y entorno de prueba?','Análisis y diseño',['Planificación y control','Implementación y ejecución','Regresión'],'Análisis y diseño prepara condiciones, casos, datos y entorno.'),
    Q(T,'Después de corregir un defecto, repetir la prueba que falló para confirmar la corrección es:','Testing de confirmación',['Regresión','Humo','Testing de sistema'],'Confirmación verifica que el defecto corregido desapareció.'),
    Q(T,'Luego de un cambio, probar que las funciones existentes no se hayan roto es:','Testing de regresión',['Confirmación','Humo','Aceptación'],'Regresión busca efectos secundarios del cambio en funciones existentes.')
  ];

  var ex3 = [
    Q(R,'¿Qué proceso mejora competencias, confianza y colaboración durante la ejecución?','Desarrollar el equipo',['Planificar el equipo','Adquirir el equipo','Controlar comunicaciones'],'Desarrollar mejora las capacidades y la dinámica del equipo.'),
    Q(R,'¿Cuál es la secuencia correcta de los procesos de RRHH presentada en el manual?','Planificar, adquirir, desarrollar y gestionar',['Adquirir, planificar, gestionar y desarrollar','Planificar, gestionar, adquirir y controlar','Desarrollar, adquirir, planificar y cerrar'],'El manual distingue cuatro procesos: planificar, adquirir, desarrollar y gestionar.'),
    Q(R,'¿Qué criterio puede usarse en una decisión multicriterio para incorporar personal?','Disponibilidad, capacidades y experiencia',['Solo la antigüedad del director','Únicamente el número de canales de comunicación','La cantidad de casos de prueba fallidos'],'La adquisición puede considerar disponibilidad, capacidades, experiencia, idiomas, salario y otros factores.'),
    Q(R,'¿Cuál afirmación sobre el poder de penalidad coincide con el material?','Se basa en imponer castigos y se destaca como el peor poder',['Se basa en el conocimiento experto','Proviene de la identificación del equipo','Consiste en otorgar premios'],'El poder de penalidad es el de imponer castigos y el material lo considera el peor.'),
    Q(L,'¿Qué etapa de Tuckman corresponde cuando el equipo trabaja coordinadamente y resuelve problemas?','Desempeño',['Formación','Tormenta','Disolución'],'En desempeño el grupo trabaja coordinadamente; disolución ocurre al terminar el trabajo.'),
    Q(L,'¿Cuál es el orden de las etapas de Tuckman?','Formación, tormenta, normalización, desempeño y disolución',['Tormenta, formación, desempeño, disolución y normalización','Formación, normalización, tormenta, disolución y desempeño','Formación, desempeño, tormenta, normalización y disolución'],'Ese es el orden de las cinco etapas del modelo.'),
    Q(L,'En los siete pasos de resolución de conflictos, después de preguntas y respuestas sigue:','Comprender los sentimientos de la otra parte',['Acordar inmediatamente la solución','Evaluar el resultado final','Describir el problema antes de escuchar'],'El orden incluye escuchar, describir, preguntar y responder, comprender sentimientos, reconocer problema, acordar solución y evaluar.'),
    Q(L,'¿Qué conducta debe evitarse durante la escucha activa?','Interrumpir o emitir juicios antes de comprender',['Hacer preguntas para aclarar','Demostrar atención con gestos','Resumir lo escuchado'],'El manual recomienda evitar interrupciones, juicios y consejos prematuros.'),
    Q(L,'¿Qué estilo de liderazgo puede ser útil en una urgencia porque concentra decisiones?','Autoritario',['Liberal','Democrático','Natural'],'El autoritario concentra decisiones y puede ser útil en situaciones urgentes.'),
    Q(L,'El liderazgo de la curva relaciona principalmente:','Bienestar, motivación y productividad',['Castigos, sanciones y antigüedad','Canales, ruido y retroalimentación','Cobertura de código y defectos'],'Se vincula la curva de bienestar y motivación con la productividad.'),
    Q(C,'¿Qué porcentaje aproximado del tiempo del director de proyecto se dedica a comunicar, según el manual?','90%',['30%','60%','100%'],'El manual señala aproximadamente el noventa por ciento.'),
    Q(C,'Según el manual, cerca del 60% de la comunicación es:','No verbal',['Escrita formal','Técnica','Unidireccional'],'El material indica que cerca del sesenta por ciento es no verbal.'),
    Q(C,'¿Qué dimensión describe la comunicación entre jefe y empleado?','Vertical',['Horizontal','Externa','Interactiva necesariamente'],'Vertical se da entre distintos niveles jerárquicos.'),
    Q(C,'Una comunicación por correo puede clasificarse como:','Escrita y mediatizada',['Oral y directa','Cara a cara','No verbal únicamente'],'El correo es escrito y requiere tecnología, por lo que es mediatizado.'),
    Q(C,'¿Qué debe comprobar el proceso de Controlar las comunicaciones?','Si se satisfacen las necesidades informativas de los interesados',['Si todos los integrantes fueron contratados','Si el código tiene cobertura estructural','Si el conflicto desaparece sin seguimiento'],'Controlar verifica las necesidades de información y puede generar solicitudes de cambio.'),
    Q(C,'¿Cuál elemento contribuye a una reunión eficaz?','Agenda anticipada y minuta',['Agenda improvisada al comenzar y sin responsables','Duración indefinida','No asignar plazos a los acuerdos'],'El manual recomienda objetivo, agenda anticipada, horario, responsables, plazos y minuta.'),
    Q(T,'¿Qué nivel de testing evalúa el producto completo?','Sistema',['Componentes','Integración','Solo aceptación'],'El testing de sistema prueba el producto completo.'),
    Q(T,'¿Qué tipo de testing examina la estructura interna del código?','Caja blanca',['Caja negra','No funcional','Humo'],'Caja blanca examina la estructura interna del código.'),
    Q(T,'Un caso de prueba debe incluir, entre otros elementos:','Identificador, funcionalidad, objetivo, pasos y resultado esperado',['Solo el nombre del tester y el presupuesto','Únicamente el resultado obtenido, sin entrada ni pasos','La estructura organizacional del equipo'],'El manual enumera esos campos para describir un caso de prueba.'),
    Q(T,'Para un requisito, ¿qué combinación mínima de casos recomienda el manual?','Al menos un caso positivo y uno negativo',['Solo casos positivos','Solo casos negativos','Un caso de regresión, sin importar el requisito'],'Conviene verificar tanto el comportamiento válido como el inválido.')
  ];

  function withIds(id, list) {
    list.forEach(function (q, i) { q.id = id + '-' + (i + 1); });
    return list;
  }
  function blurb(list) {
    var n = {};
    list.forEach(function (q) { n[q.t] = (n[q.t] || 0) + 1; });
    return Object.keys(n).map(function (k) { return k + ' ' + n[k]; }).join(' · ');
  }
  window.EXAMS = [
    { id: 1, title: 'Simulacro 1', questions: withIds(1, ex1), blurb: blurb(ex1) },
    { id: 2, title: 'Simulacro 2', questions: withIds(2, ex2), blurb: blurb(ex2) },
    { id: 3, title: 'Simulacro 3', questions: withIds(3, ex3), blurb: blurb(ex3) }
  ];
})();
