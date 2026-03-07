import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <header className="fixed top-0 w-full bg-netflix-black/95 z-50 border-b border-accent-sky/20 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-black text-accent-sky hover:text-accent-sky/80 transition">
          CJ
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-netflix-light hover:text-accent-sky transition-colors duration-300 font-medium text-sm relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-sky group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl text-accent-sky"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-netflix-dark border-t border-accent-sky/20">
          <div className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-netflix-light hover:text-accent-sky transition py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header


