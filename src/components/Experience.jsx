const points = [
  'Built responsive React.js frontends using component-based architecture and reusable UI patterns with Tailwind CSS.',
  'Developed and consumed RESTful APIs using Node.js and Express.js with routing, middleware, and input validation.',
  'Implemented JWT-based authentication from scratch — user registration, login, token generation, and protected routes.',
  'Designed MongoDB schemas with proper validation, references, and CRUD operations including filtering and pagination.',
  'Used Git and GitHub for version control — branches, pull requests, and clean commit history throughout the project.',
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">// 04. experience</div>
        <h2 className="section-title">Where I've <span>Worked</span></h2>
        <div className="exp-card">
          <div className="exp-header">
            <div>
              <div className="exp-role">MERN Stack Developer Intern</div>
              <div className="exp-company">Softpro India · Lucknow</div>
            </div>
            <div className="exp-period">Sep 2024 – Nov 2024</div>
          </div>
          <ul className="exp-list">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
