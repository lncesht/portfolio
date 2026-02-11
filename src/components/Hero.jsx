import React from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="section-container relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
        {/* Greeting */}
        <p className="text-gray-400 text-lg mb-4 animate-slide-down">
          Hi, my name is
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 animate-slide-up">
          <span className="gradient-text">Lance Ivan Imperial</span>
        </h1>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-300 mb-6 animate-slide-up">
         Tech Enthusiast
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-slide-up">
        I focus on developing practical and efficient applications while constantly improving my programming skills and technical knowledge.

        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-secondary">
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
          <a
            href="https://github.com/lncesht"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors transform hover:scale-110"
            aria-label="GitHub"
          >
            <FiGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/lance-imperial-37557639b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition-colors transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={28} />
          </a>
          <a
            href="mailto:lanceimperial402@gmail.com"
            className="text-white hover:text-gray-400 transition-colors transform hover:scale-110"
            aria-label="Email"
          >
            <FiMail size={28} />
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce text-white hover:text-gray-400 transition-colors"
          aria-label="Scroll to about section"
        >
          <FiArrowDown size={32} />
        </button>
      </div>
    </section>
  )
}

export default Hero
