import React, { useState, useEffect, useRef } from 'react'
import { tabs, internships, events, meses, faqs, social, MAPS_LINK, MAP_EMBED, coordinador, stats, contacto, WHATSAPP_GRUPO, equipos, eventosProximos, noticias } from './data.js'
import StudentsViewExternal from './components/StudentsView.jsx'

const icons = {
  chart: (
    <svg width="90" height="70" viewBox="0 0 90 70" fill="none" stroke="#4cc3bf" strokeWidth="3">
      <rect x="6" y="6" width="78" height="46" rx="4" /><path d="M16 42l16-14 12 8 20-20" /><path d="M34 62h22" />
    </svg>
  ),
  flask: (
    <svg width="90" height="70" viewBox="0 0 90 70" fill="none" stroke="#9fd8d6" strokeWidth="3">
      <path d="M36 6h18M40 6v22L20 60h50L50 28V6" /><path d="M28 46h34" />
    </svg>
  ),
  net: (
    <svg width="90" height="70" viewBox="0 0 90 70" fill="none" stroke="#ffffff" strokeWidth="3">
      <circle cx="20" cy="35" r="7" /><circle cx="70" cy="16" r="7" /><circle cx="70" cy="54" r="7" /><path d="M27 32l36-13M27 38l36 13" />
    </svg>
  ),
}


const tabIcons = {
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M3 13h18" /></>,
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
}

function TabIcon({ name, size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {tabIcons[name]}
    </svg>
  )
}

function Tabs() {
  const [sel, setSel] = useState(null)
  useEffect(() => {
    if (sel === null) return
    const onKey = (e) => { if (e.key === 'Escape') setSel(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [sel])
  const cur = sel !== null ? tabs[sel] : null

  return (
    <>
      <div className="tabs" id="perfil">
        {tabs.map(([t, icon], i) => (
          <button className="tab" key={t} onClick={() => setSel(i)} aria-haspopup="dialog">
            <TabIcon name={icon} />
            <span>{t}</span>
          </button>
        ))}
      </div>
      {cur && (
        <div className="modal-bg" onClick={() => setSel(null)}>
          <div className="modal" role="dialog" aria-modal="true" aria-label={cur[0]} onClick={(e) => e.stopPropagation()}>
            <button className="x" aria-label="Cerrar" onClick={() => setSel(null)} autoFocus>×</button>
            <h4><TabIcon name={cur[1]} size={22} />{cur[0]}</h4>
            <ul>{cur[2].map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
        </div>
      )}
    </>
  )
}

function Linkify({ text }) {
  return text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
    i % 2 ? <a key={i} href={part} target="_blank" rel="noopener noreferrer">{part}</a> : part
  )
}

const socialIcons = {
  facebook: (
    <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="5" fill="#1877f2" />
      <path fill="#fff" d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.7V14h2.7v8z" />
    </svg>
  ),
  youtube: (
    <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1" y="4.5" width="22" height="15" rx="4.5" fill="#ff0000" />
      <path fill="#fff" d="M10 8.7v6.6l5.7-3.3z" />
    </svg>
  ),
  instagram: (
    <svg width="40" height="40" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="ig" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#feda75" /><stop offset=".3" stopColor="#fa7e1e" /><stop offset=".55" stopColor="#d62976" /><stop offset=".8" stopColor="#962fbf" /><stop offset="1" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="5" fill="url(#ig)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="4" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.2" fill="none" stroke="#fff" strokeWidth="1.7" />
      <circle cx="16.2" cy="7.8" r="1" fill="#fff" />
    </svg>
  ),
}
const socialNames = { facebook: 'Facebook', youtube: 'YouTube', instagram: 'Instagram' }

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.12 })
    els.forEach((e) => io.observe(e))
    return () => io.disconnect()
  }, [])
}

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)
  useEffect(() => {
    const el = ref.current
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) { setN(to); return }
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const dur = 1400
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, { threshold: 0.4 })
    io.observe(el)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to])
  return <><b ref={ref} aria-hidden="true">{n.toLocaleString('es-AR')}{suffix}</b><span className="sr">{to.toLocaleString('es-AR')}{suffix}</span></>
}

function Stats() {
  return (
    <div className="stats reveal">
      {stats.map(([n, suf, label]) => (
        <div className="stat" key={label}>
          <Counter to={n} suffix={suf} />
          <span className="l">{label}</span>
        </div>
      ))}
    </div>
  )
}

