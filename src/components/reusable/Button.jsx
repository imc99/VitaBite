import Link from 'next/link';

const variants = {
  primary:
    'text-white font-semibold py-2 px-6 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-600 rounded-2xl shadow-md transition-colors duration-300 ease-in-out',
  secondary:
    'text-white font-semibold py-2 px-6 bg-transparent border border-zinc-700 hover:bg-white hover:text-black shadow-md rounded-2xl transition-colors duration-300 ease-in-out',
};

const Button = ({ href, variant, children }) => {
  return (
    <Link href={href} className={variants[variant]}>
      {children}
    </Link>
  );
};

export default Button;
