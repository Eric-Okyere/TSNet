import React, { useState } from 'react'
import Logo from '../../assets/Logo.jpeg'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('') // Track selected nav

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Follow Us', href: '#social' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleSelect = (href) => {
    setActiveSection(href)
    setMenuOpen(false) // Optionally close the menu on mobile
  }

  return (
    <nav className="bg-[#9ff904] border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex space-x-3">
          <img src={Logo} className="w-16 h-16 rounded-full animate-spin-slow" alt="Logo" />
          <div>
            <span className="text-2xl font-semibold text-black">The Skilled Network</span>
            <div className="overflow-hidden w-full">
              <p className="text-xs animate-slide-horizontal text-black">
                Impacting Lives, Empowering Generation...
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>

        <div className={`${menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col py-4 md:py-4 md:px-3 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => handleSelect(href)}
                  className={`block py-2 px-3 rounded-sm md:p-0 ${
                    activeSection === href
                      ? 'bg-blue-700 text-white md:text-blue-700 md:bg-transparent dark:text-blue-500'
                      : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
