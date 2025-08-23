import FooterLinks from './FooterLinks';
import FooterLogo from './FooterLogo';
import FooterSocials from './FooterSocials';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-30 px-4 sm:px-8">
      <div className="container-sm">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-16">
          <FooterLogo />
          <FooterLinks />
          <FooterSocials />
        </div>
        <div className="flex justify-center items-center mt-20">
          <p className="text-sm text-zinc-400">
            &copy; VitaBite {year} - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
