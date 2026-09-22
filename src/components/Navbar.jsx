import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      children: [
        { name: 'About Us', path: '/about' },
        { name: 'Why B and T', path: '/about#why' },
        { name: 'Our Difference', path: '/our-difference' },
        { name: 'National Footprint', path: '/footprint' },
      ],
    },
    {
      name: 'Services',
      path: '/services',
      children: [
        { name: 'All Services', path: '/services' },
        { name: 'Corporate Training', path: '/corporate-training' },
        { name: 'Occupational Training', path: '/occupational-training' },
        { name: 'Learnerships', path: '/learnerships' },
        { name: 'Workplace Learning', path: '/corporate-training' },
        { name: 'Youth Development', path: '/learnerships' },
      ],
    },
    { name: 'B-BBEE Solutions', path: '/bbbee' },
    { name: 'Learnerships', path: '/learnerships' },
    {
      name: 'For Business',
      path: '#',
      children: [
        { name: 'HR & SDF Managers', path: '/hr-managers' },
        { name: 'Procurement', path: '/procurement' },
        { name: 'B-BBEE Partnerships', path: '/partnerships' },
        { name: 'Industries', path: '/industries' },
      ],
    },
    { name: 'Contact', path: '/contact' },
    {
      name: 'Content',
      path: '/hub',
      children: [
        { name: 'Content Hub', path: '/hub' },
        { name: 'Learnership Opportunities', path: '/opportunities' },
        { name: 'News', path: '/news' },
        { name: 'Blog', path: '/blog' },
      ],
    },
  ];


  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (link) => {
    if (link.path === location.pathname) return true;
    if (link.children) {
      return link.children.some((child) => child.path === location.pathname);
    }
    return false;
  };

  return (
    <nav ref={navRef} className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="bg-black text-white font-bold text-2xl px-2 py-1 rounded-sm">B&T</div>
            <div className="flex flex-col leading-tight">
              <span className="text-[#E30613] font-bold text-sm tracking-wider">SKILLS DEVELOPMENT</span>
              <span className="text-black font-bold text-xs tracking-wider">TRAININGS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                onMouseLeave={() => link.children && setOpenDropdown(null)}
              >
                {link.children ? (
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-md ${isActive(link) ? 'text-[#E30613]' : 'text-gray-600 hover:text-[#E30613]'
                      }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${openDropdown === link.name ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`block px-3 py-2 text-sm font-medium transition-colors rounded-md ${isActive(link) ? 'text-[#E30613]' : 'text-gray-600 hover:text-[#E30613]'
                      }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && openDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-64 bg-white border border-gray-100 rounded-lg shadow-lg py-2">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={`block px-4 py-2 text-sm transition-colors ${location.pathname === child.path
                            ? 'bg-red-50 text-[#E30613] font-medium'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-[#E30613]'
                            }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/contact"
              className="ml-3 bg-[#E30613] text-white font-bold text-sm px-5 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              REQUEST PROPOSAL
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.children ? (
                <>
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.name ? null : link.name)
                    }
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-medium ${isActive(link) ? 'bg-red-50 text-[#E30613]' : 'text-gray-700 hover:bg-gray-50'
                      }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${openDropdown === link.name ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {openDropdown === link.name && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={`block px-4 py-2 rounded-md text-sm ${location.pathname === child.path
                            ? 'bg-red-50 text-[#E30613] font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.path}
                  className={`block px-4 py-3 rounded-md text-base font-medium ${isActive(link) ? 'bg-red-50 text-[#E30613]' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          <Link
            to="/contact"
            className="block mt-4 text-center bg-[#E30613] text-white font-bold px-5 py-3 rounded-md hover:bg-red-700 transition-colors"
          >
            REQUEST PROPOSAL
          </Link>
        </div>
      )}
    </nav>
  );
}