const contactIcons = {
  tel: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
  mail: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>,
  wa: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3z" /><path d="M9.2 8.4c.2-.4.7-.4.9 0l.7 1.6c.1.3 0 .5-.2.7l-.5.6c.7 1.3 1.7 2.2 3 2.9l.6-.6c.2-.2.5-.3.7-.2l1.6.8c.4.2.4.7.1 1-.6.8-1.5 1.1-2.4.8-2.6-.8-4.5-2.7-5.4-5.3-.2-.8 0-1.6.9-2.3z" /></svg>,
}

function Contacto() {
  const items = []
  if (contacto.telefono) items.push({ k: 'tel', label: 'Teléfono', value: contacto.telefono, href: 'tel:' + contacto.telefono.replace(/[^\d+]/g, '') })
  if (contacto.correo) items.push({ k: 'mail', label: 'Correo', value: contacto.correo, href: 'mailto:' + contacto.correo })
  items.push({ k: 'wa', label: 'WhatsApp', value: 'Grupo de ingresantes', href: WHATSAPP_GRUPO, ext: true })
  return (
    <div className="contact">
      {items.map((it) => (
        <a key={it.k} className={'cc ' + it.k} href={it.href} {...(it.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          <span className="ic">{contactIcons[it.k]}</span>
          <span><b>{it.label}</b><small>{it.value}</small></span>
        </a>
      ))}
    </div>
  )
}

const teamIcons = {
  infra: <><rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="14" width="18" height="6" rx="1.5" /><path d="M7 7h.01M7 17h.01" /></>,
  dev: <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />,
  press: <path d="M4 5h13v14H6a2 2 0 0 1-2-2zM17 9h3v8a2 2 0 0 1-2 2M7 9h7M7 13h7" />,
  data: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />,
}
const teamColors = { infra: '#1cff8a', dev: '#a78bfa', press: '#fb923c', data: '#10b981' }
const iniciales = (n) => n.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('')

function TeamIcon({ id, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {teamIcons[id]}
    </svg>
  )
}

function TeamModal({ equipo, onClose }) {
  const [person, setPerson] = useState(null)
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { if (person) setPerson(null); else onClose() } }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose, person])
  const miembros = equipo.miembros.slice(0, 4)
  const n = miembros.length
  const head = {
    infra: <span className="tm-prompt">$ ./equipo --area=infraestructura</span>,
    dev: <span className="tm-pill">Equipo creativo</span>,
    press: <span className="tm-kicker">Edición especial · El equipo</span>,
    data: <span className="tm-kicker">Panel de equipo</span>,
  }[equipo.id]

  return (
    <>
    <div className="tm-bg" onClick={onClose}>
      <div className={'tm tm-' + equipo.id} role="dialog" aria-modal="true" aria-label={equipo.nombre} onClick={(e) => e.stopPropagation()}>
        <button className="tm-x" aria-label="Cerrar" onClick={onClose} autoFocus>×</button>
        <div className="tm-head">
          {head}
          <h4>{equipo.nombre}</h4>
          <p className="tm-lema">{equipo.lema}</p>
          {equipo.id === 'data'
            ? <div className="tm-kpis"><div className="tm-kpi"><b>{n}</b>integrantes</div><div className="tm-kpi"><b>4</b>áreas del proyecto</div></div>
            : <p className="tm-count">{n} {n === 1 ? 'integrante' : 'integrantes'}</p>}
        </div>
        <div className="tm-grid">
          {miembros.map((m, i) => (
            <article className={'tm-card' + (m.foto ? ' tm-click' : '')} key={i}
              {...(m.foto ? { role: 'button', tabIndex: 0, 'aria-label': 'Ver la foto de ' + m.nombre, onClick: () => setPerson(m), onKeyDown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPerson(m) } } } : {})}>
              <div className="tm-photo">
                {m.foto ? <img src={m.foto} alt={m.nombre} loading="lazy" style={m.pos ? { objectPosition: m.pos } : undefined} /> : <span aria-hidden="true">{iniciales(m.nombre)}</span>}
              </div>
              <div className="tm-body">
                <h5 title={m.nombre}>{m.nombre}</h5>
                <p className="tm-rol">{m.rol}</p>
                <p className="tm-desc">{m.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    {person && (
      <div className="pm-bg" onClick={() => setPerson(null)}>
        <figure className="pm" role="dialog" aria-modal="true" aria-label={person.nombre} style={{ '--c': teamColors[equipo.id] }} onClick={(e) => e.stopPropagation()}>
          <button className="pm-x" aria-label="Cerrar" onClick={() => setPerson(null)} autoFocus>×</button>
          <img src={person.foto} alt={person.nombre} />
          <figcaption>{person.nombre}</figcaption>
        </figure>
      </div>
    )}
    </>
  )
}

function Creadores() {
  const [sel, setSel] = useState(null)
  const cur = equipos.find((e) => e.id === sel)
  return (
    <>
      <div className="teams">
        {equipos.map((e) => (
          <button key={e.id} className="team-btn" style={{ '--c': teamColors[e.id] }} onClick={() => setSel(e.id)} aria-haspopup="dialog">
            <TeamIcon id={e.id} />
            <span>{e.corto}</span>
          </button>
        ))}
      </div>
      {cur && <TeamModal equipo={cur} onClose={() => setSel(null)} />}
    </>
  )
}

const themeIcons = {
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
}

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])
  return (
    <div className="modal-bg lb" onClick={onClose}>
      <div className="lb-in" role="dialog" aria-modal="true" aria-label={alt} onClick={(e) => e.stopPropagation()}>
        <button className="lb-x" aria-label="Cerrar" onClick={onClose} autoFocus>×</button>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

const evIcons = {
  fecha: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  hora: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  lugar: <><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
}
function EvIcon({ n }) {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{evIcons[n]}</svg>
}

function Eventos() {
  const [zoom, setZoom] = useState(null)
  const hoy = new Date(); hoy.setHours(0, 0, 0, 0)
  const lista = eventosProximos
    .map((e) => { const [y, m, d] = e.fecha.split('-').map(Number); return { ...e, f: new Date(y, m - 1, d) } })
    .filter((e) => e.f >= hoy)
    .sort((a, b) => a.f - b.f)
  if (!lista.length) return null
  return (
    <section id="eventos" className="reveal">
      <h3>Próximos eventos</h3>
      <div className="events">
        {lista.map((e) => {
          const dias = Math.round((e.f - hoy) / 86400000)
          const badge = dias === 0 ? '¡Hoy!' : dias === 1 ? '¡Mañana!' : `En ${dias} días`
          const fecha = e.f.toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
          return (
            <article className="ev" key={e.titulo + e.fecha}>
              <button className="ev-img" onClick={() => setZoom(e)} aria-label={'Ampliar el flyer de ' + e.titulo}>
                <img src={e.flyer} alt={e.alt || e.titulo} loading="lazy" />
                <span className="ev-zoom">Tocá para ampliar</span>
              </button>
              <div className="ev-body">
                <span className="ev-badge">{badge}</span>
                <h4>{e.titulo}</h4>
                {e.desc && <p className="ev-desc">{e.desc}</p>}
                <ul className="ev-meta">
                  <li><EvIcon n="fecha" /><span>{fecha.charAt(0).toUpperCase() + fecha.slice(1)}</span></li>
                  {e.hora && <li><EvIcon n="hora" /><span>{e.hora}</span></li>}
                  {e.lugar && <li><EvIcon n="lugar" /><span>{e.lugar}</span></li>}
                </ul>
                {e.enlace && <a className="btn" href={e.enlace} target="_blank" rel="noopener noreferrer">Más información</a>}
              </div>
            </article>
          )
        })}
      </div>
      {zoom && <Lightbox src={zoom.flyer} alt={zoom.alt || zoom.titulo} onClose={() => setZoom(null)} />}
    </section>
  )
}

function useCols() {
  const calc = () => (window.innerWidth >= 900 ? 3 : window.innerWidth >= 600 ? 2 : 1)
  const [n, setN] = useState(calc)
  useEffect(() => {
    const f = () => setN(calc())
    window.addEventListener('resize', f)
    return () => window.removeEventListener('resize', f)
  }, [])
  return n
}

function Noticias() {
  const n = useCols()
  const total = noticias.length
  const pages = Math.max(1, Math.ceil(total / n))
  const [page, setPage] = useState(0)
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [play, setPlay] = useState(!reduce)
  const [pausa, setPausa] = useState(false)
  const p = Math.min(page, pages - 1)
  const idx = Math.max(0, Math.min(p * n, total - n))
  useEffect(() => {
    if (!play || pausa || pages < 2) return
    const t = setInterval(() => setPage((x) => (Math.min(x, pages - 1) + 1) % pages), 6500)
    return () => clearInterval(t)
  }, [play, pausa, pages])
  const go = (d) => setPage((x) => (Math.min(x, pages - 1) + d + pages) % pages)

  return (
    <section id="noticias" className="reveal" aria-roledescription="carrusel" aria-label="Noticias IA"
      onMouseEnter={() => setPausa(true)} onMouseLeave={() => setPausa(false)} onFocus={() => setPausa(true)} onBlur={() => setPausa(false)}>
      <div className="nw-head">
        <h3>Noticias IA</h3>
        <div className="nw-dots" role="group" aria-label="Páginas del carrusel">
          {Array.from({ length: pages }, (_, i) => (
            <button key={i} className={i === p ? 'on' : ''} aria-label={`Página ${i + 1} de ${pages}`} aria-current={i === p ? 'true' : undefined} onClick={() => setPage(i)} />
          ))}
        </div>
        <div className="nw-ctl">
          <button aria-label="Noticias anteriores" onClick={() => go(-1)}>←</button>
          <button aria-label="Noticias siguientes" onClick={() => go(1)}>→</button>
          <button aria-label={play ? 'Pausar el carrusel' : 'Reanudar el carrusel'} aria-pressed={!play} onClick={() => setPlay(!play)}>{play ? '❚❚' : '▶'}</button>
        </div>
      </div>
      <div className="nw-view">
        <div className="nw-track" style={{ '--n': n, '--i': idx }} aria-live={play && !pausa ? 'off' : 'polite'}>
          {noticias.map((nw, i) => {
            const vis = i >= idx && i < idx + n
            const href = nw.enlace || 'https://www.google.com/search?q=' + encodeURIComponent(nw.busqueda || nw.titulo)
            return (
              <article className="nw-card" key={nw.titulo} aria-hidden={!vis}>
                <p className="nw-cat">{nw.categoria}</p>
                <h4 className="nw-t"><a href={href} target="_blank" rel="noopener noreferrer" tabIndex={vis ? 0 : -1}>{nw.titulo}</a></h4>
                <p className="nw-date">{nw.fecha}</p>
                <div className="nw-body">
                  <div className="nw-thumb" style={{ background: `linear-gradient(135deg, ${nw.colores[0]}, ${nw.colores[1]})` }} aria-hidden="true">
                    <b>{nw.cifra}</b><span>{nw.cifraTxt}</span>
                  </div>
                  <p className="nw-ex">{nw.texto}</p>
                </div>
                <p className="nw-src">Fuente: {nw.fuente}</p>
              </article>
            )
          })}
        </div>
      </div>
      <p className="nw-note">Resúmenes de informes publicados. Consultá la fuente original para ver el detalle completo.</p>
    </section>
  )
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

  return (
    <div className="cal">
      <div className="cal-h">
        <button onClick={() => go(-1)} aria-label="Mes anterior">‹</button>
        <span>{meses[m.mo]} {m.y}</span>
        <button onClick={() => go(1)} aria-label="Mes siguiente">›</button>
      </div>
      <div className="cal-g">
        {['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map((d) => <div key={d} className="d">{d}</div>)}
        {cells}
      </div>
      <div className="legend">{list.length ? list.join(' · ') : 'Sin fechas importantes este mes.'}</div>
    </div>
  )
}

function Faq() {
  const [open, setOpen] = useState(null)
  return (
    <div className="faq">
      {faqs.map(([q, a], i) => (
        <div key={q} className={open === i ? 'open' : ''}>
          <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            {q}<span className="chev">⌄</span>
          </button>
          {open === i && <div className="a"><Linkify text={a} /></div>}
        </div>
      ))}
    </div>
  )
}

const links = [['Concepto', '#concepto'], ['Perfil', '#perfil'], ['Prácticas', '#pasantias'], ['Plan de estudio', '#plan'], ['Calendario', '#calendario'], ['Preguntas', '#faq'], ['Alumnos', '/alumnos'], ['Contacto', '#contacto']]
const ids = links.map(([, h]) => h.slice(1))

// Materias del plan de estudio (Res. 3098-E), para el buscador
const materias = [
  [1, ['Álgebra', 'Análisis Matemático', 'Programación I', 'Ciencia y TIC', 'Base de Datos', 'Redes', 'Prácticas Profesionalizantes I', 'EDI I', 'Inglés Técnico']],
  [2, ['Ciencia de Datos', 'Estadística y Probabilidad', 'Programación II', 'Lógica', 'Introducción a la Inteligencia Artificial', 'Machine Learning', 'Prácticas Profesionalizantes II', 'EDI II']],
  [3, ['Gestión de Proyectos', 'Minería de Datos', 'Reconocimiento Visual', 'Ciberseguridad', 'Ética y Deontología Profesional', 'Analítica Web', 'Procesamiento del Lenguaje Natural', 'Prácticas Profesionalizantes III']],
]

const norm = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

const indice = [
  ...links.map(([t, href]) => ({ t, w: 'Sección', href })),
  { t: 'Noticias IA', w: 'Sección', href: '#noticias' },
  ...tabs.map(([t, , items]) => ({ t, w: 'Perfil', href: '#perfil', x: items.join(' ') })),
  ...internships.map(([t, d]) => ({ t, w: 'Prácticas', href: '#pasantias', x: d })),
  ...noticias.map((n) => ({ t: n.titulo, w: 'Noticias IA', href: '#noticias', x: n.fuente })),
  ...faqs.map(([q, a]) => ({ t: q, w: 'Preguntas frecuentes', href: '#faq', x: a })),
  ...materias.flatMap(([anio, lista]) => lista.map((m) => ({ t: m, w: `Plan de estudio · ${anio}.º año`, href: '#plan' }))),
].map((i) => ({ ...i, n: norm(i.t), h: norm(i.t + ' ' + (i.x || '')) }))

function useActive() {
  const [act, setAct] = useState(ids[0])
  useEffect(() => {
    let raf = 0
    const calc = () => {
      raf = 0
      let best = null
      let bt = -Infinity
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const t = el.getBoundingClientRect().top
        if (t <= 120 && t > bt) { best = id; bt = t }
      }
      setAct(best || ids[0])
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(calc) }
    window.addEventListener('scroll', onScroll, { passive: true })
    calc()
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf) }
  }, [])
  return act
}

