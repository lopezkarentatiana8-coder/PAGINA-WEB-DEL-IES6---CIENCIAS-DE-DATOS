import React, { useState } from 'react'
import { studentYears, projects, resources, recentNotes, materialsByYear } from '../data.js'

const icons = {
  rocket: <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M29 5c7 1 12 6 14 14l-9 9-10-4-4-10 9-9Z" /><path d="m20 28-7 7M13 35l-5 5M20 22l-8-1-5 5 10 4M27 29l1 9-5 5-4-10" /><circle cx="32" cy="16" r="3" /></svg>,
  book: <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 9c7-3 13-2 17 2v28c-4-4-10-5-17-2V9ZM41 9c-7-3-13-2-17 2v28c4-4 10-5 17-2V9Z" /></svg>,
  database: <svg viewBox="0 0 48 48" aria-hidden="true"><ellipse cx="24" cy="10" rx="15" ry="6" /><path d="M9 10v14c0 3 7 6 15 6s15-3 15-6V10M9 24v14c0 3 7 6 15 6s15-3 15-6V24" /></svg>,
  brain: <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M20 10a7 7 0 0 0-7 7 7 7 0 0 0-2 13 7 7 0 0 0 8 9h5V10a7 7 0 0 0-4 0ZM28 10a7 7 0 0 1 7 7 7 7 0 0 1 2 13 7 7 0 0 1-8 9h-5V10a7 7 0 0 1 4 0Z" /><path d="M16 20h8M14 28h10M32 20h-8M34 28H24" /></svg>,
}

function Status({ value, tone }) {
  return <span className={`status status-${tone}`}>{value}</span>
}

function NotesBank() {
  const [selected, setSelected] = useState('all')
  const groups = selected === 'all' ? materialsByYear : materialsByYear.filter((group) => group.year === selected)

  return (
    <section className="materials-browser" aria-labelledby="materiales-titulo">
      <div className="materials-header">
        <div>
          <span className="student-kicker">ACCESO A LOS ARCHIVOS</span>
          <h2 id="materiales-titulo">Materiales disponibles</h2>
          <p>Elegí un año para ver guías y apuntes. Los archivos marcados como demostración pueden reemplazarse por los materiales oficiales.</p>
        </div>
        <label className="materials-filter">
          Filtrar por año
          <select value={selected} onChange={(event) => setSelected(event.target.value)} aria-label="Filtrar materiales por año">
            <option value="all">Todos los años</option>
            {studentYears.map((item) => <option value={item.title} key={item.title}>{item.title}</option>)}
          </select>
        </label>
      </div>
      <div className="materials-groups">
        {groups.map((group) => (
          <article className="materials-group" key={group.year}>
            <div className="materials-group-title">
              <h3>{group.year}</h3>
              <Status value={group.status} tone={group.statusKey} />
            </div>
            {group.items.length ? (
              <ul>
                {group.items.map((item) => (
                  <li key={item.title}>
                    <span className="file-type" aria-hidden="true">{item.type}</span>
                    <span><b>{item.title}</b><small>{item.description}</small></span>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">Abrir <span aria-hidden="true">↗</span></a>
                  </li>
                ))}
              </ul>
            ) : <p className="materials-empty" role="status">Todavía no hay materiales publicados para este año.</p>}
          </article>
        ))}
      </div>
    </section>
  )
}

function StudentsHero() {
  const nodes = [[20, 220], [110, 150], [180, 210], [280, 90], [380, 150], [470, 35], [150, 35], [240, 275]]
  return (
    <div className="students-hero">
      <div className="students-hero-photo" aria-hidden="true"><img src="/hero-alumnos.jpg" alt="" /></div>
      <svg className="students-network" viewBox="0 0 500 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path d="M20 220 110 150 180 210 280 90 380 150 470 35M110 150 150 35 280 90M180 210l60 65 140-125" />
        <g>{nodes.map(([x, y], index) => <circle key={`${x}-${y}`} cx={x} cy={y} r={index === 3 ? 6 : 3} />)}</g>
      </svg>
      <div className="students-hero-inner">
        <div className="graduation-mark" aria-hidden="true">⌁</div>
        <div>
          <span className="student-eyebrow">ESPACIO ESTUDIANTIL · IES-6</span>
          <h2>Alumnos</h2>
          <h3>Tu espacio para aprender, compartir y crecer.</h3>
          <p>Encontrá apuntes, proyectos, herramientas y recursos para acompañarte durante la carrera.</p>
          <div className="student-actions">
            <a className="btn neon-btn" href="#materiales-titulo">Explorar apuntes</a>
            <a className="ghost-btn" href="#proyectos">Ver proyectos <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div className="hero-slogan" aria-hidden="true">Tu esfuerzo<br /><em>también construye</em><br />el futuro</div>
    </div>
  )
}

