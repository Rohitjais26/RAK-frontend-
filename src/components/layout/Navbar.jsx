import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

// UPDATED NAV ITEMS reflecting core service categories and slugs
const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "Metal Cutting & Processing", path: "/services/plasma-cutting" },
      { name: "Heavy Fabrication & Forming", path: "/services/heavy-fabrication" },
      { name: "CNC & Conventional Machining", path: "/services/cnc-machining" },
      { name: "Maintenance & Engine Rebuilding", path: "/services/site-maintenance" },
      { name: "Turnkey Consultancy", path: "/services/consultancy" },
    ],
  },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: 'Careers', path: '/careers' }, 
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Sticky Navbar
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- COLOR THEME LOGIC ---
  const linkClasses = ({ isActive }) =>
    `px-4 py-2 font-medium rounded-md transition-colors duration-300 ${
      isActive
        ? "text-red-600 bg-blue-50" // Active: Red text on Light Blue background
        : "text-blue-900 hover:text-red-600 hover:bg-blue-50" // Default: Deep Blue text, Red/Light Blue hover
    }`;

  // Base background is transparent, turns white when sticky
  const headerClasses = `w-full fixed top-0 z-50 transition-all duration-300 ${
    isSticky ? "bg-white shadow-lg py-3" : "bg-white/95 py-5" // Changed bg-transparent to bg-white/95
  }`;
  // --- END COLOR THEME LOGIC ---

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/converted_image.png" // RAK Engineering Logo
            alt="RAK Engineering Logo" 
            className="h-10 w-auto" 
          />
          <span className="text-2xl md:text-3xl font-bold text-blue-900">
            RAK <span className="text-red-600">Engineering</span> {/* Accent name in Red */}
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-4">
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setDropdownOpen(item.name)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `${linkClasses({ isActive })} flex items-center`
                  }
                >
                  {item.name} <ChevronDown className="ml-1 w-4 h-4" />
                </NavLink>

                {/* Dropdown */}
                {dropdownOpen === item.name && (
                  <div className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-lg w-72 overflow-hidden">
                    {item.dropdown.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.path} 
                        className="block px-4 py-3 text-blue-900 hover:text-white hover:bg-red-600 transition-colors text-sm" // Dropdown hover: Red background, White text
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.name} to={item.path} className={linkClasses}>
                {item.name}
              </NavLink>
            )
          )}
          {/* CTA */}
          <Link
            to="/contact"
            className="ml-4 px-6 py-2 bg-red-600 text-white rounded-full shadow-md hover:bg-blue-900 transition-all duration-300" // CTA: Red background, White text, Deep Blue hover
          >
            Request a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-blue-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 w-full bg-white shadow-xl lg:hidden transition-all duration-300">
            <nav className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <NavLink
                    to={item.path}
                    className={linkClasses}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>

                  {/* Mobile Dropdown */}
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
              <Link
                to="/contact"
                className="w-full text-center mt-2 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-blue-900 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Request a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;