function Wordmark() {
  return (
    <div className="wm" role="img" aria-label="IES-6, Instituto de Educación Superior">
      <svg width="46" height="42" viewBox="0 0 46 42" aria-hidden="true">
        <g stroke="#58b4ef" strokeWidth="3" strokeLinecap="round" fill="none"><path d="M10 22L24 9M10 22L26 34M24 9L38 20" /></g>
        <circle cx="10" cy="22" r="6" fill="#58b4ef" /><circle cx="24" cy="9" r="5" fill="#3a8fd6" /><circle cx="26" cy="34" r="5" fill="#8fd3f7" /><circle cx="39" cy="20" r="4" fill="#3a8fd6" />
      </svg>
      <span className="wm-t" aria-hidden="true">
        <span className="wm-n">IES-6</span>
        <span className="wm-s">Instituto de Educación Superior</span>
      </span>
    </div>
  )
}

function SearchBox() {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const nq = norm(q.trim())
  const terms = nq.split(/\s+/).filter(Boolean)
  const res = nq.length < 2 ? [] : indice
    .filter((i) => terms.every((t) => i.h.includes(t)))
    .sort((a, b) => Number(b.n.includes(nq)) - Number(a.n.includes(nq)))
    .slice(0, 6)
  const show = open && nq.length >= 2
  const cerrar = () => { setOpen(false); setQ('') }
  const enviar = (e) => {
    e.preventDefault()
    if (res[0]) { window.location.hash = res[0].href; cerrar() }
  }
  return (
    <form className="srch" role="search" onSubmit={enviar} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false) }}>
      <div className="srch-f">
        <label className="sr" htmlFor="buscar">Buscar en el sitio</label>
        <input id="buscar" type="search" placeholder="Buscar…" autoComplete="off" value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true) }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => { if (e.key === 'Escape') cerrar() }}
          aria-controls="res-busqueda" />
        <button type="submit" aria-label="Buscar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
        </button>
      </div>
      {show && (
        <>
          <p className="sr" role="status">{res.length ? `${res.length} resultados` : 'Sin resultados'}</p>
          <ul id="res-busqueda" className="srch-res" onMouseDown={(e) => e.preventDefault()}>
            {res.length
              ? res.map((r, i) => (
                <li key={r.t + i}><a href={r.href} onClick={cerrar}><b>{r.t}</b><small>{r.w}</small></a></li>
              ))
              : <li className="none">Sin resultados para “{q.trim()}”. Probá con otra palabra.</li>}
          </ul>
        </>
      )}
    </form>
  )
}

