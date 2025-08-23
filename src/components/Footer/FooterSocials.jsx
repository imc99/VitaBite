import Link from 'next/link';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const socials = [
  { href: 'https://facebook.com', icon: <FacebookIcon /> },
  { href: 'https://x.com', icon: <XIcon /> },
  { href: 'https://instagram.com', icon: <InstagramIcon /> },
  { href: 'https://youtube.com', icon: <YouTubeIcon /> },
];
const FooterSocials = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl font-semibold mb-2">Our Socials</h2>
      <ul className="flex flex-col justify-center items-center space-y-2">
        {socials.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              target="_blank"
              className="hover:text-amber-400 active:text-amber-400 font-medium transition-colors duration-300 ease-in-out"
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSocials;
