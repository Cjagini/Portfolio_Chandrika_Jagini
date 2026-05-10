import React from 'react'
import useInView from '../hooks/useInView'

const About = () => {
  const [ref, isVisible] = useInView()

  return (
    <section id="about" className="py-20 px-4 bg-netflix-black">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className={`text-5xl font-bold mb-12 text-netflix-light transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          About Me
        </h2>
        
        <div className={`grid lg:grid-cols-3 gap-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Main text */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-netflix-light leading-relaxed">
              I'm a passionate software developer with over 3 years of professional experience building scalable applications and enterprise solutions. My journey spans from backend microservices development to AI integration and automation.
            </p>
            <p className="text-lg text-netflix-light leading-relaxed">
              At FedEx, I've developed 15+ APIs, managed CI/CD pipelines, and implemented GitHub Copilot to boost team productivity. My expertise includes Java Spring Boot, microservices architecture, REST APIs, and modern development practices. Currently, I specialize in enterprise integrations using MuleSoft and Anypoint Platform, designing and managing APIs for complex system integrations including EDI applications.
            </p>
            <p className="text-lg text-netflix-light leading-relaxed">
              I'm also passionate about AI and have completed Harvard's CS50AI program. I enjoy solving complex problems, optimizing systems, and mentoring team members.
            </p>
          </div>
          
          {/* Quick Facts */}
          <div className="bg-netflix-dark p-8 rounded-lg border border-accent-sky/30 hover:border-accent-sky/60 transition shadow-xl hover:shadow-accent-sky/10">
            <h3 className="text-2xl font-bold mb-6 text-accent-sky">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="text-netflix-light hover:text-accent-sky transition"><strong className="text-netflix-light">📍 Location:</strong> Memphis, TN</li>
              <li className="text-netflix-light hover:text-accent-sky transition"><strong className="text-netflix-light">🎓 Education:</strong> M.S. Information Systems (3.96 GPA)</li>
              <li className="text-netflix-light hover:text-accent-sky transition"><strong className="text-netflix-light">💼 Current Role:</strong> Software Developer I at FedEx</li>
              <li className="text-netflix-light hover:text-accent-sky transition"><strong className="text-netflix-light">⏱️ Experience:</strong> 3+ years</li>
              <li className="text-netflix-light hover:text-accent-sky transition"><strong className="text-netflix-light">🚀 Specialization:</strong> Backend Development & AI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
