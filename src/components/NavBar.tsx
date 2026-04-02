import React, { useCallback, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import '../styles/sections.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact Me', href: '#contact' },
]

const MAGNET_STRENGTH = 0.35
const SPRING = { stiffness: 280, damping: 22, mass: 0.4 }

const linkGroup = {
  rest: {},
  hover: {
    transition: { staggerChildren: 0.028, delayChildren: 0.04 },
  },
}

const letterVariants = {
  rest: {
    y: 0,
    rotate: 0,
    filter: 'blur(0px)',
  },
  hover: (i: number) => ({
    y: -3,
    rotate: Math.sin(i * 0.85) * 7,
    filter: 'blur(0px)',
    transition: {
      type: 'spring' as const,
      stiffness: 420,
      damping: 14,
    },
  }),
}

const underlineVariants = {
  rest: { scaleX: 0, opacity: 0 },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 320, damping: 28 },
  },
}

const glowVariants = {
  rest: { opacity: 0, scale: 0.85 },
  hover: {
    opacity: 0.55,
    scale: 1.15,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
}

type NavLinkProps = { label: string; href: string }

const NavLink: React.FC<NavLinkProps> = ({ label, href }) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const x = useSpring(mx, SPRING)
  const y = useSpring(my, SPRING)

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      mx.set((e.clientX - cx) * MAGNET_STRENGTH)
      my.set((e.clientY - cy) * MAGNET_STRENGTH)
    },
    [mx, my]
  )

  const onLeave = useCallback(() => {
    mx.set(0)
    my.set(0)
  }, [mx, my])

  const chars = label.split('')

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{
        x,
        y,
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#333',
        padding: '0 0.2rem',
      }}
      variants={linkGroup}
      initial="rest"
      whileHover="hover"
      animate="rest"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
    >
      <motion.span
        aria-hidden
        variants={glowVariants}
        style={{
          position: 'absolute',
          inset: '-6px -10px',
          borderRadius: 12,
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(255,127,80,0.45), transparent 70%)',
          pointerEvents: 'none',
          zIndex: -1,
        }}
      />
      <span
        style={{
          display: 'inline-flex',
          whiteSpace: 'pre',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {chars.map((ch, i) => (
          <motion.span
            key={`${label}-${i}-${ch}`}
            custom={i}
            variants={letterVariants}
            style={{
              display: 'inline-block',
              willChange: 'transform',
            }}
          >
            {ch === ' ' ? '\u00a0' : ch}
          </motion.span>
        ))}
      </span>
      <motion.span
        variants={underlineVariants}
        style={{
          marginTop: 1,
          height: 2,
          width: '100%',
          maxWidth: '100%',
          borderRadius: 2,
          transformOrigin: '50% 50%',
          background:
            'linear-gradient(90deg, transparent, coral, #ff9f7a, coral, transparent)',
          backgroundSize: '200% 100%',
          boxShadow: '0 0 12px rgba(255,127,80,0.45)',
        }}
      />
    </motion.a>
  )
}

const NavBar: React.FC = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
      whileHover={{
        boxShadow: '0 8px 32px rgba(255,127,80,0.18), 0 2px 16px rgba(0,0,0,0.08)',
        transition: { duration: 0.35 },
      }}
      style={{
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px',
        fontSize: '0.8rem',
        fontWeight: 600,
        boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
        padding: '0 2.5rem',
        height: 40,
        boxSizing: 'border-box',
        display: 'flex',
        gap: '2rem',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        margin: '0 auto',
        overflow: 'visible',
      }}
    >
      {navItems.map(item => (
        <NavLink key={item.label} label={item.label} href={item.href} />
      ))}
    </motion.nav>
  )
}

export default NavBar
