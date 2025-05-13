import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/ksl_logo.jpeg.jpg";
import CustomBtn from "../custom-button/custom-button.component";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); 
  const buttonRef = useRef(null); 

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

 
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

  return (
    <header className="bg-blue-950 text-white border-b-2 border-gray-500">
      <div className="flex justify-between items-center p-4 lg:py-4 lg:px-20">
        <figure>
          <img src={logo} alt="logo" className="w-[55px] md:w-[70px]" />
        </figure>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          <ul className="flex space-x-8 xl:space-x-16 text-base font-poppins">
            <li><Link className="hover:text-sky-400" to="/">Home</Link></li>
            <li><Link className="hover:text-sky-400" to="/about">About Us</Link></li>
            <li><Link className="hover:text-sky-400" to="/solution">Solutions</Link></li>
            <li><Link className="hover:text-sky-400" to="/features">Features</Link></li>
            <li><Link className="hover:text-sky-400" to="/blog">Blog</Link></li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
            <CustomBtn className="hover:text-sky-400" btnContent={'Login'}/>
            <CustomBtn className="bg-sky-400 px-6 py-2 rounded-full text-white" btnContent={'Register'}/>
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
          className="md:hidden flex flex-col items-center bg-blue-900 w-full px-6 pb-6 space-y-4 animate-fade-in"
        >
          <ul className="flex flex-col gap-3 text-base font-poppins">
            <li><Link className="hover:text-sky-400" to="/">Home</Link></li>
            <li><Link className="hover:text-sky-400" to="/about">About Us</Link></li>
            <li><Link className="hover:text-sky-400" to="/solution">Solutions</Link></li>
            <li><Link className="hover:text-sky-400" to="/features">Features</Link></li>
            <li><Link className="hover:text-sky-400" to="/blog">Blog</Link></li>
          </ul>
          <div className="flex flex-col items-center space-y-2">
            <button className="hover:text-sky-400">Login</button>
            <button className="bg-sky-400 px-6 py-2 rounded-full text-white">Register</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
