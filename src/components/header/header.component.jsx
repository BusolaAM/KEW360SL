import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from '../../assets/images/ksl_logo.jpeg.jpg';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  // Close menu when any nav link is clicked
  const closeMenu = () => setIsOpen(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


  // Handle Header BG on Scroll

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`
      md:fixed w-full z-50 transition-colors duration-300
      ${isMobile ? 'bg-plumb-purple text-white' : (isScrolled ? 'bg-plumb-purple text-white' : 'bg-transparent')}
      px-8 py-4 h-[6rem] md:h-[7rem]
    `}>
      <div className="flex justify-start md:justify-between items-center">
        
        {/* Hamburger Button */}
        <div 
          className="md:hidden relative w-10 h-8 flex items-center justify-center rounded-md bg-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-8 h-0.5 bg-black my-8 relative transition-all duration-300
            before:absolute before:block before:w-8 before:h-0.5 before:bg-black before:transition-all before:duration-300
            after:absolute after:block after:w-8 after:h-0.5 after:bg-black after:transition-all after:duration-300
            ${isOpen ? 
              'rotate-45 before:opacity-0 after:-rotate-90 after:top-0' : 
              'before:top-[-8px] after:top-[8px]'
            }`}>
          </span>
        </div>

        {/* Logo Section */}
        <div className='flex lg:space-x-2 2xl:space-x-8 items-center mx-auto md:mx-0'>
          <figure>
            <img src={logo} alt="logo" className='w-[5rem] md:w-[5rem] lg:w-[7rem]'/>
          </figure>
          <figcaption className='hidden lg:flex font-medium text-lg 2xl:text-xl font-poppins'>
            Kew360 Services Limited
          </figcaption>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center'>
          <ul className='flex space-x-8 xl:space-x-20 items-center text-base 2xl:text-lg font-extrabold font-poppins'>
            <li className='hover:underline hover:underline-offset-6 decoration-2 decoration-white hover:cursor-pointer transition-all duration-300'><Link to='/'>Home</Link></li>
            <li className='hover:underline hover:underline-offset-6 decoration-2 decoration-white hover:cursor-pointer transition-all duration-300'><Link to='/services'>Services</Link></li>
            <li className='hover:underline hover:underline-offset-6 decoration-2 decoration-white hover:cursor-pointer transition-all duration-300'><Link to='/about'>About us</Link></li>
            <li className='hover:underline hover:underline-offset-6 decoration-2 decoration-white hover:cursor-pointer transition-all duration-300'><Link to='/resources'>Resources</Link></li>
            <li className='hover:underline hover:underline-offset-6 decoration-2 decoration-white hover:cursor-pointer transition-all duration-300'><Link to='/contact'>Contact Us</Link></li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
       {isOpen && (
          <div className="md:hidden fixed inset-0 bg-opacity-50 z-40 mt-[6rem]">
            <nav className="bg-purple-300 w-full py-4 shadow-lg">
              <ul className="flex flex-col space-y-6 items-center text-base text-gray-600 font-extrabold font-poppins">
                <li className='hover:underline hover:decoration-2 hover:underline-offset-6 hover:decoration-purple-700' onClick={closeMenu}><Link to='/'>Home</Link></li>
                <li className='hover:underline hover:decoration-2 hover:underline-offset-6 hover:decoration-purple-700' onClick={closeMenu}><Link to='services'>Services</Link></li>
                <li className='hover:underline hover:decoration-2 hover:underline-offset-6 hover:decoration-purple-700' onClick={closeMenu}><Link to='/about'>About us</Link></li>
                <li className='hover:underline hover:decoration-2 hover:underline-offset-6 hover:decoration-purple-700' onClick={closeMenu}><Link to='/resources'>Resources</Link></li>
                <li className='hover:underline hover:decoration-2 hover:underline-offset-6 hover:decoration-purple-700' onClick={closeMenu}><Link to='/contact'>Contact Us</Link></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;