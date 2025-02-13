import { Link } from "react-router-dom";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-amber-50 text-lg font-semibold mb-4">
              Đá ong Chu Lai
            </h3>
            <p className="mb-4 text-amber-200">
              Chuyên cung cấp đá ong tự nhiên, góp phần tạo nên những công trình
              kiến trúc độc đáo, bền vững.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/atoong.569333"
                className="text-amber-200 hover:text-amber-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              
              <a
                href="https://zalo.me/0913019915"
                className="text-amber-200 hover:text-amber-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Zalo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="32"
                  height="32"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  className="h-8 w-8"
                >
                  <path d="M 9 4 C 6.2504839 4 4 6.2504839 4 9 L 4 41 C 4 43.749516 6.2504839 46 9 46 L 41 46 C 43.749516 46 46 43.749516 46 41 L 46 9 C 46 6.2504839 43.749516 4 41 4 L 9 4 z M 9 6 L 15.580078 6 C 12.00899 9.7156859 10 14.518083 10 19.5 C 10 24.66 12.110156 29.599844 15.910156 33.339844 C 16.030156 33.549844 16.129922 34.579531 15.669922 35.769531 C 15.379922 36.519531 14.799687 37.499141 13.679688 37.869141 C 13.249688 38.009141 12.97 38.430859 13 38.880859 C 13.03 39.330859 13.360781 39.710781 13.800781 39.800781 C 16.670781 40.370781 18.529297 39.510078 20.029297 38.830078 C 21.379297 38.210078 22.270625 37.789609 23.640625 38.349609 C 26.440625 39.439609 29.42 40 32.5 40 C 36.593685 40 40.531459 39.000731 44 37.113281 L 44 41 C 44 42.668484 42.668484 44 41 44 L 9 44 C 7.3315161 44 6 42.668484 6 41 L 6 9 C 6 7.3315161 7.3315161 6 9 6 z M 33 15 C 33.55 15 34 15.45 34 16 L 34 25 C 34 25.55 33.55 26 33 26 C 32.45 26 32 25.55 32 25 L 32 16 C 32 15.45 32.45 15 33 15 z M 18 16 L 23 16 C 23.36 16 23.700859 16.199531 23.880859 16.519531 C 24.050859 16.829531 24.039609 17.219297 23.849609 17.529297 L 19.800781 24 L 23 24 C 23.55 24 24 24.45 24 25 C 24 25.55 23.55 26 23 26 L 18 26 C 17.64 26 17.299141 25.800469 17.119141 25.480469 C 16.949141 25.170469 16.960391 24.780703 17.150391 24.470703 L 21.199219 18 L 18 18 C 17.45 18 17 17.55 17 17 C 17 16.45 17.45 16 18 16 z M 27.5 19 C 28.11 19 28.679453 19.169219 29.189453 19.449219 C 29.369453 19.189219 29.65 19 30 19 C 30.55 19 31 19.45 31 20 L 31 25 C 31 25.55 30.55 26 30 26 C 29.65 26 29.369453 25.810781 29.189453 25.550781 C 28.679453 25.830781 28.11 26 27.5 26 C 25.57 26 24 24.43 24 22.5 C 24 20.57 25.57 19 27.5 19 z M 38.5 19 C 40.43 19 42 20.57 42 22.5 C 42 24.43 40.43 26 38.5 26 C 36.57 26 35 24.43 35 22.5 C 35 20.57 36.57 19 38.5 19 z M 27.5 21 C 27.39625 21 27.29502 21.011309 27.197266 21.03125 C 27.001758 21.071133 26.819727 21.148164 26.660156 21.255859 C 26.500586 21.363555 26.363555 21.500586 26.255859 21.660156 C 26.148164 21.819727 26.071133 22.001758 26.03125 22.197266 C 26.011309 22.29502 26 22.39625 26 22.5 C 26 22.60375 26.011309 22.70498 26.03125 22.802734 C 26.051191 22.900488 26.079297 22.994219 26.117188 23.083984 C 26.155078 23.17375 26.202012 23.260059 26.255859 23.339844 C 26.309707 23.419629 26.371641 23.492734 26.439453 23.560547 C 26.507266 23.628359 26.580371 23.690293 26.660156 23.744141 C 26.819727 23.851836 27.001758 23.928867 27.197266 23.96875 C 27.29502 23.988691 27.39625 24 27.5 24 C 27.60375 24 27.70498 23.988691 27.802734 23.96875 C 28.487012 23.82916 29 23.22625 29 22.5 C 29 21.67 28.33 21 27.5 21 z M 38.5 21 C 38.39625 21 38.29502 21.011309 38.197266 21.03125 C 38.099512 21.051191 38.005781 21.079297 37.916016 21.117188 C 37.82625 21.155078 37.739941 21.202012 37.660156 21.255859 C 37.580371 21.309707 37.507266 21.371641 37.439453 21.439453 C 37.303828 21.575078 37.192969 21.736484 37.117188 21.916016 C 37.079297 22.005781 37.051191 22.099512 37.03125 22.197266 C 37.011309 22.29502 37 22.39625 37 22.5 C 37 22.60375 37.011309 22.70498 37.03125 22.802734 C 37.051191 22.900488 37.079297 22.994219 37.117188 23.083984 C 37.155078 23.17375 37.202012 23.260059 37.255859 23.339844 C 37.309707 23.419629 37.371641 23.492734 37.439453 23.560547 C 37.507266 23.628359 37.580371 23.690293 37.660156 23.744141 C 37.739941 23.797988 37.82625 23.844922 37.916016 23.882812 C 38.005781 23.920703 38.099512 23.948809 38.197266 23.96875 C 38.29502 23.988691 38.39625 24 38.5 24 C 38.60375 24 38.70498 23.988691 38.802734 23.96875 C 39.487012 23.82916 40 23.22625 40 22.5 C 40 21.67 39.33 21 38.5 21 z"></path>
                </svg>
              </a>
              {/* <a href="#" className="text-amber-200 hover:text-amber-50 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-amber-50 text-lg font-semibold mb-4">
              Liên kết nhanh
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-amber-200 hover:text-amber-50 transition-colors"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-amber-200 hover:text-amber-50 transition-colors"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-amber-200 hover:text-amber-50 transition-colors"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-amber-200 hover:text-amber-50 transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link
                  to="/mau-cong-trinh-da-ong"
                  className="text-amber-200 hover:text-amber-50 transition-colors"
                >
                  Mẫu Công Trình Đá Ong
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-amber-50 text-lg font-semibold mb-4">
              Thông tin liên hệ
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneIcon className="h-6 w-6 mr-3 flex-shrink-0 text-amber-300" />
                <div>
                  <a
                    href="tel:0913019915"
                    className="text-amber-200 hover:text-amber-50"
                  >
                    0913 019 915
                  </a>
                  <p></p>
                  <a
                    href="tel:0982535517"
                    className="text-amber-200 hover:text-amber-50"
                  >
                    0982 535 517
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 mr-3 flex-shrink-0 text-amber-300" />
                <div>
                  <p>Email:</p>
                  <a
                    href="mailto:daongvn@gmail.com"
                    className="text-amber-200 hover:text-amber-50"
                  >
                    daongvn@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-6 w-6 mr-3 flex-shrink-0 text-amber-300" />
                <div>
                  <p>Địa chỉ:</p>
                  <p>
                    Khu kinh tế mở Chu Lai,
                    <br />
                    huyện Núi Thành, tỉnh Quảng Nam
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-amber-50 text-lg font-semibold mb-4">
              Giờ làm việc
            </h3>
            <ul className="space-y-2 text-amber-200">
              <li className="flex justify-between">
                <span>Thứ 2 - Thứ 7:</span>
                <span>8:00 - 17:00</span>
              </li>
              {/* <li className="flex justify-between">
                <span>Thứ 7:</span>
                <span>8:00 - 12:00</span>
              </li> */}
              <li className="flex justify-between">
                <span>Chủ nhật:</span>
                <span>Nghỉ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-sm text-amber-300">
              <p>
                &copy; {new Date().getFullYear()} Đá ong Chu Lai. All rights
                reserved.
              </p>
            </div>
            {/* <div className="mt-4 md:mt-0">
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
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
