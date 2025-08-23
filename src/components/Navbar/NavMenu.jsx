import Link from 'next/link';
import Button from '../reusable/Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#flavors', label: 'Flavors' },
  { href: '#reviews', label: 'Reviews' },
];

const NavMenu = () => {
  return (
    <div>
      <ul className="hidden sm:flex items-center space-x-4">
        {navLinks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="hover:text-emerald-500 active:text-emerald-500 font-medium transition-colors duration-300 ease-in-out"
            >
              {item.label}
            </Link>
          </li>
        ))}
        <li>
          <Button href="/" variant="primary">
            Buy Now
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
