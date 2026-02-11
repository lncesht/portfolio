import React, { useState } from 'react'
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from 'react-icons/fi'

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({})

  const toggleDescription = (idx) => {
    setExpandedProjects(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }))
  }

  const projects = [
    {
      title: 'Freelance Hub',
      description:
        'A mobile platform for individual service providers to connect with clients, manage bookings, and showcase their services. Built with React Native for cross-platform compatibility.',
      tags: ['React Native', 'Node.js', 'PostgreSQL', 'Supabase'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '📱',
    },
    {
      title: 'Workflow Task Management',
      description:
        'A collaborative task management web application with real-time updates, drag-and-drop functionality, and team collaboration features for efficient project management.',
      tags: ['PHP', 'Tailwind CSS', 'JavaScript'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '✅',
    },
    {
      title: 'Lanesra Ticketing System',
      description:
        'A comprehensive ticketing system web application for managing customer support requests, tracking issues, and streamlining communication between teams and clients.',
      tags: ['PHP', 'HTML', 'CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '🎫',
    },
    {
      title: 'Lanesra Team Portfolio',
      description:
        'Our team portfolio website showcasing our collective projects, skills, and achievements with smooth animations and interactive elements.',
      tags: ['JavaScript', 'Tailwind CSS', 'HTML'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '👥',
    },
    {
      title: 'Malvern Studio Design',
      description:
        'A painting and art showcasing web application for Malvern Studio, featuring a gallery of artworks, artist profiles, and an elegant design to highlight creative works.',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
      image: '🎨',
    },
  ]

  return (
    <section id="projects" className="section-container bg-gradient-to-b from-gray-900 to-black py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 card-hover group"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <div className="mb-4">
                  <p className={`text-gray-400 ${expandedProjects[idx] ? '' : 'line-clamp-3'}`}>
                    {project.description}
                  </p>
                  <button
                    onClick={() => toggleDescription(idx)}
                    className="text-white hover:text-gray-300 text-sm font-medium mt-2 flex items-center gap-1 transition-colors"
                  >
                    {expandedProjects[idx] ? (
                      <>
                        Show less <FiChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        See more <FiChevronDown size={16} />
                      </>
                    )}
                  </button>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-gray-400 transition-colors"
                  >
                    <FiGithub size={20} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-gray-400 transition-colors"
                  >
                    <FiExternalLink size={20} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/lncesht"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <FiGithub size={20} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
