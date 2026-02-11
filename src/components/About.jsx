import React from 'react'
import { FiDownload } from 'react-icons/fi'

const About = () => {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a')
    link.href = '/Imperial, Lance Ivan V. Resume.pdf'
    link.download = 'Imperial_Lance_Ivan_V_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" className="section-container bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Profile Image */}
          <div className="relative group flex items-center justify-center">
            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border-2 border-white/10 hover:border-white/30 transition-all duration-300">
              <img 
                src="/image/ppic.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-full max-w-md h-full border-2 border-white/20 rounded-2xl -z-10"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 flex flex-col justify-center">
            <p className="text-gray-300 text-lg leading-relaxed">
            Hello! I’m currently a 4th-year student with a growing passion for technology and programming.
            While I’m still in the process of learning, I’ve gained foundational knowledge in programming,
            networking, and databases through my studies and personal exploration.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
            I may not consider myself an expert yet, but I’m always eager to improve my skills and deepen my understanding
            of how systems and applications work. I enjoy learning new concepts, experimenting with code, and challenging myself
            to become better each day.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
            As I continue my journey in the tech field, my goal is to strengthen my programming skills, gain more hands-on experience,
            and build projects that will help me grow both personally and professionally.
            I’m motivated, curious, and always ready to learn something new.
            </p>

            {/* Resume Download Button */}
            <div className="pt-4">
              <button
                onClick={handleDownloadResume}
                className="btn-primary inline-flex items-center gap-2 group"
              >
                <FiDownload className="group-hover:animate-bounce" />
                Download Resume
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold text-white mb-1">4</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-3xl font-bold text-white mb-1">5</div>
                <div className="text-gray-400 text-sm">Projects Done</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
