'use client'

import React from 'react'
import { ExternalLink, Github, Globe, Bot, Heart, Activity, Code, FileText } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'YouTube Shorts Automation Tool',
      description: 'Built an end-to-end pipeline that generates, edits, and uploads YouTube Shorts without manual intervention. Integrated OpenAI for scripts and captions, used FFmpeg to assemble clips with subtitles, transitions, and music, and automated scheduled uploads via the YouTube Data API.',
      tech: ['Python', 'OpenAI API', 'FFmpeg', 'YouTube Data API'],
      github: 'https://github.com/abdullahShahzad-512/yt-shorts-automation.git',
      icon: <Activity className="text-amber-500 dark:text-amber-400" size={24} />,
      featured: true
    },
    {
      title: 'Inventory Management System',
      description: 'Developed a product, stock, supplier, and transaction management system with secure CRUD operations. Implemented parameterized queries to prevent SQL injection, enforced admin/staff permissions, validated stock updates, and delivered a responsive Bootstrap UI for non-technical staff.',
      tech: ['ASP.NET Core MVC', 'ADO.NET', 'SQL Server', 'Bootstrap'],
      github: 'https://github.com/web-technologies-fall-2025/web-technologies-semester-project-abdullahShahzad-512.git',
      icon: <FileText className="text-emerald-500 dark:text-emerald-400" size={24} />,
      featured: true
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            A showcase of full-stack applications and AI/ML solutions demonstrating technical expertise
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg overflow-hidden hover-lift transition-all duration-300 ${
                  project.featured 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-2 border-blue-100 dark:border-blue-900' 
                    : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="ml-3 text-xl font-bold text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.featured
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex flex-col space-y-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Source Code</span>
                  </a>
                  
                  {project.docker && (
                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Docker: {project.docker}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Interested in seeing more of my work?
            </p>
            <a 
              href="https://github.com/abdullahShahzad-512" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors hover-lift"
            >
              <Github size={20} />
              <span>Visit My GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 