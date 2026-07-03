const skillGroups = [
  {
    icon: '⚡',
    title: 'Frontend',
    tags: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 / CSS3', 'ShadCN UI'],
  },
  {
    icon: '🛠️',
    title: 'Backend',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'Socket.io', 'JWT Auth', 'Better Auth'],
  },
  {
    icon: '🗄️',
    title: 'Database',
    tags: ['MongoDB', 'Mongoose', 'MySQL'],
  },
  {
    icon: '🤖',
    title: 'AI & Tools',
    tags: ['Gemini AI', 'Prompt Engineering', 'Git / GitHub', 'Postman', 'Vercel', 'Render'],
  },
  {
    icon: '📚',
    title: 'CS Fundamentals',
    tags: ['DSA', 'OOPs', 'DBMS', 'OS', 'Computer Networks'],
  },
  {
    icon: '🏗️',
    title: 'Architecture',
    tags: ['MVC Pattern', 'Client-Server', 'Multi-tenant SaaS', 'SDLC'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">// 02. tech stack</div>
        <h2 className="section-title">What I <span>Work With</span></h2>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skill-group" key={i}>
              <div className="skill-group-title">{group.icon} {group.title}</div>
              <div className="skill-tags">
                {group.tags.map((tag, j) => (
                  <span className="tag" key={j}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
