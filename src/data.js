// Grupo de WhatsApp para ingresantes
export const WHATSAPP_GRUPO = 'https://chat.whatsapp.com/Dg4K0qlm9Nb0gduLnr9gym'

export const tabs = [
  ['Perfil profesional', 'user', ['Analiza datos para resolver problemas reales', 'Construye modelos predictivos', 'Comunica resultados con claridad']],
  ['Objetivos', 'target', ['Formar profesionales en análisis de datos', 'Aplicar estadística e inteligencia artificial', 'Impulsar la investigación y la innovación']],
  ['Campo laboral', 'briefcase', ['Empresas de tecnología y finanzas', 'Salud, industria y gobierno', 'Investigación y consultoría']],
  ['Aptitudes y habilidades', 'bolt', ['Pensamiento lógico y crítico', 'Programación en Python y SQL', 'Trabajo en equipo y comunicación']],
]

export const internships = [
  ['Análisis de datos en empresas', 'Practica con bases de datos reales y tableros de seguimiento.', '#2b3c4a', 'chart'],
  ['Laboratorios de investigación', 'Colabora en proyectos con equipos científicos y docentes.', '#3a4f5f', 'flask'],
  ['Proyectos de inteligencia artificial', 'Entrena y evalúa modelos en proyectos de aplicación.', '#51697c', 'net'],
]

export const events = {
  '2026-10-15': 'Cierre de inscripciones',
  '2026-10-26': 'Inicio de clases',
  '2026-11-13': 'Primer parcial',
  '2026-11-27': 'Entrega de proyectos',
  '2026-10-16': 'Expo Educativa Perico',
}

export const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export const faqs = [
  ['¿Cuánto dura la carrera?', 'La carrera dura 3 años. Todas las materias son anuales y se cursa de forma 100% presencial.'],
  ['¿Qué conocimientos previos necesito?', 'Matemática básica y ganas de aprender. Los lenguajes de programación se enseñan desde cero.'],
  ['¿Hay actividades de investigación?', 'Sí. Podés sumarte a proyectos de investigación desde el segundo año.'],
  ['¿Cómo me inscribo?', 'Inscribite desde https://nexo.jujuy.edu.ar/'],
  ['¿Hay un grupo para ingresantes?', 'Sí, el profesor armó un grupo de WhatsApp para ingresantes: ' + WHATSAPP_GRUPO],
]

export const social = { facebook: '#', youtube: '#', instagram: 'https://www.instagram.com/tec.sup.cienciadedatoseia' }
export const MAPS_LINK = 'https://maps.app.goo.gl/TuMw32iQ9HTFHhQK'
export const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.0543314193674!2d-65.12723242567779!3d-24.379413292153174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bad1aff2b443d%3A0xcd6d3e5c35073d23!2sInstituto%20de%20Educaci%C3%B3n%20Superior%20N%C2%B06!5e0!3m2!1ses!2sar!4v1792150190175!5m2!1ses!2sar'
export const coordinador = { nombre: 'Federico Torres', iniciales: 'FT', foto: '/equipo/coordinador.jpg' }
export const contacto = { telefono: '', correo: '' }
export const stats = [[3, '', 'años de duración'], [25, '', 'materias anuales'], [2912, '', 'horas cátedra'], [100, '%', 'presencial']]

const demo = 'Escribí acá una descripción breve de su aporte al proyecto.'
export const equipos = [
  { id: 'infra', corto: 'Infraestructura y Despliegue', nombre: 'Infraestructura y Despliegue', lema: 'Servidores, redes y despliegue continuo', miembros: [{ nombre: 'Nombre Apellido', rol: 'Servidores y despliegue', desc: demo, foto: '' }, { nombre: 'Nombre Apellido', rol: 'Redes y seguridad', desc: demo, foto: '' }, { nombre: 'Nombre Apellido', rol: 'Base de datos', desc: demo, foto: '' }, { nombre: 'Nombre Apellido', rol: 'Soporte técnico', desc: demo, foto: '' }] },
  { id: 'dev', corto: 'Desarrollo y Diseño Web', nombre: 'Desarrollo y Diseño Web', lema: 'Código limpio e interfaces con identidad', miembros: [{ nombre: 'Nombre Apellido', rol: 'Desarrollo front-end', desc: demo, foto: '' }, { nombre: 'Juan Israel Flores', rol: 'Back-end y Andresito', desc: 'Desarrolla el back-end de la página y el asistente virtual Andresito.', foto: '/equipo/backend.jpg', pos: '50% 8%' }, { nombre: 'Nombre Apellido', rol: 'Diseño UI/UX', desc: demo, foto: '' }] },
  { id: 'press', corto: 'Contenido y Prensa', nombre: 'Contenido y Prensa', lema: 'Las historias de la carrera, bien contadas', miembros: [{ nombre: 'Nombre Apellido', rol: 'Redacción', desc: demo, foto: '' }, { nombre: 'Nombre Apellido', rol: 'Fotografía y video', desc: demo, foto: '' }, { nombre: 'Nombre Apellido', rol: 'Redes sociales', desc: demo, foto: '' }, { nombre: 'Nombre Apellido', rol: 'Prensa y difusión', desc: demo, foto: '' }] },
  { id: 'data', corto: 'Analítica y Marketing', nombre: 'Analítica y Marketing', lema: 'Datos para entender y llegar a más estudiantes', miembros: [{ nombre: 'Nombre Apellido', rol: 'Analítica de datos', desc: demo, foto: '' }, { nombre: 'Nombre Apellido', rol: 'Estrategia de marketing', desc: demo, foto: '' }, { nombre: 'Nombre Apellido', rol: 'Métricas y reportes', desc: demo, foto: '' }, { nombre: 'Nombre Apellido', rol: 'Campañas', desc: demo, foto: '' }] },
]

