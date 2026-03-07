import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import useInView from '../hooks/useInView'

const Education = () => {
  const [ref, isVisible] = useInView()

  const education = [
    {
      degree: 'Master of Science',
      field: 'Information Systems',
      school: 'University of Memphis',
      year: '12/2024',
      gpa: '3.96',
      awards: ['Merit Scholarship (2023)']
    },
    {
      degree: 'Bachelor of Science',
      field: 'Electronics & Communication Engineering',
      school: 'JNUTH',
      year: '07/2021',
      gpa: '3.6',
      awards: []
    }
  ]

  const certifications = [
    {
      title: "Harvard's CS50AI - Introduction to Artificial Intelligence using Python (12 projects)",
      link: 'https://cs50.harvard.edu/certificates/e4d16272-6ab2-4951-9dea-3d5e9a4ed78d'
    },
    {
      title: 'Udacity Generative AI Fluency',
      link: 'https://www.udacity.com/certificate/e/eb898e92-e4fb-11f0-99f9-9730f4c9d143'
    }
  ]

  const awards = [
    { title: 'Agile Award', organization: 'FedEx Internship', year: '2024' },
    { title: 'SPOT/Pat on Back Award', organization: 'Capgemini', year: '2023' },
    { title: 'Merit Scholarship', organization: 'University of Memphis', year: '2023' }
  ]

  return (
    <section id="education" className="py-20 px-4 bg-netflix-black">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className={`text-5xl font-bold mb-12 text-netflix-light transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Education & Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="text-2xl font-bold text-accent-sky mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="bg-netflix-dark p-6 rounded-lg border border-accent-sky/20 hover:border-accent-sky/60 transition cursor-pointer group hover:shadow-lg hover:shadow-accent-sky/10">
                  <h4 className="text-xl font-bold text-accent-sky group-hover:text-accent-sky/80 transition">{edu.degree}</h4>
                  <p className="text-netflix-light font-semibold">{edu.field}</p>
                  <p className="text-netflix-light/60 text-sm mb-3">{edu.school} • {edu.year}</p>
                  <p className="text-accent-sky font-semibold group-hover:text-accent-sky/80 transition">GPA: {edu.gpa}</p>
                  {edu.awards.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-accent-sky/20">
                      {edu.awards.map((award, i) => (
                        <p key={i} className="text-netflix-light text-sm">✓ {award}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Awards */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '100ms' }}>
            <h3 className="text-2xl font-bold text-accent-sky mb-6">🏆 Certifications</h3>
            <div className="space-y-3 mb-8">
              {certifications.map((cert, idx) => (
                <div key={idx} className={`bg-netflix-dark p-4 rounded-lg flex items-start gap-3 border border-accent-sky/20 hover:border-accent-sky/60 transition hover:bg-netflix-dark/80 hover:shadow-lg hover:shadow-accent-sky/5 cursor-pointer group ${cert.link ? 'hover:scale-105 hover:-translate-y-1' : ''}`}>
                  <span className="text-accent-sky font-bold text-lg group-hover:text-accent-sky/80 transition">✓</span>
                  <div className="flex-1">
                    {cert.link ? (
                      <a 
                        href={cert.link}
                        target={cert.link.startsWith('file') ? '_self' : '_blank'}
                        rel={cert.link.startsWith('file') ? '' : 'noopener noreferrer'}
                        className="text-netflix-light group-hover:text-accent-sky transition flex items-center gap-2 font-semibold hover:underline"
                      >
                        {cert.title}
                        <FaExternalLinkAlt className="text-sm opacity-0 group-hover:opacity-100 transition" />
                      </a>
                    ) : (
                      <p className="text-netflix-light group-hover:text-accent-sky transition">{cert.title}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold text-accent-sky mb-6">Awards & Recognition</h3>
            <div className="space-y-3">
              {awards.map((award, idx) => (
                <div key={idx} className="bg-netflix-dark p-4 rounded-lg border-l-4 border-accent-sky/30 hover:border-accent-sky/60 hover:bg-netflix-dark/80 transition cursor-pointer hover:shadow-lg hover:shadow-accent-sky/5">
                  <p className="font-semibold text-accent-sky">{award.title}</p>
                  <p className="text-netflix-light text-sm">{award.organization} • {award.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education




