import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="bg-orange-500 py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Column */}
          <div>
            <span className="text-3xl text-white font-bold tracking-tight block mb-4">
              QuickBite
            </span>
            <p className="text-white opacity-80 mb-4">
              Connecting food lovers with their favorite restaurants effortlessly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-orange-200 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-orange-200 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-orange-200 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-orange-200 transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white hover:text-orange-200 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white hover:text-orange-200 transition-colors">About Us</Link></li>
              <li><Link to="/restaurants" className="text-white hover:text-orange-200 transition-colors">Restaurants</Link></li>
              <li><Link to="/contact" className="text-white hover:text-orange-200 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-xl text-white font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-white hover:text-orange-200 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-white hover:text-orange-200 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-white hover:text-orange-200 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl text-white font-bold mb-4">Newsletter</h3>
            <p className="text-white opacity-80 mb-4">
              Subscribe for special offers and updates
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg focus:outline-none w-full"
              />
              <button className="bg-orange-700 text-white px-4 py-2 rounded-r-lg hover:bg-orange-800 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-orange-400 flex flex-col md:flex-row justify-between items-center">
          <span className="text-white text-sm mb-4 md:mb-0">
            © {currentYear} QuickBite. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link to="/help" className="text-white hover:text-orange-200 transition-colors text-sm">Help Center</Link>
            <Link to="/faq" className="text-white hover:text-orange-200 transition-colors text-sm">FAQ</Link>
            <Link to="/support" className="text-white hover:text-orange-200 transition-colors text-sm">Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;