export const eventosProximos = [{ titulo: 'Expo Educativa Ciudad Perico 2026', fecha: '2026-10-16', hora: '09:00 a 18:00 hs', lugar: 'IES N.º 6 - Perico (frente a la Cooperativa de Tabacaleros)', desc: 'Educar es abrir caminos: más oportunidades, más herramientas, más futuro.', flyer: '/eventos/expo-educativa-2026.jpg', alt: 'Flyer de la Expo Educativa Ciudad Perico 2026', enlace: '' }]

export const noticias = [
  { categoria: 'GLOBAL · FORO ECONÓMICO MUNDIAL', titulo: 'Hacia 2030 se crearán 170 millones de empleos y se perderán 92 millones', fecha: 'Enero 2025', cifra: '+78 M', cifraTxt: 'empleos netos al 2030', colores: ['#0b57a4', '#2a9d9a'], texto: 'El informe The Future of Jobs 2025 estima que el 39 % de las habilidades clave cambiará hasta 2030. Las que más crecen son las de IA y big data, ciberseguridad y alfabetización tecnológica.', fuente: 'World Economic Forum', enlace: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/' },
  { categoria: 'GLOBAL · FONDO MONETARIO INTERNACIONAL', titulo: 'El FMI calcula que cerca del 40 % del empleo mundial está expuesto a la IA', fecha: 'Enero 2024', cifra: '40 %', cifraTxt: 'del empleo mundial expuesto', colores: ['#5b21b6', '#2563eb'], texto: 'En las economías avanzadas la exposición ronda el 60 % y en los países de bajos ingresos el 26 %.', fuente: 'Fondo Monetario Internacional', enlace: 'https://www.imf.org/en/Blogs/Articles/2024/01/14/ai-will-transform-the-global-economy-lets-make-sure-it-benefits-humanity' },
  { categoria: 'GLOBAL · ORGANIZACIÓN INTERNACIONAL DEL TRABAJO', titulo: 'La OIT: uno de cada cuatro empleos tiene exposición a la IA generativa', fecha: 'Mayo 2025', cifra: '1 de 4', cifraTxt: 'empleos con exposición', colores: ['#0f766e', '#0b57a4'], texto: 'Un estudio de la OIT y el instituto polaco NASK concluye que los puestos administrativos son los más expuestos.', fuente: 'OIT y NASK', busqueda: 'OIT NASK Generative AI and Jobs 2025' },
  { categoria: 'EUROPA · UNIÓN EUROPEA', titulo: 'La Ley de IA europea clasifica como de alto riesgo la IA usada para contratar personal', fecha: 'Agosto 2024', cifra: 'UE', cifraTxt: 'ley integral de IA en vigor', colores: ['#1d4ed8', '#0891b2'], texto: 'El reglamento trata como de alto riesgo los sistemas que seleccionan o evalúan trabajadores.', fuente: 'Comisión Europea', enlace: 'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai' },
  { categoria: 'EE. UU. · MCKINSEY GLOBAL INSTITUTE', titulo: 'EE. UU.: hasta el 30 % de las horas trabajadas podría automatizarse hacia 2030', fecha: 'Julio 2023', cifra: '30 %', cifraTxt: 'de las horas, al 2030', colores: ['#b45309', '#be123c'], texto: 'El informe calcula que crecería la demanda en salud y profesiones técnicas.', fuente: 'McKinsey Global Institute', busqueda: 'McKinsey Global Institute Generative AI and the future of work in America 2023' },
  { categoria: 'GLOBAL · MICROSOFT Y LINKEDIN', titulo: 'Work Trend Index: el 75 % de los trabajadores del conocimiento ya usa IA', fecha: 'Mayo 2024', cifra: '75 %', cifraTxt: 'usa IA en el trabajo', colores: ['#0e7490', '#4338ca'], texto: 'La encuesta señala la importancia de incorporar habilidades de IA al trabajo.', fuente: 'Microsoft y LinkedIn', busqueda: 'Microsoft LinkedIn Work Trend Index 2024 AI at Work Is Here' },
]

export const studentYears = [
  { title: 'Ingresantes', description: 'Material de ingreso, guías introductorias, ejercicios de nivelación y tutoriales.', materials: 0, icon: 'rocket', status: 'Próximamente', statusKey: 'soon', slug: 'ingresantes', badge: 'Sección temporal' },
  { title: '1.º Año', description: 'Apuntes organizados por materia, resúmenes y trabajos prácticos.', materials: 1, icon: 'book', status: 'Disponible', statusKey: 'available', slug: 'primero', drive: 'https://drive.google.com/drive/folders/1qjZJVN52NdBsZ6x5pERRxHWYOgpe1VTG?usp=drive_link' },
  { title: '2.º Año', description: 'Materiales de cursada, ejercicios resueltos, prácticas de programación y bases de datos.', materials: 1, icon: 'database', status: 'Actualizado', statusKey: 'updated', slug: 'segundo', drive: 'https://drive.google.com/drive/folders/1rpcYxC9gOGY-uix-7wtFfpXDWTY88L-3?usp=sharing' },
  { title: '3.º Año', description: 'Apuntes avanzados, proyectos integradores y material para evaluaciones finales.', materials: 1, icon: 'brain', status: 'En revisión', statusKey: 'review', slug: 'tercero', drive: 'https://drive.google.com/drive/folders/1jLCMk3oeBbqqVlEWeH4EBfIjTO1sIYHa?usp=sharing' },
]

export const projects = [
  { title: 'Dashboard de análisis de datos', category: 'Datos', description: 'Visualización de información y generación de indicadores.', tone: 'dashboard-art', symbol: '▥', code: '01 / DATA', image: '/proyecto-dashboard.jpg' },
  { title: 'Asistente virtual educativo', category: 'Inteligencia artificial', description: 'Un chatbot para responder consultas y orientar a estudiantes.', tone: 'ai-art', symbol: '✦', code: '02 / IA', image: '/proyecto-asistente-ia.jpg' },
  { title: 'Sistema de gestión', category: 'Desarrollo', description: 'Una aplicación que organiza información y automatiza tareas.', tone: 'dev-art', symbol: '</>', code: '03 / DEV', image: '/proyecto-gestion.jpg' },
  { title: 'App de monitoreo ambiental', category: 'Web', description: 'Registro y análisis de datos para el cuidado del medio ambiente.', tone: 'web-art', symbol: '⌁', code: '04 / WEB', image: '/proyecto-ambiental.jpg' },
]

export const resources = [
  { title: 'Buscar apuntes', description: 'Encontrá rápidamente lo que necesitás.', icon: '⌕', href: '#materiales-titulo' },
  { title: 'Agenda académica', description: 'Fechas de exámenes y entregas.', icon: '▦', href: '#calendario' },
  { title: 'Ayudante de IA', description: 'Consultas, resúmenes y más.', icon: '✦', href: '#alumnos' },
  { title: 'Compartir material', description: 'Solo compartí el link de tu Drive.', icon: '↗', href: '#alumnos' },
]

export const recentNotes = [
  { title: 'Guía de introducción a Python', year: '1.º Año', subject: 'Actualizado recientemente' },
  { title: 'Práctica de bases de datos', year: '2.º Año', subject: 'Actualizado recientemente' },
  { title: 'Guía de proyecto integrador', year: '3.º Año', subject: 'En revisión' },
]

export const materialsByYear = [
  { year: 'Ingresantes', status: 'Próximamente', statusKey: 'soon', items: [] },
  { year: '1.º Año', status: 'Disponible', statusKey: 'available', items: [{ title: 'Carpeta de apuntes de 1.º año', description: 'Google Drive · apuntes y trabajos prácticos', type: 'DRIVE', href: 'https://drive.google.com/drive/folders/1qjZJVN52NdBsZ6x5pERRxHWYOgpe1VTG?usp=drive_link' }] },
  { year: '2.º Año', status: 'Actualizado', statusKey: 'updated', items: [{ title: 'Carpeta de apuntes de 2.º año', description: 'Google Drive · cursada, programación y bases de datos', type: 'DRIVE', href: 'https://drive.google.com/drive/folders/1rpcYxC9gOGY-uix-7wtFfpXDWTY88L-3?usp=sharing' }] },
  { year: '3.º Año', status: 'En revisión', statusKey: 'review', items: [{ title: 'Carpeta de apuntes de 3.º año', description: 'Google Drive · proyectos y material avanzado', type: 'DRIVE', href: 'https://drive.google.com/drive/folders/1jLCMk3oeBbqqVlEWeH4EBfIjTO1sIYHa?usp=sharing' }] },
]
