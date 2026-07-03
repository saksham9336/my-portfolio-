import { useState } from 'react'

const stats = [
  { num: '3+', label: 'Full Stack Projects' },
  { num: '3mo', label: 'Internship @ Softpro India' },
  { num: '7.4', label: 'CGPA (B.Tech CSE)' },
  { num: '2026', label: 'Graduating Year' },
]

export default function About() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-label">// 01. about me</div>
        <h2 className="section-title">Who am <span>I?</span></h2>

        <div className="about-grid">

          {/* Photo column */}
          <div className="about-photo-wrap">
            {!imgError ? (
              <img
                src="/profile.jpg"
                alt="Saksham Singh"
                className="about-photo"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="about-photo-placeholder">👨‍💻</div>
            )}
            <div className="about-photo-name">Saksham Singh</div>
          </div>

          {/* Text + stats column */}
          <div className="about-right">
            <div className="about-text">
             <p>
  I'm a <strong>B.Tech CSE graduate</strong> from Prayagraj with a strong passion for
  building full-stack web applications that actually solve real problems.
</p>
<p>
  My core stack is <strong>MERN (MongoDB, Express, React, Node.js)</strong>, and I love adding
  AI capabilities and real-time features to make apps more powerful and engaging.
</p>
<p>
  I've built everything from a <strong>multi-tenant SaaS chatbot</strong> to a{' '}
  <strong>hospital management system</strong> with role-based dashboards and live Socket.io updates.
  Clean code, good architecture, and practical solutions — that's what I'm about.
</p>
 </div>

            <div className="about-stats">
              {stats.map((s, i) => (
                <div className="stat-card" key={i}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
