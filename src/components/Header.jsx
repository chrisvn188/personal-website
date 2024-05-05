/* eslint-disable react/prop-types */
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const tabs = ['home', 'projects', 'about', 'contact']

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex justify-between gap-2 p-4">
      <a className="uppercase font-semibold text-xl" href="/">
        Chris B.
      </a>

      <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* <SmallScreenMenu /> */}
      {/* <BigScreenMenu /> */}

      {/* <nav className="hidden"></nav> */}

      {/* <nav className="hidden">
        <ul className="flex gap-4">
          {tabs.map((tab) => (
            <li key={tab}>
              <button className="px-3 py-2">{tab}</button>
            </li>
          ))}
        </ul>
      </nav> */}
    </header>
  )
}

function MenuButton({ isMenuOpen, setIsMenuOpen }) {
  return (
    <button
      className="sm:hidden"
      onClick={() => {
        setIsMenuOpen(!isMenuOpen)
      }}
      aria-label="Toggle Menu">
      {isMenuOpen ? (
        <XMarkIcon className="h-6 w-6 text-slate-700" />
      ) : (
        <Bars3Icon className="h-6 w-6 text-slate-700" />
      )}
    </button>
  )
}

export default Header
