
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-white py-4 px-20">
      <div className="container mx-auto px-4 flex flex-wrap justify-between text-black">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p>Real Estate Company</p>
          <p>123 Main Street, Mangaluru, India</p>
          <p>Phone: +91-1234567890</p>
          <p>Email: info@realestate.com</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul>
            <Link to="/">
            <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
            </Link>
            

            <Link to="/about">
            <li className="mb-2"><a href="#" className="hover:underline ">About Us</a></li>
            </Link>
            
            <Link to="/search">
            <li className="mb-2"><a href="#" className="hover:underline">Properties</a></li>
            </Link>
            
            <Link to="/">
            <li className="mb-2"><a href="#" className="hover:underline">Services</a></li>
            </Link>
            
            <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
            
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" aria-label="Facebook"><FaFacebook className="w-6 h-6" /></a>
            <a href="https://www.twitter.com" aria-label="Twitter"><FaTwitter className="w-6 h-6" /></a>
            <a href="https://www.instagram.com" aria-label="Instagram"><FaInstagram className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com" aria-label="LinkedIn"><FaLinkedin className="w-6 h-6" /></a>
          </div>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-xl font-bold mb-4">For More</h4>
          <form >
            <input type="email" placeholder="Enter your email" className="p-2 w-full mb-4 text-gray-800 rounded-3xl"/>
            <Link to="/sign-in">
            <button type="submit" className="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 w-full uppercase rounded-3xl">Sign In</button>
            </Link>
            
          </form>
        </div>
      </div>
      <div className="bg-gray-700 text-center py-4 mt-6 rounded-3xl">
        <p>&copy; 2024 Real Estate Company | <a href="#" className="text-green-500 hover:underline">Privacy Policy</a> | <a href="#" className="text-green-500 hover:underline">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;
