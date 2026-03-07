import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:chandrika.joshi99@gmail.com?subject=From ${formData.name}&body=${formData.message}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-20 px-4 bg-netflix-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-netflix-light text-center">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-accent-sky mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <FaMapMarkerAlt className="text-2xl text-accent-sky mt-1 flex-shrink-0 group-hover:scale-110 transition" />
                <div>
                  <h4 className="font-semibold text-accent-sky group-hover:text-accent-sky/80 transition">Location</h4>
                  <p className="text-netflix-light">Memphis, TN</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <FaPhone className="text-2xl text-accent-sky mt-1 flex-shrink-0 group-hover:scale-110 transition" />
                <div>
                  <h4 className="font-semibold text-accent-sky group-hover:text-accent-sky/80 transition">Phone</h4>
                  <a href="tel:+19016565912" className="text-netflix-light hover:text-accent-sky transition">
                    +1 (901) 656-5912
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <FaEnvelope className="text-2xl text-accent-sky mt-1 flex-shrink-0 group-hover:scale-110 transition" />
                <div>
                  <h4 className="font-semibold text-accent-sky group-hover:text-accent-sky/80 transition">Email</h4>
                  <a href="mailto:chandrikajagini0905@gmail.com" className="text-netflix-light hover:text-accent-sky transition">
                    chandrikajagini0905@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="font-semibold text-accent-sky mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                <a href="https://github.com/ChandrikaJ99" target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 bg-netflix-dark border-2 border-accent-sky/40 rounded-lg flex items-center justify-center text-accent-sky hover:bg-accent-sky/10 hover:border-accent-sky/80 hover:shadow-lg hover:shadow-accent-sky/20 transition text-xl group">
                  <FaGithub className="group-hover:scale-110 transition" />
                </a>
                <a href="https://linkedin.com/in/chandrikajagini" target="_blank" rel="noopener noreferrer"
                   className="w-12 h-12 bg-netflix-dark border-2 border-accent-sky/40 rounded-lg flex items-center justify-center text-accent-sky hover:bg-accent-sky/10 hover:border-accent-sky/80 hover:shadow-lg hover:shadow-accent-sky/20 transition text-xl group">
                  <FaLinkedin className="group-hover:scale-110 transition" />
                </a>
                <a href="mailto:chandrikajagini0905@gmail.com"
                   className="w-12 h-12 bg-netflix-dark border-2 border-accent-sky/40 rounded-lg flex items-center justify-center text-accent-sky hover:bg-accent-sky/10 hover:border-accent-sky/80 hover:shadow-lg hover:shadow-accent-sky/20 transition text-xl group">
                  <FaEnvelope className="group-hover:scale-110 transition" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-accent-sky mb-8">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-accent-sky mb-2">
                  Name
                </label>
                <input
                  type="text"
                  
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-netflix-dark border-2 border-accent-sky/40 rounded-lg text-netflix-light placeholder-netflix-light/50 focus:outline-none focus:border-accent-sky focus:shadow-lg focus:shadow-accent-sky/20 transition"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-accent-sky mb-2">
                  Email
                </label>
                <input
                  type="email"
                  
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-netflix-dark border-2 border-accent-sky/40 rounded-lg text-netflix-light placeholder-netflix-light/50 focus:outline-none focus:border-accent-sky focus:shadow-lg focus:shadow-accent-sky/20 transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-accent-sky mb-2">
                  Message
                </label>
                <textarea
                  
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-netflix-dark border-2 border-accent-sky/40 rounded-lg text-netflix-light placeholder-netflix-light/50 focus:outline-none focus:border-accent-sky focus:shadow-lg focus:shadow-accent-sky/20 transition resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent-sky text-netflix-black hover:bg-accent-sky/90 hover:shadow-lg hover:shadow-accent-sky/30 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact




