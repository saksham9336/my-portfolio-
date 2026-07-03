import { useState } from 'react'

const projects = [
  {
    icon: '🤖',
    name: 'AI Customer Support SaaS Chatbot',
    shortDesc: 'SaaS platform that lets businesses embed an AI-powered chatbot on any website via a single script tag. Gemini AI reads business FAQs and answers queries in real time — with voice chat support.',
    fullDesc: 'A production-ready SaaS platform where businesses embed an AI-powered customer support chatbot on any website using a single script tag. Google Gemini AI reads the business knowledge base and automatically answers customer queries in real time. Includes a voice chat feature where customers speak their question and AI replies back in voice using Web Speech API.',
    stack: ['Next.js', 'MongoDB', 'Gemini AI', 'Scalekit', 'Tailwind CSS'],
    github: 'https://github.com/saksham9336/support-ai',
    live: 'https://support-ai-wheat-ten.vercel.app/',
    features: [
      'Embeddable chatbot widget via single script tag on any website',
      'Gemini AI reads business FAQs and answers customer queries in real time',
      'Voice chat — customers speak questions, AI replies back in voice (Web Speech API)',
      'Secure authentication using Scalekit SSO',
      'Admin dashboard to update knowledge base and business details',
      'MongoDB Atlas for persistent data storage',
      'Deployed live on Vercel',
    ],
  },
  {
    icon: '🏥',
    name: 'AI-Powered Hospital Management System',
    shortDesc: 'Hospital platform with separate logins for Admin, Doctor, Nurse, and Patient. AI auto-assigns doctors, reads X-rays, real-time updates via Socket.io, billing with online payments.',
    fullDesc: 'A full-stack hospital management system with separate dashboards for Admin, Doctor, Nurse, and Patient. Google Gemini AI automatically assigns the best doctor and nurse to new patients and analyzes uploaded X-rays to generate medical reports. Real-time updates across all roles via Socket.io with Inngest for background processing.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Gemini AI', 'Better Auth', 'Inngest'],
    github: 'https://github.com/saksham9336/ai-powered-realtime-hospital-management-system',
    live: 'https://ai-powered-realtime-hospital-manage.vercel.app/',
    features: [
      'Separate dashboards for Admin, Doctor, Nurse, and Patient',
      'Gemini AI auto-assigns best doctor and nurse to new patients',
      'X-ray upload with AI-generated medical report',
      'Real-time updates via Socket.io — no page refresh needed',
      'Billing system with online payments integration',
      'Background job processing using Inngest',
      'Dark & light mode, fully responsive, deployed on Vercel',
    ],
  },
  {
    icon: '📈',
    name: 'TradeVista — Stock Trading Platform',
    shortDesc: 'Complete stock trading website with live dashboard showing stock prices, holdings, orders, and account balance. Secure login/signup, clean UI, fully responsive across all devices.',
    fullDesc: 'A complete stock trading platform featuring a landing page, About/Products/Pricing sections, secure auth, and a live trading dashboard. Users can view stock prices, manage holdings and orders, and check account balance — all in a clean, responsive UI built with React and powered by a Node.js + Express.js backend.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/saksham9336/zerodha-clone',
    live: 'https://tradevista-frontend-phi.vercel.app/login',
    features: [
      'Live trading dashboard — stock prices, holdings, orders, account balance',
      'Secure login and signup with session management',
      'Landing page with Home, About, Products, Pricing sections',
      'Clean and modern UI/UX design',
      'Fully responsive — mobile, tablet, and desktop',
      'Deployed on Vercel + Render + MongoDB Atlas',
    ],
  },
]

function ProjectModal({ project, onClose }) {
  if (!project) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div className="modal-header">
          <span className="modal-icon">{project.icon}</span>
          <h2 className="modal-title">{project.name}</h2>
        </div>
        <p className="modal-desc">{project.fullDesc}</p>
        <div className="modal-features">
          <div className="modal-features-title">Key Features</div>
          <ul className="modal-feature-list">
            {project.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </div>
        <div className="modal-stack">
          {project.stack.map((t, i) => <span className="stack-tag" key={i}>{t}</span>)}
        </div>
        <div className="modal-actions">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">GitHub ↗</a>
          )}
          {project.live ? (
            <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">Live Demo ↗</a>
          ) : (
            <span className="btn-coming-soon">🚀 Deploying Soon</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-label">// 03. featured projects</div>
        <h2 className="section-title">Things I've <span>Built</span></h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-top">
                <div className="project-icon">{p.icon}</div>
                <div className="project-links">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()}>
                      GitHub ↗
                    </a>
                  )}
                  <button className="project-link-btn" onClick={() => setSelected(p)}>
                    Live Demo ↗
                  </button>
                </div>
              </div>
              <div className="project-name">{p.name}</div>
              <div className="project-desc">{p.shortDesc}</div>
              <div className="project-stack">
                {p.stack.map((t, j) => <span className="stack-tag" key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
