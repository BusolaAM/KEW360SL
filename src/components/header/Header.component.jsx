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

// className='hover:underline hover:decoration-2 hover:underline-offset-6 hover:decoration-purple-700'














































// import { useState, useEffect, useRef } from "react";
// import { Link as ScrollLink } from "react-scroll";
// import { Link, useLocation } from 'react-router-dom';
// import logo from "../../assets/images/ksl_logo.jpeg.jpg";
// import CustomBtn from "../custom-button/custom-button.component";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef(null); 
//   const buttonRef = useRef(null); 

//   const toggleMenu = () => setIsMenuOpen((prev) => !prev);

//   const closeMenu = () => setIsMenuOpen(false);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         menuRef.current &&
//         !menuRef.current.contains(event.target) &&
//         buttonRef.current &&
//         !buttonRef.current.contains(event.target)
//       ) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const location = useLocation();

//   return (
//     <header 
//       className="bg-white text-black border-b-2 border-gray-500 h-[8rem]  2xl:pt-0 shadow-md md:fixed md:top-0 md:left-0 md:right-0 md:z-50" 
//     >
//       {/* Site under Construction div to be removed and note to change back the header height to h-[6rem]*/}
//       <div className='bg-black'><marquee behavior="alternate" className="text-red-700 font-extrabold text-2xl">This Website is Under Construction!!</marquee></div>
      
//       <div className="flex justify-between items-center p-4 lg:py-4 lg:px-20">
//         <figure className="flex gap-6 items-center">
//           <img src={logo} alt="logo" className="w-[55px] md:w-[70px]" />
//           <figcaptiion className="hidden md:flex">Kew360 Service Limited</figcaptiion>
//         </figure>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex space-x-6 items-center">
//           <ul className="flex space-x-8 xl:space-x-16 text-base font-poppins">
//             <li>
//               <Link className={`${location.pathname === '/' ? 'text-gray-400 cursor-default' : 'text-white'}`} to={ '/'}
//               >
//               Home
//               </Link>
//             </li>
//             <li>
//               <Link className="hover:text-sky-400 hover:underline hover:underline-offset-12 hover:cursor-pointer hover:decoration-sky-400 transition duration-300" to={location.pathname === '/' ? '#services' : '/#services'}
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link className="hover:text-sky-400 hover:underline hover:underline-offset-12 hover:cursor-pointer hover:decoration-sky-400 transition duration-300" to={location.pathname === '/' ? '#about' : '/#about'}
//               >
//                 About Us
//               </Link>
//             </li>
            
//             <li><Link className="hover:text-sky-400 hover:underline hover:underline-offset-12 hover:cursor-pointer hover:decoration-sky-400 transition duration-300" to={location.pathname === '/' ? '#blog' : '/#blog'}
//             >
//               Resources
//             </Link>
//           </li>
//             <li><Link className="hover:text-sky-400 hover:underline hover:underline-offset-12 hover:cursor-pointer hover:decoration-sky-400 transition duration-300" to={location.pathname === '/' ? '#blog' : '/#blog'}
//             >
//               Contact Us
//             </Link>
//           </li>
//           </ul>
//         </nav>

//         {/* Desktop Buttons */}
//         {/* <div className="hidden md:flex items-center space-x-3">
//           <Link to={location.pathname === '/' ? '#contact' : '/#contact'}> */}
//             {/* <CustomBtn className="bg-sky-400 px-6 py-2 rounded-full text-white cursor-pointer" btnContent={'Contact us'}/> */}
//             {/* <button className="bg-sky-400 px-6 py-2 rounded-full text-white cursor-pointer">Contact us</button>
//           </Link> 
//           </div>*/}
//       </div> 

//         {/* Hamburger */}
//         <div
//           ref={buttonRef}
//           className="md:hidden z-50 cursor-pointer"
//           onClick={toggleMenu}
//         >
//           <div
//             className={`w-8 h-1 bg-sky-400 relative transition-all duration-300 ${
//               isMenuOpen ? 'bg-transparent' : ''
//             }`}
//           >
//             {/* Top line */}
//             <span
//               className={`absolute w-8 h-1 bg-sky-400 transition-all duration-300 ${
//                 isMenuOpen ? 'rotate-45 top-0' : '-top-2'
//               }`}
//             ></span>

//             {/* Middle line */}
//             <span
//               className={`absolute w-8 h-1 bg-sky-400 transition-all duration-300 ${
//                 isMenuOpen ? 'opacity-0' : 'top-0'
//               }`}
//             ></span>

//             {/* Bottom line */}
//             <span
//               className={`absolute w-8 h-1 bg-sky-400 transition-all duration-300 ${
//                 isMenuOpen ? '-rotate-45 top-0' : 'top-2'
//               }`}
//             ></span>
//           </div>
//         </div>


//       {/* Mobile Nav Dropdown */}
//       {isMenuOpen && (
//         <div
//           ref={menuRef}
//           className="md:hidden fixed top-[6rem] left-0 right-0 z-50 bg-blue-900 w-full px-6 pb-6 space-y-4 animate-fade-in"
//         >
//           <ul className="flex flex-col gap-3 text-base text-center font-inter">
//             <li>
//               <Link className="hover:text-sky-400" to={location.pathname === '/' ? '#home' : '/#home'} onClick={closeMenu}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link className="hover:text-sky-400" to={location.pathname === '/' ? '#services' : '/#services'} onClick={closeMenu}
//               >
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link className="hover:text-sky-400" to={location.pathname === '/' ? '#about' : '/#about'} onClick={closeMenu}>
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link className="hover:text-sky-400" to={location.pathname === '/' ? '#blog' : '/#blog'} onClick={closeMenu}>
//                 Resources
//               </Link>
//             </li>
//             <li>
//               <Link className="hover:text-sky-400" to={location.pathname === '/' ? '#blog' : '/#blog'} onClick={closeMenu}>
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//           <div className="flex flex-col items-center space-y-2  w-full">
//             <button className="bg-sky-400 px-6 py-2 w-full rounded-full text-white font-bold" onClick={closeMenu}>Contact us</button>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
