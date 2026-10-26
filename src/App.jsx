import React, { useState } from 'react'
import { tabs, internships, events, meses, faqs, studentYears, projects, resources, recentNotes } from './data.js'

const icons = {
  chart: <svg width="90" height="70" viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="3"><rect x="6" y="6" width="78" height="46" rx="4" /><path d="M16 42l16-14 12 8 20-20" /><path d="M34 62h22" /></svg>,
  flask: <svg width="90" height="70" viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="3"><path d="M36 6h18M40 6v22L20 60h50L50 28V6" /><path d="M28 46h34" /></svg>,
  net: <svg width="90" height="70" viewBox="0 0 90 70" fill="none" stroke="currentColor" strokeWidth="3"><circle cx="20" cy="35" r="7" /><circle cx="70" cy="16" r="7" /><circle cx="70" cy="54" r="7" /><path d="M27 32l36-13M27 38l36 13" /></svg>,
}

const studentIcons = {
  rocket: <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M29 5c7 1 12 6 14 14l-9 9-10-4-4-10 9-9Z" /><path d="m20 28-7 7M13 35l-5 5M20 22l-8-1-5 5 10 4M27 29l1 9-5 5-4-10" /><circle cx="32" cy="16" r="3" /></svg>,
  book: <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 9c7-3 13-2 17 2v28c-4-4-10-5-17-2V9ZM41 9c-7-3-13-2-17 2v28c4-4 10-5 17-2V9Z" /></svg>,
  database: <svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="10" rx="15" ry="6" /><path d="M9 10v14c0 3 7 6 15 6s15-3 15-6V10M9 24v14c0 3 7 6 15 6s15-3 15-6V24" /></svg>,
  brain: <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M20 10a7 7 0 0 0-7 7 7 7 0 0 0-2 13 7 7 0 0 0 8 9h5V10a7 7 0 0 0-4 0ZM28 10a7 7 0 0 1 7 7 7 7 0 0 1 2 13 7 7 0 0 1-8 9h-5V10a7 7 0 0 1 4 0Z" /><path d="M16 20h8M14 28h10M32 20h-8M34 28H24" /></svg>,
}

function Calendar() {
  const [m, setM] = useState({ y: 2026, mo: 9 })
  const first = (new Date(m.y, m.mo, 1).getDay() + 6) % 7
  const days = new Date(m.y, m.mo + 1, 0).getDate()
  const list = []
  const cells = Array.from({ length: first }, (_, i) => <div key={'b' + i} className="c x" />)
  for (let d = 1; d <= days; d++) {
    const k = `${m.y}-${String(m.mo + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    if (events[k]) list.push(`${d}: ${events[k]}`)
    cells.push(<div key={d} className={'c' + (events[k] ? ' e' : '')} title={events[k] || ''}>{d}</div>)
  }
  const go = (n) => setM((p) => { const t = new Date(p.y, p.mo + n, 1); return { y: t.getFullYear(), mo: t.getMonth() } })

  return <div className="cal"><div className="cal-h"><button onClick={() => go(-1)} aria-label="Mes anterior">‹</button><span>{meses[m.mo]} {m.y}</span><button onClick={() => go(1)} aria-label="Mes siguiente">›</button></div><div className="cal-g">{['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((d) => <div key={d} className="d">{d}</div>)}{cells}</div><div className="legend">{list.length ? list.join(' · ') : 'Sin fechas importantes este mes.'}</div></div>
}

function Faq() {
  const [open, setOpen] = useState(null)
  return <div className="faq">{faqs.map(([q, a], i) => <div key={q} className={open === i ? 'open' : ''}><button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>{q}<span className="chev">⌄</span></button>{open === i && <div className="a">{a}</div>}</div>)}</div>
}

function NetworkPattern() {
  return <svg className="network-pattern" viewBox="0 0 500 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M20 220 110 150 180 210 280 90 380 150 470 35M110 150 150 35 280 90M180 210l60 65 140-125" /><g>{[[20, 220], [110, 150], [180, 210], [280, 90], [380, 150], [470, 35], [150, 35], [240, 275]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i === 3 ? 6 : 3} /></g></svg>
}

function StudentsView() {
  const [query, setQuery] = useState('')
  const filteredNotes = recentNotes.filter((note) => `${note.title} ${note.year} ${note.subject}`.toLowerCase().includes(query.toLowerCase()))
  return <section id="alumnos" className="students-view">
    <div className="students-hero"><NetworkPattern /><div className="students-hero-inner"><div className="graduation-mark">⌁</div><div><span className="eyebrow">ESPACIO ESTUDIANTIL · IES-6</span><h2>Alumnos</h2><h3>Tu espacio para aprender, compartir y crecer.</h3><p>Encontrá apuntes, proyectos, herramientas y recursos para acompañarte durante la carrera.</p><div className="hero-actions"><a className="btn neon-btn" href="#banco-apuntes">Explorar apuntes</a><a className="ghost-btn" href="#proyectos">Ver proyectos <span>→</span></a></div></div></div><div className="hero-slogan">Tu esfuerzo<br /><em>también construye</em><br />el futuro</div></div>
    <div className="students-shell">
      <div className="section-heading heading-with-action"><div><span className="section-kicker">RECURSOS ACADÉMICOS</span><h2 id="banco-apuntes">Banco de apuntes</h2></div><label className="search-box"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar por materia o tema..." aria-label="Buscar apuntes" /></label></div>
      <div className="year-grid">{studentYears.map((year) => <article className="year-card" key={year.title}><div className="year-icon">{studentIcons[year.icon]}</div><div className="year-top"><h3>{year.title}</h3>{year.badge && <span>{year.badge}</span>}</div><p>{year.description}</p><div className="year-bottom"><small>{year.materials} materiales disponibles</small><a href="#ultimos-apuntes">Ver apuntes <b>→</b></a></div></article>)}</div><p className="temporary-note"><span>ⓘ</span> La sección Ingresantes estará disponible durante el período de ingreso y luego se ocultará automáticamente.</p>
      <div className="section-heading heading-with-action projects-heading"><div><span className="section-kicker">TRABAJOS DE LA CARRERA</span><h2 id="proyectos">Proyectos destacados <small>(3.º año)</small></h2></div><a className="text-link" href="#proyectos">Ver todos <span>→</span></a></div>
      <div className="projects-grid">{projects.map((project) => <article className="project-card" key={project.title}><div className={`project-art ${project.tone}`}><span className="project-code">{project.code}</span><span className="project-orb">{project.symbol}</span></div><div className="project-content"><span className="project-tag">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><a href="#proyectos">Ver proyecto <b>→</b></a></div></article>)}</div>
      <div className="students-columns"><div><div className="section-heading"><span className="section-kicker">ACCESOS RÁPIDOS</span><h2>Herramientas y recursos</h2></div><div className="resource-grid">{resources.map((resource) => <a className="resource-card" href={resource.href} key={resource.title}><span className="resource-icon">{resource.icon}</span><span><b>{resource.title}</b><small>{resource.description}</small></span><strong>→</strong></a>)}</div></div><aside className="recent-panel" id="ultimos-apuntes"><div className="panel-title"><div><span className="section-kicker">ACTUALIZACIONES</span><h2>Últimos apuntes</h2></div><a href="#ultimos-apuntes">Ver todos →</a></div><div className="notes-list">{filteredNotes.map((note) => <a href="#banco-apuntes" className="note-row" key={note.title}><span className="note-file">▤</span><span><b>{note.title}</b><small>{note.year} · {note.subject}</small></span></a>)}{!filteredNotes.length && <p className="empty-state">No encontramos apuntes con ese término.</p>}</div></aside></div>
      <div className="students-quote"><span className="quote-mark">“</span><p>La tecnología no reemplaza tu esfuerzo,<br /><strong>lo potencia.</strong></p><span className="quote-line" /></div>
    </div>
  </section>
}

export default function App() {
  const [nav, setNav] = useState(false)
  const [theme, setTheme] = useState('light')
  const links = [['Concepto', '#concepto'], ['Pasantías', '#pasantias'], ['Plan de estudio', '#plan'], ['Calendario', '#calendario'], ['Preguntas', '#faq'], ['Alumnos', '#alumnos']]
  return <div className={theme === 'dark' ? 'site theme-dark' : 'site'}><header><div className="wrap"><button className="burger" aria-label="Menú" onClick={() => setNav(!nav)}>☰</button><div className="brand-mark">IES-6</div><h1>Carrera de Ciencia de Datos</h1><nav className={nav ? 'open' : ''} onClick={() => setNav(false)}>{links.map(([t, href]) => <a className={t === 'Alumnos' ? 'student-link' : ''} key={href} href={href}>{t}</a>)}</nav><button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Cambiar tema">{theme === 'dark' ? '☼' : '◐'}</button></div></header>
    <div className="hero" id="concepto"><NetworkPattern /><div className="wrap"><span className="eyebrow">TECNICATURA SUPERIOR</span><h2>Aprendé a convertir datos en decisiones</h2><p>La Ciencia de Datos combina estadística, programación e inteligencia artificial para entender problemas complejos y proponer soluciones basadas en evidencia.</p><a className="btn" href="#plan">Ver plan de estudio</a></div></div>
    <main><div className="wrap"><div className="tabs">{tabs.map(([t, items]) => <div className="tab" key={t}><b>{t}</b><ul>{items.map((x) => <li key={x}>{x}</li>)}</ul></div>)}</div><section id="pasantias"><h3>Pasantías</h3><div className="grid3">{internships.map(([title, text, bg, icon]) => <div className="card" key={title}><div className="art" style={{ background: bg }}>{icons[icon]}</div><div className="t"><h4>{title}</h4><p>{text}</p></div></div>)}</div></section><div className="two"><section id="plan"><h3>Plan de estudio</h3><div className="pdf"><svg width="56" height="72" viewBox="0 0 56 72"><path d="M4 2h34l14 14v54H4z" fill="#3d5365" /><path d="M38 2v14h14" fill="#6f8596" /><text x="28" y="52" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">PDF</text></svg><div><p>Consultá las materias de cada año, la carga horaria y los requisitos de cursada.</p><a className="btn" href="/plan-de-estudio.pdf" download>Descargar PDF</a></div></div></section><section id="calendario"><h3>Calendario académico</h3><Calendar /></section></div><div className="two"><section><h3>Mensaje motivacional</h3><blockquote className="quote" style={{ margin: 0 }}>Los datos cuentan historias. Tu trabajo es aprender a escucharlas y ayudar a otros a entenderlas.<cite>— Equipo de Ciencia de Datos</cite></blockquote></section><section id="faq"><h3>Preguntas frecuentes</h3><Faq /></section></div></div><StudentsView /></main>
    <footer><div className="wrap"><div><h5>Coordinador</h5><div className="coord"><div className="av">NC</div><div><p><b>Nombre del Coordinador</b></p><p>Teléfono</p><p>Correo</p></div></div></div><div><h5>Dirección</h5><div className="map"><svg width="30" height="38" viewBox="0 0 30 38"><path d="M15 1C8 1 2 7 2 14c0 10 13 23 13 23s13-13 13-23C28 7 22 1 15 1z" fill="#1f2d3a" /><circle cx="15" cy="14" r="5" fill="#4cc3bf" /></svg></div></div><div><h5>Redes sociales</h5><div className="soc"><a href="#" aria-label="Facebook" style={{ background: '#1877f2' }}>f</a><a href="#" aria-label="YouTube" style={{ background: '#e62117' }}>▶</a><a href="#" aria-label="Instagram" style={{ background: 'linear-gradient(45deg,#f9a03f,#d6249f,#5851db)' }}>ig</a></div></div><div><h5>Creadores</h5><ul>{['Nombre Apellido', 'Nombre Apellido', 'Nombre Apellido'].map((n, i) => <li key={i}>{n}</li>)}</ul></div></div></footer></div>
}
