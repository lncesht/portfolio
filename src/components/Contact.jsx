import React, { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiInstagram } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here (e.g., EmailJS, API call)
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      value: 'lanceimperial402@gmail.com',
      link: 'mailto:lanceimperial402@gmail.com',
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      value: '+63 (956) 982-6972',
      link: 'tel:+63 (956) 982-6972',
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      value: 'Kawit, Cavite, Philippines',
      link: null,
    },
  ]

  const socialLinks = [
    { icon: <FiGithub size={24} />, link: 'https://github.com/lncesht', label: 'GitHub' },
    { icon: <FiLinkedin size={24} />, link: 'https://www.linkedin.com/in/lance-imperial-37557639b/', label: 'LinkedIn' },
    { icon: <FiInstagram size={24} />, link: 'https://www.instagram.com/lnce.wzg/', label: 'Instagram' },
  ]

  return (
    <section id="contact" className="section-container bg-black py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="text-white">{info.icon}</div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-white hover:text-gray-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white hover:text-black text-white transition-all transform hover:scale-110"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors resize-none"
                  placeholder=""
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <FiSend />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Lance Imperial. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
