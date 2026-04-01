import React from 'react'
import '../styles/sections.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact Us', href: '#contact' },
]

const NavBar: React.FC = () => {
  return (
    <nav
      style={{
        // Removed sticky positioning
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(255,255,255,0.85)',
        borderRadius: '24px',
        fontSize: '0.8rem',
        fontWeight: 600,
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        padding: '0.5rem 2.5rem',
        display: 'flex', 
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        margin: '0 auto',
        height: '20px',
      }}
    >
      {navItems.map(item => (
        <a
          key={item.label}
          href={item.href}
          style={{
            color: '#333',
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseOver={e => (e.currentTarget.style.color = 'coral')}
          onMouseOut={e => (e.currentTarget.style.color = '#333')}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}

export default NavBar