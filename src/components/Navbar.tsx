import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../data/siteData';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50">
      <nav className={`section-shell flex items-center justify-between rounded-full px-5 py-3 md:px-8 ${scrolled ? 'glass-panel border-white/20' : 'bg-transparent border border-transparent'}`}>
        <Link to="/" className="font-['Clash_Display'] text-xl tracking-wide">
          Dosthi <span className="text-[#F4B400]">Light & Sound</span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group relative text-sm transition ${isActive ? 'text-[#FFD54A]' : 'text-white/75 hover:text-white'}`
              }
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#FFD54A] transition-all duration-300 group-hover:w-full" />
            </NavLink>
          ))}
        </div>

        <button type="button" className="lg:hidden" onClick={() => setOpen((prev) => !prev)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        className="section-shell glass-panel mt-2 overflow-hidden rounded-3xl lg:hidden"
      >
        <div className="grid gap-2 p-4">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className="rounded-xl px-3 py-2 text-white/85 hover:bg-white/8">
              {item.label}
            </NavLink>
          ))}
        </div>
      </motion.div>
    </header>
  );
};
