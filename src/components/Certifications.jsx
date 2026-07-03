const certs = [
  {
    icon: '⚛️',
    name: 'MERN Stack Summer Training',
    issuer: 'Softpro India',
    desc: 'Hands-on training covering React.js, Node.js, Express.js, and MongoDB through guided project development.',
  },
  {
    icon: '🌐',
    name: 'Web Technologies Training',
    issuer: 'Softpro India',
    desc: 'Covered HTML5, CSS3, JavaScript, and responsive design fundamentals.',
  },
  {
    icon: '🧩',
    name: 'Data Structures and Algorithms',
    issuer: 'Apna College',
    desc: 'Completed Java-based DSA course covering arrays, linked lists, trees, and dynamic programming.',
  },
  {
    icon: '🏆',
    name: 'GUVI HCL Online Hackathon',
    issuer: 'GUVI × HCL',
    desc: 'Participated in a national-level online hackathon involving real-world problem-solving challenges.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <div className="section-label">// 06. certifications & achievements</div>
        <h2 className="section-title">What I've <span>Earned</span></h2>
        <div className="certs-grid">
          {certs.map((c, i) => (
            <div className="cert-card" key={i}>
              <div className="cert-icon">{c.icon}</div>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
                <div className="cert-year">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
