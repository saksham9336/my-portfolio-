import { useEffect, useState } from 'react'

const FULL_NAME = "Saksham Singh"

export default function Hero() {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      if (i <= FULL_NAME.length) {
        setDisplayed(FULL_NAME.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="grid-bg" />
      <div className="glow-orb" />

      <div className="hero-badge">// available for opportunities</div>

      <h1 className="hero-name">
        Hi, I'm <span className="highlight">{displayed}</span>
        <span className="cursor" />
      </h1>

      <p className="hero-title">
        <strong>Full Stack Developer</strong> — MERN Stack · AI Integrations · Real-Time Apps
      </p>

      <div className="hero-btns">
        <a href="#projects" className="btn-primary">View Projects →</a>
        <a href="#contact" className="btn-outline">Let's Connect</a>
        {/* Apna resume PDF public/Saksham_Resume.pdf mein rakho */}
        <a href="/SAKSHAM_SINGH_RESUME.pdf" download className="btn-resume">⬇ Download Resume</a>
      </div>

      <div className="hero-scroll">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
