import React from 'react'
import { FaJava, FaPython, FaReact, FaDatabase, FaNode } from 'react-icons/fa'
import { SiSpringboot, SiMongodb, SiExpress, SiPostgresql } from 'react-icons/si'
import useInView from '../hooks/useInView'

const Skills = () => {
  const [ref, isVisible] = useInView()

  const skillCategories = [
    {
      title: 'Languages',
      icon: <FaJava className="text-2xl" />,
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML/CSS'],
    },
    {
      title: 'Backend & Frameworks',
      icon: <SiSpringboot className="text-2xl" />,
      skills: ['Spring Boot', 'Node.js', 'Express.js', 'RESTful APIs', 'Microservices', 'J2EE'],
    },
    {
      title: 'Frontend',
      icon: <FaReact className="text-2xl" />,
      skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'Redux', 'Responsive Design'],
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="text-2xl" />,
      skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle', 'MS SQL Server'],
    },
    {
      title: 'Full Stack & DevOps',
      icon: <SiSpringboot className="text-2xl" />,
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'CI/CD', 'AWS', 'Git/GitHub'],
    },
    {
      title: 'AI & Machine Learning',
      icon: <FaPython className="text-2xl" />,
      skills: ['GPT-4o', 'BERT', 'LLM', 'Google Gemini', 'FastAPI', 'NLP', 'Computer Vision', 'Prompt Engineering'],
    },
    {
      title: 'Tools & Analytics',
      icon: <FaDatabase className="text-2xl" />,
      skills: ['Splunk', 'Power BI', 'Prometheus', 'ELK Stack', 'JIRA', 'Insomnia'],
    },
    {
      title: 'Testing & QA',
      icon: <FaDatabase className="text-2xl" />,
      skills: ['Selenium', 'TestNG', 'Cucumber', 'JUnit', 'Mockito', 'QA Automation'],
    },
    {
      title: 'Core Concepts',
      icon: <FaDatabase className="text-2xl" />,
      skills: ['Microservices', 'System Design', 'REST APIs', 'CI/CD', 'Agile', 'TDD', 'SOLID Principles'],
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-netflix-black">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <h2 className={`text-5xl font-bold mb-12 text-netflix-light transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Skills & Expertise
        </h2>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-netflix-dark p-6 rounded-lg border border-accent-sky/20 hover:border-accent-sky/60 transition-all duration-300 group hover:shadow-lg hover:shadow-accent-sky/10"
            >
              <div className="flex items-center gap-3 mb-4 text-accent-sky group-hover:text-accent-sky transition-colors">
                {category.icon}
                <h3 className="text-lg font-bold text-netflix-light group-hover:text-accent-sky transition">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-accent-sky/10 text-accent-sky rounded-full text-xs font-medium hover:bg-accent-sky/20 hover:text-accent-sky transition border border-accent-sky/20 hover:border-accent-sky/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills




