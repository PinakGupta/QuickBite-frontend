import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-4 sticky top-0 bg-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500 flex items-center"
        >
          <FaShoppingBag className="mr-2 text-2xl" />
          QuickBite
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div> 
        <div className="hidden md:block">
          <MainNav />
        </div> 
      </div>
    </div>
  );
};

export default Header;