function NetSvg({ cls }) {
  const pts = [[70, 60], [120, 20], [190, 70], [250, 30], [60, 130], [130, 150]]
  return (
    <svg className={'net-c ' + cls} viewBox="0 0 300 200" aria-hidden="true" stroke="currentColor" strokeWidth="1" fill="currentColor">
      <path fill="none" d="M0 30L70 60L120 20L190 70L250 30L300 50M70 60L60 130L130 150L190 70M120 20L170 0M60 130L0 170M130 150L180 190M250 30L270 0" />
      {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={i % 2 ? 4.5 : 3} />)}
    </svg>
  )
}

const pt = (a, r) => { const t = (a * Math.PI) / 180; return [200 + r * Math.cos(t), 200 + r * Math.sin(t)] }
const nodoAngulos = [-62, -18, 34, 122, 196, 248]

function HeroBadge() {
  return (
    <div className="hero-badge">
      <svg className="hb-rings" viewBox="0 0 400 400" aria-hidden="true">
        <circle className="r1" cx="200" cy="200" r="136" />
        <circle className="r2" cx="200" cy="200" r="147" />
        <g className="hb-spin"><circle className="r3" cx="200" cy="200" r="161" /></g>
        <circle className="r4" cx="200" cy="200" r="176" />
        {nodoAngulos.map((a) => {
          const [x1, y1] = pt(a, 176)
          const [x2, y2] = pt(a, 188)
          const [cx, cy] = pt(a, 193)
          return (
            <g key={a}>
              <line className="sp" x1={x1.toFixed(1)} y1={y1.toFixed(1)} x2={x2.toFixed(1)} y2={y2.toFixed(1)} />
              <circle className="nd" cx={cx.toFixed(1)} cy={cy.toFixed(1)} r="4.5" />
            </g>
          )
        })}
      </svg>
      <img className="hb-img" src="/logo.jpg" alt="Logo de la Tecnicatura Superior en Ciencia de Datos e Inteligencia Artificial, IES 6 sede Perico" width="248" height="248" />
    </div>

  )
}

