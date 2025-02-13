import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useWindowSize } from "../../hooks/useWindowSize";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowSize();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-shadow duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Đá ong Chu Lai
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Trang chủ
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-900">
              Sản phẩm
            </Link>
            <Link to="/mau-cong-trinh-da-ong" className="text-gray-600 hover:text-gray-900">
              Mẫu công trình
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              Giới thiệu
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">
              Liên hệ
            </Link>
          </nav>

          {/* Icons */}
          {width < 768 && (
          <div className="flex items-center space-x-4">
            {/* <button className="text-gray-600 hover:text-gray-900">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </button>
            <Link to="/cart" className="text-gray-600 hover:text-gray-900">
              <ShoppingCartIcon className="h-6 w-6" />
            </Link> */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <Bars3Icon className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Trang chủ
              </Link>
              <Link
                to="/products"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Sản phẩm
              </Link>
              <Link
                to="/mau-cong-trinh-da-ong"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Mẫu công trình
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Giới thiệu
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900"
              >
                Liên hệ
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
