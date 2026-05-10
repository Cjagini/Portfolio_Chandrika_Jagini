import React, { useState } from 'react'
import useInView from '../hooks/useInView'

const Experience = () => {
  const [ref, isVisible] = useInView()
  const [expandedIndex, setExpandedIndex] = useState(null)

  const experiences = [
    {
      role: 'Software Developer - Integrations',
      company: 'FedEx Freight',
      period: '02/2026 - Current',
      highlights: [
        'Architected and deployed 8+ enterprise APIs on MuleSoft Anypoint Platform, integrating legacy systems with modern microservices reducing system integration time by 35%',
        'Managed full API lifecycle including design, deployment, versioning, and monitoring across multiple environments (Dev, Test, Production)',
        'Implemented API security policies: OAuth 2.0, rate limiting, request validation, reducing unauthorized API access incidents by 100%',
        'Developed EDI integration solutions processing 10,000+ daily transactions with 99.9% delivery success rate',
        'Optimized API performance using Anypoint Analytics achieving 40% reduction in response times',
        'Collaborated with cross-functional teams to gather requirements and deliver business-critical integrations'
      ]
    },
    {
      role: 'Software Developer I',
      company: 'FedEx',
      period: '01/2025 - Current',
      highlights: [
        'Developed 15+ APIs for FedEx login reengineering (Spring Boot, Microservices), improving response times by 20%',
        'Managed CI/CD pipelines & deployments, reducing release cycles by 40%',
        'Used Splunk & AppDynamics for monitoring and triaging, reducing downtime by 25%',
        'Retired legacy SSO applications, lowering maintenance costs and enhancing security'
      ]
    },
    {
      role: 'Advanced Intern',
      company: 'FedEx',
      period: '09/2024 - 12/2024',
      highlights: [
        'Implemented GitHub Copilot to improve developer productivity, reducing repetitive coding tasks by ~30%',
        'Developed 5+ AI use cases to streamline daily dev tasks and improve efficiency'
      ]
    },
    {
      role: 'Information Technology Intern',
      company: 'FedEx',
      period: '06/2024 - 08/2024',
      highlights: [
        'Automated peak reporting system, reducing reporting time from 210 hours to 21 hours',
        'Built Power BI dashboards and Python-based automation scripts for data workflows'
      ]
    },
    {
      role: 'Senior Software Engineer',
      company: 'Capgemini, India',
      period: '03/2023 - 07/2023',
      highlights: [
        'Built backend components for eCommerce web apps (Spring Boot, J2EE)',
        'Automated QA using Java, Selenium, Cucumber, cutting testing cycle time by 35%',
        'Developed Power BI dashboards and implemented CI/CD in Jenkins'
      ]
    },
    {
      role: 'Software Analyst',
      company: 'Capgemini, India',
      period: '09/2021 - 03/2023',
      highlights: [
        'Delivered software across Telecom, Insurance, and Payments domains',
        'Developed REST APIs, GUIs, and authored 100+ test scenarios, improving defect resolution by 25%'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-netflix-black">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <h2 className={`text-5xl font-bold mb-12 text-netflix-light transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Professional Experience
        </h2>
        
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div 
              key={idx}
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
              className={`bg-netflix-dark p-8 rounded-lg border border-accent-sky/20 hover:border-accent-sky/60 transition-all duration-500 cursor-pointer ${expandedIndex === idx ? 'border-accent-sky/60 shadow-lg shadow-accent-sky/10' : ''} ${isVisible ? `translate-y-0 opacity-100` : `translate-y-10 opacity-0`}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4 flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-accent-sky hover:text-accent-sky/80 transition">{exp.role}</h3>
                  <p className="text-lg text-netflix-light">{exp.company}</p>
                </div>
                <span className="text-sm text-accent-sky font-semibold">{exp.period}</span>
              </div>
              
              <div className={`overflow-hidden transition-all duration-500 ${expandedIndex === idx ? 'max-h-96' : 'max-h-0'}`}>
                <ul className="space-y-3 pt-4 border-t border-accent-sky/20">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-netflix-light flex items-start gap-3 hover:text-accent-sky transition">
                      <span className="text-accent-sky font-bold mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-right mt-3">
                <span className="text-accent-sky text-sm font-semibold hover:text-accent-sky/80 transition">
                  {expandedIndex === idx ? '▼ Click to collapse' : '▶ Click to expand'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
