import { Suspense, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("LogIn");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white w-full fixed top-0 left-0 z-50 px-4 sm:px-6 lg:px-10 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between h-auto sm:h-16 py-2 sm:py-0 gap-2 sm:gap-0">
        {/* Logo Section */}
        <Link to="/Swiggy-FrontEnd/" className="flex items-center gap-2">
          <div className="h-10 w-6 flex items-center gap-2 overflow-hidden">
            <img
              src={LOGO_URL}
              alt="Site Logo"
              className="h-full w-6 object-cover scale-150 transition-transform"
            />
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="w-full sm:w-auto">
          <ul className="flex flex-wrap justify-center sm:justify-end items-center gap-x-4 gap-y-2 sm:gap-6 text-sm font-medium text-gray-700">
            <li className="hidden md:inline-block text-xs sm:text-sm">
              Online Status: {onlineStatus ? "✅" : "❌"}
            </li>

            <li>
              <Link
                to="/Swiggy-FrontEnd/"
                className="hover:text-orange-600 transition-colors"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/Swiggy-FrontEnd/about"
                className="hover:text-orange-600 transition-colors"
              >
                About&nbsp;Us
              </Link>
            </li>

            <li>
              <Link
                to="/Swiggy-FrontEnd/contact"
                className="hover:text-orange-600 transition-colors"
              >
                Contact&nbsp;Us
              </Link>
            </li>

            <li>
              <Link
                to="/Swiggy-FrontEnd/grocery"
                className="hover:text-orange-600 transition-colors"
              >
                <Suspense fallback={<span>Loading…</span>}>Grocery</Suspense>
              </Link>
            </li>

            <li className="relative">
              <Link
                to="/Swiggy-FrontEnd/cart"
                className="hover:text-orange-600 transition-colors"
              >
                <i className="bi bi-bag font-black text-[20px]"></i>
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              </Link>
            </li>

            <li>
              <button
                onClick={() =>
                  setBtnName((prev) => (prev === "LogIn" ? "LogOut" : "LogIn"))
                }
                className="w-20 rounded-md border border-orange-600 px-3 py-1 text-orange-600 font-semibold hover:bg-orange-600 hover:text-white transition-all duration-300"
              >
                {btnName}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
