import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-plumb-purple text-white py-12 px-12 mt-auto">
      {/* Centered Heading Section */}
      <div className="text-center mb-12 max-w-2xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Stay Informed with LegalFlow</h2>
        <p className="text-gray-300 mb-6 text-sm sm:text-base">
          Subscribe to our newsletter to get the latest updates on our solutions, legal news, and company events.
        </p>
        <button className="bg-gray-300 text-black hover:bg-purple-500 px-6 py-2 rounded-md font-medium transition-all">
          Subscribe
        </button>
      </div>

      <div className="max-w-7xl xl:max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:text-left md:grid-cols-4 gap-10 px-4 text-center text-sm"> 
        {/* LegalFlow Links */} 
        <div >
          <h4 className="text-lg font-semibold mb-4">LegalFlow</h4>
          <ul className="space-y-2 text-white">
            <li className="hover:text-gray-300 transform hover:scale-105 transition duration-300"><Link to="#">Home</Link></li>
            <li className="hover:text-gray-300 transform hover:scale-105 transition duration-300"><Link to="#">Pricing</Link></li>
            <li className="hover:text-gray-300 transform hover:scale-105 transition duration-300"><Link to="#">Features</Link></li>
            <li className="hover:text-gray-300 transform hover:scale-105 transition duration-300"><Link to="#">Case Studies</Link></li>
          </ul>
        </div>

        {/* Solutions Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Solutions</h4>
          <ul className="space-y-2 text-white">
            <li className="hover:text-gray-300 transform hover:scale-105 transition duration-300"><Link to="#">Client Portal</Link></li>
            <li className="hover:text-gray-300 transform hover:scale-105 transition duration-300"><Link to="#">Document Automation</Link></li>
            <li className="hover:text-gray-300 transform hover:scale-105 transition duration-300"><Link to="#">Legal Research</Link></li>
            <li className="hover:text-gray-300 transform hover:scale-105 transition duration-300"><Link to="#">Compliance Tools</Link></li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-white">
            <li className="hover:text-gray-300 transform hover:scale-105 transition duration-300"><Link to="#">About Us</Link></li>
            <li className="hover:text-gray-300 transform hover:scale-105 transition duration-300"><Link to="#">Careers</Link></li>
            <li className="hover:text-gray-300 transform hover:scale-105 transition duration-300"><Link to="#">Contact</Link></li>
            <li className="hover:text-gray-300 transform hover:scale-105 transition duration-300"><Link to="#">Blog</Link></li>
          </ul>
        </div>

        {/* Connect (Social Media Icons) */}
        <div >
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  text-xl hover:text-gray-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  text-xl hover:text-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  text-xl hover:text-gray-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white  text-xl hover:text-gray-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-12 px-4">
        © {new Date().getFullYear()} LegalFlow. All rights reserved.
      </div>

      {/* Back to Top Button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={scrollToTop}
          className="text-white bg-silver hover:bg-purple-700 p-3 rounded-full shadow-lg transition duration-300"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
