/* Banco de preguntas v2 — Parcial 2, Gestión de Proyectos.
   Más difíciles (situaciones, "cuál es falsa", opciones parecidas) y menos RRHH.
   Reparto por simulacro: RRHH 4 · Comunicaciones 6 · Liderazgo 5 · Testing 5.
   Formato: Q(tema, pregunta, correcta, [incorrectas], explicación)
   La correcta se escribe primero; el orden real se mezcla al rendir. */
(function () {
  var Q = function (t, q, ok, bad, e) {
    var opts = [{ x: ok, ok: true }].concat(bad.map(function (x) { return { x: x, ok: false }; }));
    opts.forEach(function (o, k) { o.k = k; });
    return { t: t, q: q, o: opts, e: e };
  };

  var R = 'RRHH', C = 'Comunicaciones', L = 'Liderazgo', T = 'Testing';

  /* ======================= SIMULACRO 1 ======================= */
  var ex1 = [
    /* RRHH */
    Q(R, 'Un director de proyecto nombra líder técnico a su mejor programador solo por su rendimiento individual, sin evaluar si sabe liderar. ¿Qué error describe el material?',
      'Efecto halo',
      ['Asignación previa mal negociada', 'Falla de una decisión multicriterio', 'Ruido de influencia'],
      'Efecto halo: asumir que quien fue muy bueno en algo lo será en otra cosa (buen jugador, entonces buen técnico; buen ingeniero, entonces buen DP).'),
    Q(R, '¿Cuál de las siguientes afirmaciones sobre los tipos de poder es CORRECTA?',
      'Experto y recompensas están entre los mejores poderes; penalidad es el peor',
      ['El poder formal es el mejor porque se apoya en el cargo que se ocupa', 'El poder de penalidad es de los mejores porque asegura el cumplimiento', 'El poder referente es el peor porque lo otorga un superior'],
      'El poder formal suele creerse el mejor, pero no lo es. Pesa más que el DP sea reconocido por sus conocimientos que tener un cargo en la tarjeta.'),
    Q(R, 'Un equipo recién conformado discute con intensidad las decisiones técnicas y la gestión del proyecto, con poca colaboración. ¿En qué etapa de Tuckman está y cuál sigue?',
      'Tormenta; sigue Normalización',
      ['Formación; sigue Tormenta', 'Normalización; sigue Desempeño', 'Tormenta; sigue Desempeño'],
      'Orden: Formación, Tormenta, Normalización, Desempeño, Disolución. En Normalización aparecen el trabajo en equipo, la colaboración y la confianza.'),
    Q(R, '¿Cuál de estas herramientas NO pertenece a Desarrollar el equipo?',
      'Decisiones multicriterio',
      ['Capacitación', 'Reglas básicas', 'Reconocimiento y recompensas'],
      'Las decisiones multicriterio (criterios ponderados para elegir a las personas) son una herramienta de Adquirir el equipo.'),

    /* Comunicaciones */
    Q(C, 'Un proyecto pasa de tener 5 interesados a tener 8. ¿Cuántos canales de comunicación se agregan?',
      '18',
      ['3', '10', '28'],
      'Canales = n × (n − 1) / 2. Con 5 hay 10 y con 8 hay 28, así que se agregan 28 − 10 = 18.'),
    Q(C, '¿Cuál afirmación sobre las responsabilidades en el modelo emisor-receptor es correcta?',
      'El emisor confirma que el mensaje fue comprendido y el receptor confirma que lo entendió',
      ['Solo el emisor es responsable de que el mensaje llegue a ser entendido', 'El receptor solo decodifica; confirmar la comprensión no es parte de su rol', 'El canal elegido garantiza por sí mismo la comprensión del mensaje'],
      'Emisor: codifica con cuidado, envía información clara y completa, elige el método y confirma la comprensión. Receptor: decodifica con cuidado, se asegura de haber entendido todo y usa escucha efectiva.'),
    Q(C, 'Un gerente descarta sin leerla la propuesta de un proveedor porque “ese país siempre fue rival del nuestro”. ¿Qué ruido de la clasificación del apunte se manifiesta?',
      'Ruido de influencia',
      ['Ruido de semántica', 'Ruido técnico', 'Ruido de canal'],
      'Los ruidos de influencia nacen de las actitudes corrientes y de las ideas e informaciones previas de las partes (como el nacionalismo).'),
    Q(C, 'En una videollamada se corta el audio por una falla de conexión. ¿Qué ruido es y qué lo caracteriza?',
      'Técnico: se debe a defectos en el medio de transmisión y es el más fácil de evitar',
      ['Semántico: se origina en el lenguaje usado y es el más fácil de evitar', 'De influencia: se origina en ideas previas y es el más difícil de evitar', 'Técnico: se origina en el lenguaje usado y es el más difícil de evitar'],
      'Tres tipos según el apunte: de semántica (lenguaje), de influencia (actitudes e ideas previas) y técnicos (defectos en los medios de transmisión o en el sentido de quien recibe).'),
    Q(C, '¿Cuál afirmación sobre canales mediatizados y directos es correcta?',
      'Mediatizados: requieren tecnología (teléfono, e-mail, SMS). Directos: cara a cara, según la habilidad individual',
      ['Los directos requieren alguna tecnología para producir el mensaje y contactar a la fuente con el receptor', 'Los mediatizados son aquellos en que emisor y receptor siempre están frente a frente, sin intermediarios', 'El teléfono es un canal directo porque la conversación entre emisor y receptor ocurre en tiempo real'],
      'Mediatizado: el contacto no es directo sino a través de un vehículo físico externo (radio, prensa, TV, internet, teléfono, e-mail, SMS). Directo: hablar, escuchar, indicios no verbales.'),
    Q(C, 'Un DP publica el avance en la intranet y cada interesado entra a consultarlo cuando quiere. ¿Qué método de comunicación usa?',
      'Pull',
      ['Push', 'Interactivo', 'Bidireccional'],
      'Pull: el receptor va a buscar la información (intranet). Push: se envía al receptor (e-mail). Interactivo o bidireccional: una reunión.'),

    /* Liderazgo */
    Q(L, 'En un equipo, el líder fija metas claras, da bonos a quien las cumple y sanciona a quien no. Las decisiones están centralizadas y las instrucciones van en un solo sentido. ¿Qué liderazgo practica?',
      'Transaccional',
      ['Autoritario o autocrático', 'Transformacional', 'Liberal o laissez-faire'],
      'Lo que lo define es el sistema de recompensa y castigo con motivación extrínseca. El autocrático se basa en la autoridad del cargo, sin ese esquema de incentivos.'),
    Q(L, '¿Cuál de estas características pertenece al liderazgo transformacional y NO al transaccional?',
      'Motivación intrínseca y relación de mentor o coach',
      ['Enfoque en el cumplimiento y en objetivos a corto plazo', 'Comunicación unidireccional con decisiones centralizadas', 'Mantener el statu quo y los procedimientos existentes'],
      'El transformacional apunta al cambio, la visión a largo plazo, la motivación intrínseca y la innovación. Las otras tres son del transaccional.'),
    Q(L, 'Un compañero sin ningún cargo es seguido por todos de forma voluntaria porque creen en su visión. ¿Qué lo distingue de un líder autoritario?',
      'No impone su voluntad ni usa un cargo: surge de manera orgánica en el grupo',
      ['Cuenta con un título formal que respalda sus decisiones y que nadie discute', 'Establece sanciones para quien no cumple las recomendaciones que da al grupo', 'Deja que cada integrante decida sin intervenir y solo aporta recursos'],
      'Es el liderazgo natural: nadie lo cuestiona, se toman sus guías como algo a cumplir y lo siguen porque creen en él.'),
    Q(L, '¿Cuál de estos comportamientos es una señal VERBAL de escucha activa?',
      'Parafrasear lo que dijo el otro',
      ['Mantener el contacto visual', 'Esbozar una sonrisa ligera', 'Inclinar el cuerpo hacia quien habla'],
      'Señales verbales: palabras de refuerzo (sin exagerar), parafrasear, resumir y hacer preguntas. Contacto visual, sonrisa ligera y no distracción son señales no verbales.'),
    Q(L, 'Dos integrantes discuten y el líder solo les pide que arreglen el roce de la última reunión, sin indagar más. Según el apunte, ¿qué riesgo corre?',
      'Las soluciones serán superficiales y efímeras, y la tensión volverá a surgir',
      ['Se rompe el trato igualitario entre las partes involucradas', 'Los involucrados se comprometerán demasiado con la solución', 'El conflicto se resolverá, pero sin que haya existido escucha'],
      'El líder debe revelar las causas profundas sin detenerse en detalles insignificantes; si no se resuelve la cuestión central, vuelven a resurgir situaciones de tensión.'),

    /* Testing */
    Q(T, 'Un desarrollador corrige un defecto en facturación. Para verificar que no se rompió nada en clientes, que depende de facturación, el equipo repite pruebas que ya habían pasado. ¿Qué testing es?',
      'Regresión',
      ['Confirmación', 'De humo', 'Estructural'],
      'Regresión: pruebas repetidas tras un cambio para descubrir errores introducidos, en el software testeado o en otro componente relacionado o no. La confirmación solo repite la prueba que había fallado.'),
    Q(T, '¿Cuál de estas afirmaciones sobre el testing funcional es FALSA?',
      'Solo puede llevarse a cabo en el nivel de prueba de sistema',
      ['Considera el comportamiento externo del software (caja negra)', 'Las funciones pueden estar en una especificación o no estar documentadas', 'Se enfoca en “lo que” el sistema hace'],
      'Las pruebas funcionales se pueden llevar a cabo en todos los niveles de prueba.'),
    Q(T, 'Se simulan cientos de usuarios conectados a la vez para medir los tiempos de respuesta del sistema. ¿Cómo se clasifica esta prueba?',
      'No funcional',
      ['Funcional', 'Estructural', 'De confirmación'],
      'Las no funcionales miden “cómo” funciona el sistema con características cuantificables (performance, volumen, concurrencia, stress).'),
    Q(T, 'En el proceso fundamental del testing, ¿en qué etapa se informan las discrepancias como incidentes?',
      'Implementación y ejecución de pruebas',
      ['Planificación y control', 'Análisis y diseño', 'Esa tarea no pertenece al proceso fundamental'],
      'Implementación y ejecución: ejecutar los casos, registrar resultados y versión, comparar con lo esperado, informar discrepancias como incidentes y repetir tras las correcciones.'),
    Q(T, 'Según el CU03 del apunte, ¿qué resultado esperado tiene el caso de prueba con el DNI de un paciente inexistente?',
      'El sistema informa que no se recuperaron datos para el DNI ingresado',
      ['El sistema da de alta automáticamente al paciente con el DNI ingresado', 'El campo Obra Social se completa con “Particular” y se recupera el paciente', 'El campo Con Cobertura queda seleccionado porque no hay paciente'],
      'Es el CP03. Recién en el CP06, desde ese mensaje, se elige agregar un paciente y se abre Administrar Pacientes.')
  ];

  /* ======================= SIMULACRO 2 ======================= */
  var ex2 = [
    /* RRHH */
    Q(R, 'Un DP sostiene que los conflictos son inevitables, surgen de interacciones organizacionales y pueden ser beneficiosos, así que hay que identificar las causas y resolver el problema entre los involucrados. ¿Qué posición adopta?',
      'Gestión moderna',
      ['Vieja escuela', 'Método secuencial abierto', 'Ninguna: es una técnica de Adquirir el equipo'],
      'La vieja escuela ve el conflicto como un problema de personalidad y falta de liderazgo que debe evitarse (separación física o intervención de la alta gerencia).'),
    Q(R, '¿Cuál es la secuencia correcta de resolución de conflictos según el libro de Lledó?',
      'Identificar la causa, analizar el problema, identificar alternativas, implementar una decisión y revisar si resolvió',
      ['Analizar el problema, identificar la causa, implementar una decisión, identificar alternativas y revisar', 'Identificar alternativas, identificar la causa, analizar el problema, implementar una decisión y revisar', 'Identificar la causa, identificar alternativas, analizar el problema, revisar y recién ahí implementar una decisión'],
      'No confundir con los 7 pasos del apunte de Liderazgo (escuchar, descripción, preguntas y respuestas, sentimientos, el problema, solución y evaluación).'),
    Q(R, 'En el flujo de RRHH, ¿qué proceso recibe como entrada las personas asignadas y la disponibilidad de recursos y produce las evaluaciones de desempeño?',
      'Desarrollar el equipo',
      ['Adquirir el equipo', 'Gestionar el equipo', 'Planificar la gestión de RRHH'],
      'Adquirir produce las personas asignadas y la disponibilidad; Desarrollar produce las evaluaciones de desempeño, que pasan a Gestionar el equipo.'),
    Q(R, 'En un proyecto grande, el DP planifica con los miembros clave y el resto se suma durante la ejecución. ¿Qué afirmación es correcta?',
      'Adquirir el equipo es de ejecución, aunque el equipo hace falta para planificar',
      ['Adquirir el equipo es un proceso del grupo de planificación', 'Todos los miembros deben estar contratados antes de empezar a planificar', 'Adquirir el equipo ocurre recién en el cierre del proyecto'],
      'Adquirir el equipo es un proceso de ejecución. En proyectos grandes no se contrata a todos antes de empezar.'),

    /* Comunicaciones */
    Q(C, '¿Cuál de estas asociaciones entre método y ejemplo es INCORRECTA?',
      'Pull: enviar un e-mail a todos los interesados',
      ['Push: enviar un e-mail a todos los interesados', 'Pull: desarrollar una intranet', 'Interactivo: una reunión'],
      'El e-mail unilateral es push. Pull es que el receptor vaya a buscar la información (intranet). Interactivo o bidireccional: una reunión.'),
    Q(C, 'Apenas escucha una propuesta, un interesado dice “eso es imposible, no se puede hacer” y la conversación se corta. Según el material, ¿qué es esa persona?',
      'Un bloqueador de la información',
      ['Una fuente de ruido semántico', 'Un receptor con escucha efectiva', 'Un emisor que codificó mal el mensaje'],
      'Los bloqueadores cortan la información con frases como “es inviable”, “será carísimo” o “NO NO NO”. Los ruidos son otra cosa: mala codificación, distancias, hostilidad, lenguaje, cultura.'),
    Q(C, '¿Cuál de estas afirmaciones sobre los tiempos y las proporciones de la comunicación es correcta?',
      'El DP dedica aproximadamente el 90% de su tiempo a comunicar y cerca del 60% de la comunicación es no verbal',
      ['El DP dedica aproximadamente el 60% de su tiempo a comunicar y cerca del 90% de la comunicación es no verbal', 'El DP dedica aproximadamente el 90% de su tiempo a comunicar y cerca del 60% de la comunicación es verbal', 'El DP dedica aproximadamente el 60% de su tiempo a comunicar y cerca del 60% de la comunicación es no verbal'],
      'Hay que fijar bien cuál porcentaje es de qué: 90% del tiempo del DP (en grandes proyectos) y 60% no verbal.'),
    Q(C, 'El tono de voz y las expresiones corporales y faciales se llaman, respectivamente:',
      'Paralingüística y quinesia',
      ['Quinesia y paralingüística', 'Ambas se llaman paralingüística', 'Ambas se llaman quinesia'],
      'Paralingüística: tono de voz. Quinesia: expresiones corporales y faciales.'),
    Q(C, 'El plan de gestión de las comunicaciones debe incluir todo lo siguiente, EXCEPTO:',
      'Un plan de recompensas individual y grupal',
      ['La frecuencia de la comunicación', 'Un glosario de términos comunes', 'La tecnología a utilizar'],
      'El plan incluye canales, formato y contenido, responsables y destinatarios, tecnología, frecuencia y glosario. El plan de recompensas es de RRHH.'),
    Q(C, '¿Cuál NO es una buena práctica para lograr reuniones efectivas?',
      'Distribuir el orden del día recién al comenzar la reunión',
      ['Fijar horario de inicio y fin, y respetarlo', 'Asignar plazos a cada entregable que salga de la reunión', 'Documentar y publicar la minuta'],
      'Los puntos del orden del día se distribuyen por anticipado.'),

    /* Liderazgo */
    Q(L, '¿Cuál frase refleja mejor la visión del apunte sobre los conflictos en un equipo?',
      'Lo malo no es el conflicto sino su mala gestión: un equipo no preparado para gestionarlos está condenado',
      ['Un equipo sin conflictos es un equipo exitoso y bien liderado, que logra evitar el desgaste', 'Lo mejor es evitar los conflictos y derivarlos cuanto antes a la gerencia para que los resuelva', 'Un conflicto bien gestionado siempre termina con un ganador y un perdedor claramente definidos'],
      'Según el apunte, un equipo sin conflictos es un equipo que no existe.'),
    Q(L, 'El “método secuencial abierto” para resolver conflictos parte de:',
      'La escucha como elemento fundamental, con turnos de preguntas y respuestas',
      ['La intervención de la alta gerencia como árbitro final del conflicto', 'La separación física de las partes hasta que baje la tensión', 'Una votación entre los integrantes del equipo para decidir la solución'],
      'Cada parte expresa sus sentimientos, comprende la postura de la otra y se llega a una solución o acuerdo y a cómo llevarla a cabo.'),
    Q(L, 'En el liderazgo participativo o democrático, ¿cuál afirmación es CORRECTA?',
      'Todos participan, el líder tiene la última palabra y la meta es el consenso',
      ['El líder deja que cada integrante decida lo que considere oportuno', 'Las decisiones son del líder y no se discuten con el equipo', 'Toda decisión se toma por votación y el líder no puede opinar'],
      'Hay colaboración activa y diálogo constante, y todos participan en igualdad de condiciones. “Deja que cada uno decida” es el laissez-faire.'),
    Q(L, '¿Cuál es el problema del liderazgo liberal o laissez-faire según el apunte?',
      'El líder debe estar convencido de que el equipo tiene las destrezas para decidir',
      ['El líder concentra todo el triunfo y también la responsabilidad de los errores', 'Depende de un sistema de premios y sanciones para sostener el desempeño', 'El líder necesita imponer su voluntad para que lo sigan'],
      'En este estilo cada uno hace y decide lo que considera oportuno y el líder solo provee recursos y herramientas, porque trabaja con personas muy autónomas y capacitadas.'),
    Q(L, '¿Qué afirmación describe correctamente el liderazgo “de la curva”?',
      'Crea un entorno tan positivo que bienestar y motivación suben solos, con productividad en curva ascendente',
      ['Alterna etapas de mucha supervisión con etapas de libertad total, según el rendimiento del equipo', 'Premia más a quienes están en la parte alta de la curva de rendimiento individual del equipo', 'Hace atravesar al equipo etapas sucesivas, desde su formación hasta su disolución'],
      'Se basa en la “curva de la felicidad”. No confundir con las etapas de Tuckman.'),

    /* Testing */
    Q(T, '¿Cuál de estas afirmaciones corresponde al testing de integración?',
      'Comprueba la interacción entre componentes tras integrar el sistema y lo pueden ejecutar desarrolladores o testers',
      ['Prueba cada componente de forma independiente para descubrir fallos producidos por defectos internos', 'Se basa en los requisitos, en los procesos de negocio o en las secuencias de los casos de uso', 'Evalúa la calidad del producto antes de una recepción formal del equipo de pruebas o del usuario'],
      'Probar cada componente de forma independiente es testing de componentes (unitario); basarse en procesos de negocio y casos de uso es de sistema; evaluar antes de una recepción formal es propio de las pruebas de humo.'),
    Q(T, 'Las pruebas de sistema pueden basarse en:',
      'Requisitos, procesos de negocio o casos de uso',
      ['Solo en la estructura interna del código', 'Únicamente en los defectos hallados en los componentes', 'Exclusivamente en los criterios de aceptación del cliente'],
      'Basadas en requisitos (especificaciones), en procesos de negocio o en casos de uso (secuencias).'),
    Q(T, '¿Cuál afirmación sobre las pruebas estructurales es correcta?',
      'Miden cuánto de la estructura fue cubierta por los casos de prueba, sobre todo en componentes e integración',
      ['Se basan en la especificación y tratan al sistema como una caja negra, sin mirar el código', 'Se aplican solamente en el nivel de aceptación, una vez entregado el producto al usuario', 'Miden tiempos de respuesta del sistema cuando muchos usuarios lo usan al mismo tiempo'],
      'Son pruebas de caja blanca. Las que miden tiempos de respuesta son no funcionales.'),
    Q(T, '¿Qué distingue una prueba de humo de una de regresión?',
      'La de humo es una revisión rápida previa a una recepción formal; la de regresión repite pruebas tras un cambio',
      ['La de humo confirma que un defecto original fue retirado; la de regresión revisa la operación básica', 'La de humo se hace solo sobre el código (caja blanca) y la de regresión sobre la especificación', 'No hay diferencia: son sinónimos de la misma prueba que repite casos ya ejecutados'],
      'Humo (smoke): revisión rápida del producto antes de entregarlo al equipo de pruebas o al usuario final. La confirmación es la que verifica que el defecto original fue retirado.'),
    Q(T, 'Un caso de prueba formal tiene una entrada conocida y una salida esperada. ¿Qué prueba cada una?',
      'La entrada prueba una precondición y la salida esperada prueba una postcondición',
      ['La entrada prueba una postcondición y la salida esperada prueba una precondición', 'Ambas prueban precondiciones del caso de uso', 'Ambas prueban características no funcionales'],
      'Es la característica de un escrito formal de caso de prueba.')
  ];

  /* ======================= SIMULACRO 3 ======================= */
  var ex3 = [
    /* RRHH */
    Q(R, 'En un equipo de desarrollo se premia con un viaje a un único “empleado del mes”. ¿Qué efecto advierte el material?',
      'Puede perjudicar la cohesión; conviene premiar a cualquiera que supere el objetivo',
      ['Aumenta la cohesión porque genera una competencia sana entre los integrantes del equipo', 'No tiene efecto sobre el equipo si el premio es lo bastante atractivo para todos', 'Es la forma recomendada de reconocimiento y recompensas dentro del equipo de trabajo'],
      'Reconocimiento y recompensas es una herramienta de Desarrollar el equipo.'),
    Q(R, 'Un DP reúne cara a cara a los involucrados en una discusión técnica y después deja asentados el problema y su resolución. ¿Qué técnica y qué registro usa?',
      'Reunión cara a cara y registro de incidentes',
      ['Separación física y registro de riesgos', 'Intervención de la alta gerencia y registro de interesados', 'Reunión cara a cara y registro de lecciones aprendidas'],
      'La reunión cara a cara es de las mejores técnicas para resolver conflictos y el problema se documenta en el registro de incidentes.'),
    Q(R, 'Gestionar el equipo incluye tres actividades. ¿Cuál de las siguientes NO es una de ellas?',
      'Contratar nuevos trabajadores internos o externos',
      ['Hacer el seguimiento del desempeño de los miembros', 'Dar retroalimentación al equipo', 'Resolver conflictos y polémicas'],
      'Contratar es parte de Adquirir el equipo.'),
    Q(R, '¿Qué herramienta de Planificar la gestión de RRHH aporta información sobre el comportamiento de las personas en las organizaciones (sistemas abiertos, cerrados, naturales y racionales)?',
      'Teoría de la organización',
      ['Organigramas y descripción de cargos', 'Creación de relaciones de trabajo (conexiones)', 'Decisiones multicriterio'],
      'Las otras dos de planificación son los organigramas (cargo y nivel jerárquico) y las conexiones (por ejemplo, una reunión informal los viernes).'),

    /* Comunicaciones */
    Q(C, 'Según el apunte, ¿cuál es el punto de partida para elegir el medio de comunicación más apropiado?',
      'Conocer al público objetivo: cómo es, qué busca, sus hábitos y costumbres',
      ['Elegir el canal de mayor alcance disponible en el mercado', 'Definir primero la frecuencia de envío de los mensajes al cliente', 'Aprovechar las sinergias entre canales antes de conocer al cliente'],
      'Solo así se puede iniciar una conversación que aporte valor. El consumidor actual es multicanal y compra experiencias, por eso se personaliza.'),
    Q(C, 'Según el apunte, un canal de amplio alcance que además permite la interacción con los usuarios es:',
      'Interactivo (por ejemplo, las redes sociales)',
      ['Interpersonal (por ejemplo, la radio)', 'Personal (por ejemplo, el boca a boca)', 'Masivo (por ejemplo, la televisión)'],
      'Tipos de canales del apunte: personales, interpersonales e interactivos.'),
    Q(C, 'Según el apunte, un mensaje de un emisor para muchos receptores, sin posibilidad de personalizarlo ni contacto personal, corresponde a un canal:',
      'Interpersonal',
      ['Personal', 'Interactivo', 'Directo'],
      'Ojo con el nombre: así lo llama el apunte (ejemplo: la radio), aunque en general ese perfil se conoce como masivo. Puede haber segmentación previa.'),
    Q(C, '¿Qué ruido puede deberse a que el emisor usa intencionalmente palabras de forma errada o falsa, o a que los participantes no hablan los mismos lenguajes?',
      'Ruido de semántica',
      ['Ruido de influencia', 'Ruido técnico', 'Ruido de canal'],
      'Se origina en el lenguaje.'),
    Q(C, '¿Cuál afirmación sobre el ruido es correcta según el apunte?',
      'Es cualquier interferencia que distorsiona u oculta el mensaje, no solo una molestia sonora',
      ['Es únicamente una falla sonora del canal, como un parlante que se corta', 'Solo aparece cuando el receptor no entiende el idioma del emisor', 'Es inevitable y ninguno de sus tipos puede reducirse con una buena planificación'],
      'También se lo conoce como perturbación de la información. Los ruidos técnicos son los más fáciles de evitar.'),
    Q(C, 'Una nota informal por e-mail de un jefe a su empleado es, según las dimensiones de la comunicación:',
      'Vertical y escrita informal',
      ['Horizontal y escrita informal', 'Vertical y escrita formal', 'Externa y oral informal'],
      'Vertical: jefe-empleado y viceversa. Horizontal: entre colegas. Escrita informal: memos, e-mails, notas. Escrita formal: planes y solicitudes.'),

    /* Liderazgo */
    Q(L, '¿Cuál de estas acciones NO es un error en la escucha activa según el apunte?',
      'Resumir lo dicho antes de exponer el propio punto de vista',
      ['Ofrecer ayuda de manera prematura y sin información', 'Descalificar al otro al dar tu opinión', 'Contar tu propia historia en lugar de escuchar la suya'],
      'Resumir ayuda a dejar claro que se entiende el punto de vista del otro antes de exponer el propio.'),
    Q(L, 'En los 7 pasos propuestos para resolver un conflicto, ¿cuál viene inmediatamente después de “Preguntas y respuestas”?',
      'Sentimientos: analizar e interiorizar los de la otra parte',
      ['El problema: acuerdo sobre su existencia', 'Descripción: describirlo de forma precisa y objetiva', 'Solución: acuerdo sobre una solución posible'],
      'Orden: 1 Escuchar, 2 Descripción, 3 Preguntas y respuestas, 4 Sentimientos, 5 El problema, 6 Solución, 7 Evaluación.'),
    Q(L, 'Dos integrantes discuten y uno es el más antiguo de la empresa. ¿Cómo debe actuar el líder según el apunte?',
      'Dar trato igual a ambas partes, sin importar posición ni antigüedad',
      ['Darle prioridad al que tiene más antigüedad en la empresa', 'Resolverlo él solo, sin que participen los involucrados', 'Postergar la conversación hasta que baje la tensión entre ambos'],
      'Si la situación lo amerita, puede ofrecerles participar en armar la solución: los miembros se comprometen más con metas en las que colaboraron.'),
    Q(L, 'Un líder escucha a un integrante muy enojado sin interrumpirlo y le deja expresar lo que siente. ¿Qué “R” de las recomendaciones aplica?',
      'Respetar',
      ['Relajarse', 'Reflexionar', 'Responder'],
      'Relajarse: mantener la calma. Reflexionar: entender la postura del otro. Respetar: dejar que exprese lo que siente. Responder: que se dé cuenta de que se lo oyó.'),
    Q(L, '¿Cuál de estas NO es una pauta de comportamiento que el apunte espera del líder?',
      'Evitar tomar decisiones y expresar opiniones para no limitar al grupo',
      ['Iniciar o facilitar nuevas ideas y prácticas', 'Defender al grupo contra el ataque y actuar en su nombre', 'Fijar niveles de esfuerzo o cumplimiento y estimular el rendimiento'],
      'El líder limita el comportamiento de los miembros o del grupo en acción, toma decisiones y expresa opiniones.'),

    /* Testing */
    Q(T, '¿Cuál es la función del campo “Objetivo” en un caso de prueba?',
      'Es el fin que se quiere alcanzar, alineado con el resultado esperado',
      ['Indica los pasos que se deben seguir para realizar la prueba', 'Referencia el requerimiento, pantalla o caso de uso a probar', 'Describe la respuesta que se espera de la aplicación'],
      'Los pasos son la descripción, la referencia es la funcionalidad y la respuesta esperada es el resultado esperado.'),
    Q(T, 'Partiendo de un caso de uso, ¿cuál de estos elementos NO es algo que el apunte pida cubrir con casos de prueba?',
      'El presupuesto asignado al desarrollo del caso de uso',
      ['Los valores máximos, por defecto y no admitidos de cada campo', 'La ortografía de las etiquetas y de los mensajes de validación', 'La navegabilidad de la pantalla (tab) y la posición del cursor al ingresar'],
      'También: flujos principal y alternativos, reglas de negocio, usabilidades, validaciones y campos obligatorios.'),
    Q(T, 'En el testing de componentes (unitario), ¿a qué se llama “componente”?',
      'A módulos, clases o unidades, probados de forma independiente',
      ['A subsistemas completos que ya fueron integrados entre sí', 'A procesos de negocio completos de punta a punta', 'Al producto final que se entrega al usuario para su aceptación'],
      'Se prueba cada componente tras su construcción para descubrir fallos por defectos internos.'),
    Q(T, 'Tras corregir un defecto se ejecuta de nuevo la prueba que había fallado; después se ejecutan otras pruebas para ver que el arreglo no rompió áreas que no cambiaron. ¿Cómo se llaman, en ese orden?',
      'Confirmación y regresión',
      ['Regresión y confirmación', 'Humo y confirmación', 'Regresión y humo'],
      'Confirmación: la prueba que falló vuelve a ejecutarse para verificar que el defecto fue retirado. Regresión: se verifica que no se introdujeron defectos en áreas no cambiadas.'),
    Q(T, 'En el CU03 del apunte, ¿qué verifica el CP10?',
      'Que Con Cobertura se selecciona para una práctica que tiene cobertura',
      ['Que el campo Con Cobertura permanece deseleccionado para una práctica sin cobertura', 'Que se muestra un mensaje solicitando los datos obligatorios', 'Que se muestra la pantalla Administrar Pacientes'],
      'CP09: sin cobertura, el campo queda deseleccionado. CP05: validación de datos obligatorios. CP06: ingreso a Administrar Pacientes.')
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
