import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    const formData = new FormData(e.target)
    
    fetch('https://formspree.io/f/xojvwkbz', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        setStatus('success')
        e.target.reset()
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 3000)
      }
    })
    .catch(error => {
      console.error('Error:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-netflix-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-netflix-light text-center">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto">
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
              <a href="https://github.com/Cjagini" target="_blank" rel="noopener noreferrer" 
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
      </div>
    </section>
  )
}

export default Contact