export default function StudentsView({ standalone = false }) {
  const [query, setQuery] = useState('')
  const filteredNotes = recentNotes.filter((note) => `${note.title} ${note.year} ${note.subject}`.toLowerCase().includes(query.toLowerCase()))

  return (
    <section id="alumnos" className={`students-view${standalone ? ' students-route' : ''}`}>
      {standalone && <a className="students-route-back" href="/">← Volver al inicio</a>}
      <StudentsHero />
      <div className="students-shell">
        <div className="student-heading">
          <div><span className="student-kicker">RECURSOS ACADÉMICOS</span><h2 id="banco-apuntes">Banco de apuntes</h2></div>
          <label className="student-search"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por materia o tema..." aria-label="Buscar apuntes por materia o tema" /></label>
        </div>
        <div className="year-grid">
          {studentYears.map((item) => (
            <article className="year-card" key={item.title}>
              <div className="year-icon">{icons[item.icon]}</div>
              <div className="year-top"><h3>{item.title}</h3><Status value={item.status} tone={item.statusKey} /></div>
              <p>{item.description}</p>
              <div className="year-bottom"><small>{item.materials} materiales disponibles</small><a href={item.drive || '#materiales-titulo'} target={item.drive ? '_blank' : undefined} rel={item.drive ? 'noopener noreferrer' : undefined}>Abrir Drive <b aria-hidden="true">↗</b></a></div>
            </article>
          ))}
        </div>
        <p className="temporary-note"><span aria-hidden="true">ⓘ</span> Los materiales se actualizan progresivamente. Consultá la fecha de actualización antes de descargar.</p>
        <NotesBank />
        <div className="student-heading student-project-heading"><div><span className="student-kicker">TRABAJOS DE LA CARRERA</span><h2 id="proyectos">Proyectos destacados <small>(3.º año)</small></h2></div><a className="student-link" href="#proyectos">Ver todos <span aria-hidden="true">→</span></a></div>
        <div className="projects-grid projects-carousel" aria-label="Carrusel de proyectos destacados">
          {projects.map((project) => <article className="project-card" key={project.title}><div className={`project-art ${project.tone}`}><span className="project-code">{project.code}</span><span className="project-orb" aria-hidden="true">{project.symbol}</span></div><div className="project-content"><span className="project-tag">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><a href="#proyectos">Ver proyecto <b aria-hidden="true">→</b></a></div></article>)}
        </div>
        <div className="students-columns">
          <div><div className="student-heading student-heading-block"><span className="student-kicker">ACCESOS RÁPIDOS</span><h2>Herramientas y recursos</h2></div><div className="resource-grid">{resources.map((resource) => <a className="resource-card" href={resource.href} key={resource.title}><span className="resource-icon" aria-hidden="true">{resource.icon}</span><span><b>{resource.title}</b><small>{resource.description}</small></span><strong aria-hidden="true">→</strong></a>)}</div></div>
          <aside className="recent-panel" id="ultimos-apuntes"><div className="panel-title"><div><span className="student-kicker">ACTUALIZACIONES</span><h2>Últimos apuntes</h2></div><a href="#ultimos-apuntes">Ver todos</a></div><div className="notes-list">{filteredNotes.map((note) => <a href="#materiales-titulo" className="note-row" key={note.title}><span className="note-file" aria-hidden="true">▤</span><span><b>{note.title}</b><small>{note.year} · {note.subject}</small></span></a>)}{!filteredNotes.length && <p className="empty-state" role="status">No encontramos apuntes con ese término.</p>}</div></aside>
        </div>
        <div className="students-quote"><span className="quote-mark" aria-hidden="true">“</span><p>La tecnología no reemplaza tu esfuerzo,<br /><strong>lo potencia.</strong></p><span className="quote-line" aria-hidden="true" /></div>
      </div>
    </section>
  )
}
