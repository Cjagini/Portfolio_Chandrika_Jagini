import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-netflix-black border-t border-accent-sky/20 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand section */}
          <div>
            <h3 className="text-netflix-light text-xl font-bold mb-4">Chandrika Jagini</h3>
            <p className="text-netflix-light text-sm mb-6">
              Full Stack Developer | AI Enthusiast | 3+ Years Experience
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-netflix-light font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-netflix-light text-sm">
              <li><a href="#about" className="hover:text-accent-sky transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-accent-sky transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-accent-sky transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-accent-sky transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-netflix-light font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ChandrikaJ99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-netflix-light hover:text-accent-sky transition-colors text-lg"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/chandrikajagini"
                target="_blank"
                rel="noopener noreferrer"
                className="text-netflix-light hover:text-accent-sky transition-colors text-lg"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:chandrikajagini0905@gmail.com"
                className="text-netflix-light hover:text-accent-sky transition-colors text-lg"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent-sky/20 pt-8">
          <p className="text-center text-netflix-light text-sm">
            © {currentYear} Chandrika Jagini. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


