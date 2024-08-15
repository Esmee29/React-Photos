import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const location = useLocation();

  // Update active item based on current path
  const updateActiveItem = () => {
    const path = location.pathname;
    if (path === '/') {
      setActiveItem('home');
    } else if (path === '/gallery') {
      setActiveItem('gallery');
    } else if (path === '/about') {
      setActiveItem('about');
    }
  };

  // Update active item on location change
  useEffect(() => {
    updateActiveItem();
  }, [location]);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="bg-blue-900 text-white border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo - visible on all screens */}
        <Link 
          to="/" 
          className="flex items-center space-x-3 rtl:space-x-reverse"
          onClick={() => handleItemClick('home')}
        >
          <img src={Logo} className="h-8" alt="Logo" />
          <span className="hidden md:block self-center text-2xl font-semibold whitespace-nowrap">Esmee Fulcher Photography</span>
        </Link>
        
        <div className={`w-full md:block md:w-auto ${isNavbarVisible ? 'block' : 'hidden'}`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-blue-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <Link
                to="/"
                className={`block py-2 px-3 ${activeItem === 'home' ? 'text-blue-300' : 'text-gray-200'} rounded md:p-0 hover:text-blue-300`}
                aria-current="page"
                onClick={() => handleItemClick('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block py-2 px-3 ${activeItem === 'about' ? 'text-blue-300' : 'text-gray-200 hover:text-blue-300'} rounded md:p-0`}
                aria-current="page"
                onClick={() => handleItemClick('about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`block py-2 px-3 ${activeItem === 'gallery' ? 'text-blue-300' : 'text-gray-200 hover:text-blue-300'} rounded md:p-0`}
                aria-current="page"
                onClick={() => handleItemClick('gallery')}
              >
                Photography
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;