import { motion } from "framer-motion";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-gray-500 mb-8">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="hover:text-gray-700">
                Trang chủ
              </a>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700">Liên hệ</li>
          </ol>
        </nav>

        {/* Recustomized Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-primary-600 mb-4">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Nếu bạn có bất kỳ thắc mắc hoặc cần hỗ trợ, vui lòng liên hệ qua
            thông tin bên dưới.
          </p>
        </motion.div>

        {/* Updated Grid: Only showing Contact Information */}
        <div className="grid grid-cols-1 gap-12">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-primary-600 mb-4">
                Thông tin liên hệ
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-primary-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-700">
                      Điện thoại
                    </h3>
                    <p className="text-gray-600">0982 535 517</p>
                    <p className="text-gray-600">0913 019 915</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 text-primary-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-700">Email</h3>
                    <p className="text-gray-600">daongvn@gmail.com</p>
                    {/* <p className="text-gray-600">sales@daongchulai.com</p> */}
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-primary-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-primary-700">
                      Địa chỉ
                    </h3>
                    <p className="text-gray-600">
                      Khu kinh tế mở Chu Lai,
                      <br />
                      huyện Núi Thành, tỉnh Quảng Nam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
