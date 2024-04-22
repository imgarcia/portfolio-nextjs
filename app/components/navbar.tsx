import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="fixed top-5 z-50">
      <div className="flex items-center justify-center rounded-xl bg-dark-1 p-1 bg-opacity-50 backdrop-blur-md drop-shadow-xl">
        <ul className="flex gap-10 text-[16px]">
          <Link
            className="hover:bg-dark-2 hover:text-nav-hover py-2 px-4 rounded-xl"
            href="#about"
          >
            About
          </Link>
          <Link
            className="hover:bg-dark-2 hover:text-nav-hover py-2 px-4 rounded-xl"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            className="hover:bg-dark-2 hover:text-nav-hover py-2 px-4 rounded-xl bg-"
            href="#contact"
          >
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  )
}
