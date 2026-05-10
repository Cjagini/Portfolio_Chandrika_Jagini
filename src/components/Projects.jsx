import React from 'react'
import { FaGithub } from 'react-icons/fa'
import useInView from '../hooks/useInView'

const Projects = () => {
  const [ref, isVisible] = useInView()

  const projects = [
    {
      title: 'Attention - BERT Model Interpretability Tool',
      description: 'A visualization tool that transforms the "black box" of AI into visual data. Implemented a Masked Language Model (MLM) using BERT to predict missing tokens and engineered a visualization suite using Python and Matplotlib.',
      highlights: [
        'Implemented Masked Language Model (MLM) using BERT',
        'Engineered visualization suite with 144 attention heads mapping',
        'Identified linguistic specializations in neural networks',
        'Python, Matplotlib, NLP'
      ],
      tags: ['Python', 'BERT', 'AI', 'NLP', 'Visualization']
    },
    {
      title: 'JENNIE - AI ChatBot Application',
      description: 'A production-ready conversational AI with stateful memory management. Architected a full-stack chatbot with FastAPI backend and React 18.2 frontend, integrated with Google Gemini API.',
      highlights: [
        'FastAPI backend for asynchronous request handling',
        'React 18.2 frontend with real-time UI updates',
        'Google Gemini 2.5 Flash API integration',
        'Custom session management system maintaining conversation context'
      ],
      tags: ['React', 'FastAPI', 'AI', 'Gemini API', 'Full-Stack']
    },
    {
      title: 'Sentinel - AI Financial Intelligence Platform',
      description: 'An automated personal finance manager solving manual expense tracking. Developed high-concurrency platform with GPT-4o-mini for transaction classification and Redis-based async task queue.',
      highlights: [
        'High-concurrency financial platform architecture',
        'GPT-4o-mini for transaction classification via NLP',
        'Asynchronous Task Queue using Redis and BullMQ',
        'PostgreSQL relational schema with Next.js TypeScript frontend'
      ],
      tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'GPT-4o', 'AI']
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-netflix-black">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className={`text-5xl font-bold mb-12 text-netflix-light transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Featured Projects
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`bg-netflix-dark rounded-lg overflow-hidden border border-accent-sky/20 hover:border-accent-sky transition-all duration-500 p-8 hover:shadow-2xl hover:shadow-accent-sky/20 hover:scale-105 hover:-translate-y-2 ${isVisible ? `translate-y-0 opacity-100` : `translate-y-10 opacity-0`}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-3 text-accent-sky hover:text-accent-sky/80 transition">{project.title}</h3>
              <p className="text-netflix-light mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-accent-sky mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-netflix-light flex items-start gap-2 hover:text-accent-sky transition">
                      <span className="text-accent-sky mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-2 bg-accent-sky/10 text-accent-sky rounded-full text-sm font-medium hover:bg-accent-sky/20 transition border border-accent-sky/20 hover:border-accent-sky/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-netflix-light mb-6">Check out more projects on my GitHub</p>
          <a 
            href="https://github.com/Cjagini" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent-sky text-netflix-black border border-accent-sky hover:bg-accent-sky/90 hover:shadow-lg hover:shadow-accent-sky/30 rounded-lg font-semibold transition"
          >
            <FaGithub /> Visit GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
