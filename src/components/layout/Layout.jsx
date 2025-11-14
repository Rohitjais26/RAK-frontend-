// client/src/components/layout/Layout.jsx (UPDATED)

import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingCTAS from '../FloatingCTAS'; // <-- NEW IMPORT

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
      <FloatingCTAS /> {/* <-- RENDER THE FLOATING CTAS HERE */}
    </div>
  );
};

export default Layout;