import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/images/ksl_logo.jpeg.jpg";
import CustomBtn from "../custom-button/custom-button.component";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); 
  const buttonRef = useRef(null); 

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const location = useLocation();

  return (
    <header 
      className="bg-blue-950 text-white border-b-2 border-gray-500 h-[6rem] pt-3 md:pt-1 2xl:pt-0 shadow-md md:fixed md:top-0 md:left-0 md:right-0 md:z-50" 
    >
      <div className="flex justify-between items-center p-4 lg:py-4 lg:px-20">
        <figure>
          <img src={logo} alt="logo" className="w-[55px] md:w-[70px]" />
        </figure>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-8 xl:space-x-16 text-base font-poppins">
            <li>
              <Link className={`${location.pathname === '/' ? 'text-gray-400 cursor-default' : 'text-white'}`} to={ '/'}
              >
              Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400 hover:underline hover:underline-offset-12 hover:cursor-pointer hover:decoration-sky-400 transition duration-300" to={location.pathname === '/' ? '#about' : '/#about'}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400 hover:underline hover:underline-offset-12 hover:cursor-pointer hover:decoration-sky-400 transition duration-300" to={location.pathname === '/' ? '#services' : '/#services'}
              >
                Services and Features
              </Link>
            </li>
            
            <li><Link className="hover:text-sky-400 hover:underline hover:underline-offset-12 hover:cursor-pointer hover:decoration-sky-400 transition duration-300" to={location.pathname === '/' ? '#blog' : '/#blog'}
            >
              Blog
            </Link>
          </li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link to={location.pathname === '/' ? '#contact' : '/#contact'}>
            {/* <CustomBtn className="bg-sky-400 px-6 py-2 rounded-full text-white cursor-pointer" btnContent={'Contact us'}/> */}
            <button className="bg-sky-400 px-6 py-2 rounded-full text-white cursor-pointer">Contact us</button>
          </Link>
        </div>

        {/* Hamburger */}
        <div ref={buttonRef} className="md:hidden z-50 cursor-pointer" onClick={toggleMenu}>
          <div className="w-8 h-1 bg-sky-400 relative transition-all duration-300 
            before:content-[''] before:absolute before:w-8 before:h-1 before:bg-sky-400 before:-top-3 
            after:content-[''] after:absolute after:w-8 after:h-1 after:bg-sky-400 after:top-3">
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed top-[6rem] left-0 right-0 z-50 bg-blue-900 w-full px-6 pb-6 space-y-4 animate-fade-in"
        >
          <ul className="flex flex-col gap-3 text-base text-center font-inter">
            <li>
              <Link className="hover:text-sky-400" to={location.pathname === '/' ? '#home' : '/#home'} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400" to={location.pathname === '/' ? '#about' : '/#about'} onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400" to={location.pathname === '/' ? '#services' : '/#services'} onClick={closeMenu}
              >
                Services and Features
              </Link>
            </li>
            <li>
              <Link className="hover:text-sky-400" to={location.pathname === '/' ? '#blog' : '/#blog'} onClick={closeMenu}>
                Blog
              </Link>
            </li>
          </ul>
          <div className="flex flex-col items-center space-y-2  w-full">
            <button className="bg-sky-400 px-6 py-2 w-full rounded-full text-white font-bold" onClick={closeMenu}>Contact us</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
