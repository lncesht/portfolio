import React from 'react'
import { FiCode, FiDatabase, FiLayout, FiTool } from 'react-icons/fi'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FiLayout size={32} />,
      skills: [
        { name: 'React', level: 60 },
        { name: 'JavaScript', level: 70 },
        { name: 'TypeScript', level: 65 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Next.js', level: 80 },
      ],
    },
    {
      title: 'Backend',
      icon: <FiDatabase size={32} />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 20 },
        { name: 'MongoDB', level: 10 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'REST APIs', level: 90 },
        { name: 'GraphQL', level: 40 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: <FiTool size={32} />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 40 },
        { name: 'AWS', level: 10 },
        { name: 'Vercel', level: 85 },
        { name: 'Figma', level: 20 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-300 card-hover"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/10 rounded-lg text-white">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-white to-gray-400 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
