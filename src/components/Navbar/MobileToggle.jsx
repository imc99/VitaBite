'use client';
import { useMenu } from '@/contexts/MenuContext';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const MobileToggle = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <button onClick={toggleMenu} className="sm:hidden">
      {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
};

export default MobileToggle;
