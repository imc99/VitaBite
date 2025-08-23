import Link from 'next/link';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#flavors', label: 'Flavors' },
  { href: '#reviews', label: 'Reviews' },
];

const FooterLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl font-semibold mb-2">Useful Links</h2>
      <ul className="flex flex-col justify-center items-center space-y-2">
        {footerLinks.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className="hover:text-emerald-500 active:text-emerald-500 font-medium transition-colors duration-300 ease-in-out"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
