import MobileToggle from './MobileToggle';
import NavLogo from './NavLogo';
import NavMenu from './NavMenu';
import NavMobile from './NavMobile';

const Navbar = () => {
  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 w-full bg-transparent backdrop-blur-xl border-b border-zinc-800 shadow-md z-10">
        <div className="flex justify-between items-center p-4 container">
          <NavLogo />
          <NavMenu />
          <MobileToggle />
        </div>
        {/* Mobile Menu */}
        <NavMobile />
      </nav>
    </header>
  );
};

export default Navbar;
