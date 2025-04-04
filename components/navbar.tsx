"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if we've scrolled past the threshold to change navbar style
      if (currentScrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setVisible(false)
      } else {
        // Scrolling up or at the top
        setVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      } ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <Link
          href="/"
          className={`text-2xl font-serif italic ${
            scrolled ? "text-gray-800" : "text-white"
          } hover:opacity-80 transition-opacity`}
        >
          Wedding
        </Link>

        <div className="hidden md:flex items-center space-x-12">
          <Link
            href="/about"
            className={`${
              scrolled ? "text-gray-800" : "text-white"
            } hover:opacity-80 transition-opacity text-sm tracking-widest`}
          >
            ABOUT
          </Link>
          <Link
            href="/family"
            className={`${
              scrolled ? "text-gray-800" : "text-white"
            } hover:opacity-80 transition-opacity text-sm tracking-widest`}
          >
            FAMILY
          </Link>
          <Link
            href="/portfolio"
            className={`${
              scrolled ? "text-gray-800" : "text-white"
            } hover:opacity-80 transition-opacity text-sm tracking-widest`}
          >
            PORTFOLIO
          </Link>
          <Link
            href="/contact"
            className={`${
              scrolled ? "text-gray-800" : "text-white"
            } hover:opacity-80 transition-opacity text-sm tracking-widest`}
          >
            CONTACT
          </Link>
        </div>

        <button className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"}`} onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white shadow-lg py-4"
        >
          <div className="container mx-auto px-8">
            <div className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-gray-800 hover:text-pink-400 transition-colors text-sm tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/family"
                className="text-gray-800 hover:text-pink-400 transition-colors text-sm tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                FAMILY
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-800 hover:text-pink-400 transition-colors text-sm tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                PORTFOLIO
              </Link>
              <Link
                href="/contact"
                className="text-gray-800 hover:text-pink-400 transition-colors text-sm tracking-widest"
                onClick={() => setIsOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

