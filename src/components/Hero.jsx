import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { useTypewriter } from '../hooks/useTypewriter'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  const roles = [
    'Full Stack Developer',
    'AI Enthusiast',
    'Problem Solver',
    'Tech Innovator',
    'Cloud Architect'
  ]
  
  const typingText = useTypewriter(roles, 80, 40, 2000)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-netflix-black px-4 pt-20 pb-12">
      <div className={`max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Left Content */}
        <div className="space-y-8">
          <div className="animate-slide-in-up">
            <h2 className="text-xs font-bold text-accent-sky uppercase tracking-[0.2em] mb-6">Welcome</h2>
            <h1 className="text-5xl md:text-6xl font-black leading-tight">
              <span className="text-accent-sky">Chandrika</span><br /><span className="bg-gradient-to-r from-accent-sky to-accent-skylight bg-clip-text text-transparent">Jagini</span>
            </h1>
          </div>

          <div className="space-y-4 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="h-12 flex items-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-accent-sky to-accent-skylight bg-clip-text text-transparent min-w-max">
                {typingText}<span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-base text-netflix-light/80 leading-relaxed max-w-2xl">
              3+ years building scalable applications and enterprise solutions. Expert in Java Spring Boot, Microservices, React, Node.js, and cutting-edge AI technologies.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <a href="#projects" className="px-8 py-3 bg-accent-sky text-netflix-black font-bold rounded-lg hover:bg-accent-skylight transition transform hover:scale-110 hover:shadow-2xl hover:shadow-accent-sky/40 active:scale-95">
              Explore Work
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-accent-sky text-accent-sky font-bold rounded-lg hover:bg-accent-sky hover:text-netflix-black transition transform hover:scale-110 hover:shadow-2xl hover:shadow-accent-sky/40 active:scale-95">
              Get In Touch
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-4 animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="https://github.com/Cjagini" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 flex items-center justify-center rounded-lg bg-netflix-dark border border-accent-sky/30 text-accent-sky hover:bg-accent-sky/10 hover:border-accent-sky/60 hover:text-accent-sky transition text-lg group">
              <FaGithub className="group-hover:scale-110 transition" />
            </a>
            <a href="https://linkedin.com/in/chandrikajagini" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 flex items-center justify-center rounded-lg bg-netflix-dark border border-accent-sky/30 text-accent-sky hover:bg-accent-sky/10 hover:border-accent-sky/60 hover:text-accent-sky transition text-lg group">
              <FaLinkedin className="group-hover:scale-110 transition" />
            </a>
            <a href="mailto:chandrikajagini0905@gmail.com"
               className="w-10 h-10 flex items-center justify-center rounded-lg bg-netflix-dark border border-accent-sky/30 text-accent-sky hover:bg-accent-sky/10 hover:border-accent-sky/60 hover:text-accent-sky transition text-lg group">
              <FaEnvelope className="group-hover:scale-110 transition" />
            </a>
            <a href="tel:+19016565912"
               className="w-10 h-10 flex items-center justify-center rounded-lg bg-netflix-dark border border-accent-sky/30 text-accent-sky hover:bg-accent-sky/10 hover:border-accent-sky/60 hover:text-accent-sky transition text-lg group">
              <FaPhone className="group-hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="animate-scale-up flex justify-center" style={{ animationDelay: '0.2s' }}>
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-sky/20 to-transparent rounded-2xl blur-2xl" />
            <div className="relative h-full rounded-2xl overflow-hidden border-2 border-accent-sky/30 shadow-2xl shadow-accent-sky/10 hover:border-accent-sky/60 transition duration-500 group">
              <img 
                src="/profile.jpg" 
                alt="Chandrika Jagini" 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                onError={(e) => {
                  e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-accent-sky to-netflix-dark flex items-center justify-center"><span class="text-6xl font-black text-accent-sky/40">CJ</span></div>'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
