import Link from 'next/link';

const FooterLogo = () => {
  return (
    <div className="flex flex-col items-center sm:items-start">
      <Link
        href="/"
        className="text-4xl lg:text-5xl font-bold text-amber-400 hover:opacity-80 transition-opacity duration-300 ease-in-out"
      >
        <span className="text-emerald-500">Vita</span>Bite
      </Link>
      <p>
        Pure <span className="text-amber-400">Energy.</span> Pure{' '}
        <span className="text-emerald-500">Nature.</span>
      </p>
    </div>
  );
};

export default FooterLogo;
