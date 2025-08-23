import Link from 'next/link';

const NavLogo = () => {
  return (
    <div>
      <Link
        href="/"
        className="text-2xl font-bold text-amber-400 hover:opacity-80 transition-opacity duration-300 ease-in-out"
      >
        <span className="text-emerald-500">Vita</span>Bite
      </Link>
    </div>
  );
};

export default NavLogo;
