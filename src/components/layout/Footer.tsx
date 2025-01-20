import { Link } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Đá ong Chu Lai</h3>
            <p className="mb-4">
              Chuyên cung cấp đá ong tự nhiên chất lượng cao, góp phần tạo nên những công trình kiến trúc độc đáo và bền vững.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-400">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="hover:text-primary-400">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Thông tin liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon className="h-6 w-6 mr-3 flex-shrink-0" />
                <div>
                  <p>Hotline:</p>
                  <a href="tel:0123456789" className="hover:text-white">0123.456.789</a>
                </div>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 mr-3 flex-shrink-0" />
                <div>
                  <p>Email:</p>
                  <a href="mailto:contact@daongchulai.com" className="hover:text-white">
                    contact@daongchulai.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-6 w-6 mr-3 flex-shrink-0" />
                <div>
                  <p>Địa chỉ:</p>
                  <p>Khu công nghiệp Chu Lai,<br />Núi Thành, Quảng Nam</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Giờ làm việc</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Thứ 2 - Thứ 6:</span>
                <span>8:00 - 17:30</span>
              </li>
              <li className="flex justify-between">
                <span>Thứ 7:</span>
                <span>8:00 - 12:00</span>
              </li>
              <li className="flex justify-between">
                <span>Chủ nhật:</span>
                <span>Nghỉ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm">
              <p>&copy; {new Date().getFullYear()} Đá ong Chu Lai. All rights reserved.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Chính sách bảo mật
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Điều khoản sử dụng
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 