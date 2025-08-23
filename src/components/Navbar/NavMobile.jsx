'use client';
import { useMenu } from '@/contexts/MenuContext';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#flavors', label: 'Flavors' },
  { href: '#reviews', label: 'Reviews' },
];

const NavMobile = () => {
  const { isMenuOpen, closeMenu } = useMenu();

  return (
    <div
      className={`sm:hidden w-full h-screen bg-zinc-900/95 backdrop-blur-2xl absolute top-[65px] left-0 right-0 z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-all duration-300 ease-in-out`}
    >
      <ul className="flex flex-col justify-center items-center h-full space-y-4">
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link
              onClick={closeMenu}
              href={item.href}
              className="text-xl hover:text-emerald-500 active:text-emerald-500 font-medium transition-colors duration-300 ease-in-out"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavMobile;
