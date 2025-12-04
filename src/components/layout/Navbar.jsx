import React, { useState, useEffect } from "react";
// Import motion and AnimatePresence from framer-motion for enhanced animation
import { motion, AnimatePresence } from "framer-motion"; 
import { NavLink, Link, useLocation } from "react-router-dom"; 
import { Menu, X, ChevronDown } from "lucide-react";

// UPDATED NAV ITEMS reflecting core service categories and slugs
const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" }, // <-- DROPDOWN REMOVED
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: 'Careers', path: '/careers' }, 
];

// Define colors for easy switching
const BASE_TEXT_COLOR = 'text-blue-900'; 
const HOME_TRANSPARENT_COLOR = 'text-white';


const Navbar = () => {
  const { pathname } = useLocation(); 
  const isHome = pathname === "/";      

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

// ... (rest of the component remains the same)

  // Sticky Navbar
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // New helper to determine if the navbar should be fully transparent (Home, not scrolled)
  const isTransparent = isHome && !isSticky; 
  
  // --- COLOR THEME LOGIC ---
  // The main text color is white on the transparent header, otherwise navy/dark blue.
  const textColor = isTransparent ? HOME_TRANSPARENT_COLOR : BASE_TEXT_COLOR; 

  const linkClasses = ({ isActive }) =>
    `w-full block px-4 py-3 font-medium rounded-md transition-colors duration-300 ${
      isActive
        ? "text-red-600 bg-blue-50" 
        : "text-blue-900 hover:text-red-600 hover:bg-blue-50" 
    }`;

  // Base background is transparent on Home/top, turns white when sticky or on other pages
  const headerClasses = `w-full fixed top-0 z-50 transition-all duration-500 ${
    isSticky || !isHome
      ? "bg-white shadow-lg py-3" // Sticky or Not Home: Solid White
      : "bg-transparent py-5" // Home AND Not Sticky: Transparent
  }`;
  // --- END COLOR THEME LOGIC ---

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/converted_image.png" 
            alt="RAK Engineering Logo" 
            className="h-10 w-auto"
          />
          {/* Conditionally apply text color to the name */}
          <span className={`text-2xl md:text-3xl font-bold ${textColor}`}> 
            RAK <span className="text-red-600">Engineering</span>
          </span>
        </Link>

        {/* Right Side: CTA Button + Menu Button */}
        <div className="flex items-center space-x-4">
            {/* Get in Touch Button with Framer Motion Animation */}
            <motion.div
                // Animation: subtle lift/scale and shadow effect on hover
                whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(239, 68, 68, 0.5), 0 4px 6px -2px rgba(239, 68, 68, 0.05)' }} 
                whileTap={{ scale: 0.95 }}
                className="relative z-10"
            >
                <Link
                    to="/contact"
                    className={`px-6 py-2 font-semibold rounded-full shadow-lg transition-all duration-300 
                        ${isTransparent 
                            ? 'bg-red-600 text-white hover:bg-red-700' 
                            : 'bg-red-600 text-white hover:bg-blue-900' // Red on solid background, hover to Navy
                        }`}
                >
                    Get in Touch
                </Link>
            </motion.div>

            {/* Menu Button (Animated) */}
            <motion.button
                className={`p-1.5 rounded-full transition-colors duration-300 ${textColor} ${isSticky ? 'hover:bg-gray-100' : 'hover:bg-white/10'}`} // Subtle background on hover
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                whileHover={{ rotate: 90 }} // Rotate the button/icon container
                whileTap={{ scale: 0.9 }}
            >
                {/* AnimatePresence for smooth transition between icons */}
                <AnimatePresence mode="wait" initial={false}>
                    {isMenuOpen ? (
                        <motion.div
                            key="x"
                            initial={{ opacity: 0, rotate: -45 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: 45 }}
                            transition={{ duration: 0.3 }}
                        >
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="menu"
                            initial={{ opacity: 0, rotate: 45 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            exit={{ opacity: 0, rotate: -45 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Menu size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>

        {/* Mobile Menu (now the ONLY menu) */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 w-full bg-white shadow-xl lg:w-96 transition-all duration-300">
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {/* Main Nav Link */}
                  <NavLink
                    to={item.path}
                    className={linkClasses}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>

                  {/* Dropdown items for Services - This section is now skipped as 'item.dropdown' no longer exists */}
                  {item.dropdown &&
                    item.dropdown.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-6 py-2 text-blue-900 hover:bg-red-600 hover:text-white rounded-md transition-colors text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;