export default function App() {
  const [nav, setNav] = useState(false)
  const [theme, setTheme] = useState(() => {
    try { const t = localStorage.getItem('tema'); if (t === 'dark' || t === 'light') return t } catch (e) { /* sin almacenamiento */ }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('tema', theme) } catch (e) { /* sin almacenamiento */ }
  }, [theme])
  useReveal()

  const act = useActive()

  if (window.location.pathname.replace(/\/+$/, '') === '/alumnos') return <StudentsViewExternal standalone />

  return (
    <>
      <header className="hd-top">
        <div className="wrap hd-top-in">
          <Wordmark />
          <span className="hd-sep" aria-hidden="true" />
          <img className="hd-badge" src="/logo.jpg" alt="" width="64" height="64" />
          <h1>Ciencia de Datos e IA</h1>
        </div>
      </header>
      <div className="hd-bar">
        <div className="wrap hd-bar-in">
          <button className="burger" aria-label="Menú" aria-expanded={nav} aria-controls="menu-principal" onClick={() => setNav(!nav)}>☰</button>
          <a className="hd-brand" href="#concepto">
            <img className="brand" src="/logo.jpg" alt="" width="28" height="28" />
            <span>Ciencia de Datos e IA</span>
          </a>
          <nav id="menu-principal" aria-label="Principal" className={nav ? 'open' : ''} onClick={() => setNav(false)}>
            {links.map(([t, href]) => <a key={href} href={href} aria-current={act === href.slice(1) ? 'location' : undefined} {...(href === '/alumnos' ? { target: '_blank', rel: 'noopener noreferrer', 'aria-label': 'Abrir panel de alumnos en una pestaña nueva' } : {})}>{t}</a>)}
          </nav>
          <button className="theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro'} title={theme === 'dark' ? 'Modo claro' : 'Modo oscuro'}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{theme === 'dark' ? themeIcons.sun : themeIcons.moon}</svg>
          </button>
          <SearchBox />
        </div>
      </div>

      <div className="hero" id="concepto">
        <NetSvg cls="net-tl" />
        <NetSvg cls="net-tr" />
        <NetSvg cls="net-bl" />
        <div className="wrap">
          <div className="hero-txt">
            <h2>¡Vení a estudiar con nosotros!<span>y aprendé a convertir datos en decisiones</span></h2>
            <p>La Ciencia de Datos combina estadística, programación e inteligencia artificial para entender problemas complejos y proponer soluciones basadas en evidencia.</p>
            <a className="btn btn-soft" href="#plan">Ver plan de estudio</a>
          </div>
          <HeroBadge />
        </div>
      </div>

      <div className="wrap">
        <Tabs />
        <Stats />
        <Eventos />

        <section id="pasantias" className="reveal">
          <h3>Pasantías</h3>
          <div className="grid3">
            {internships.map(([title, text, bg, icon]) => (
              <div className="card" key={title}>
                <div className="art" style={{ background: bg }}>{icons[icon]}</div>
                <div className="t"><h4>{title}</h4><p>{text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <Noticias />

        <div className="two">
          <section id="plan" className="reveal">
            <h3>Plan de estudio</h3>
            <div className="pdf">
              <svg width="56" height="72" viewBox="0 0 56 72">
                <path d="M4 2h34l14 14v54H4z" fill="#3d5365" /><path d="M38 2v14h14" fill="#6f8596" />
                <text x="28" y="52" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff">PDF</text>
              </svg>
              <div>
                <p>Consultá las materias de cada año, la carga horaria y los requisitos de cursada.</p>
                {/* Poné tu PDF en la carpeta public/ y cambiá href por "/plan-de-estudio.pdf" */}
                <a className="btn" href="/plan-de-estudio.pdf" download>Descargar PDF</a>
              </div>
            </div>
          </section>
          <section id="calendario" className="reveal"><h3>Calendario académico</h3><Calendar /></section>
        </div>

        <div className="two">
          <section className="reveal">
            <h3>Mensaje motivacional</h3>
            <blockquote className="quote" style={{ margin: 0 }}>
              Los datos cuentan historias. Tu trabajo es aprender a escucharlas y ayudar a otros a entenderlas.
              <cite>— Equipo de Ciencia de Datos</cite>
            </blockquote>
          </section>
          <section id="faq" className="reveal"><h3>Preguntas frecuentes</h3><Faq /></section>
        </div>

        <section id="contacto" className="reveal">
          <h3>Contacto</h3>
          <Contacto />
        </section>
      </div>

      <footer>
        <div className="wrap">
          <div>
            <h5>Coordinador</h5>
            <div className="coord">
              <div className="av">{coordinador.foto ? <img src={coordinador.foto} alt={coordinador.nombre} width="56" height="56" /> : coordinador.iniciales}</div>
              <div><p><b>{coordinador.nombre}</b></p><p>Coordinador de la carrera</p></div>
            </div>
          </div>
          <div>
            <h5>Dirección</h5>
            {MAP_EMBED ? (
              <>
                <div className="map">
                  <iframe
                    title="Ubicación del IES N.º 6 en Google Maps"
                    src={MAP_EMBED}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <a className="maplink" href={MAPS_LINK} target="_blank" rel="noopener noreferrer">Abrir en Google Maps</a>
              </>
            ) : (
              <a className="map mapcard" href={MAPS_LINK} target="_blank" rel="noopener noreferrer" aria-label="Ver la ubicación en Google Maps">
                <svg width="30" height="38" viewBox="0 0 30 38" aria-hidden="true">
                  <path d="M15 1C8 1 2 7 2 14c0 10 13 23 13 23s13-13 13-23C28 7 22 1 15 1z" fill="#1f2d3a" /><circle cx="15" cy="14" r="5" fill="#4cc3bf" />
                </svg>
                <span>Ver en Google Maps</span>
              </a>
            )}
          </div>
          <div>
            <h5>Redes sociales</h5>
            <div className="soc">
              {Object.keys(socialIcons).map((k) => (
                social[k] && social[k] !== '#'
                  ? <a key={k} href={social[k]} aria-label={socialNames[k]} target="_blank" rel="noopener noreferrer">{socialIcons[k]}</a>
                  : <span key={k} className="soc-off" role="img" aria-label={socialNames[k] + ' (próximamente)'} title={socialNames[k] + ' (próximamente)'}>{socialIcons[k]}</span>
              ))}
            </div>
          </div>
          <div>
            <h5>Creadores</h5>
            <Creadores />
          </div>
        </div>
      </footer>
    </>
  )
}
