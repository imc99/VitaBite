import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import { MenuProvider } from '@/contexts/MenuContext';

export const metadata = {
  title: 'VitaBite - Natural Energy',
  description: 'VitaBite - Natural Energy Protein Bars',
};

export default function RootLayout({ children }) {
  return (
    <MenuProvider>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </MenuProvider>
  );
}
