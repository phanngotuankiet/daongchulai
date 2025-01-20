import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-gray-500 mb-8">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="hover:text-gray-700">Trang chủ</a>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700">Giới thiệu</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Đá ong Chu Lai - Đá của ngôi nhà Việt
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chuyên cung cấp đá ong tự nhiên chất lượng cao, góp phần tạo nên những công trình kiến trúc độc đáo và bền vững.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Giới thiệu chung */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900">Về chúng tôi</h2>
            <p className="text-gray-600">
              Đá ong Chu Lai tự hào là đơn vị tiên phong trong lĩnh vực khai thác và cung cấp đá ong 
              tự nhiên tại khu vực miền Trung. Với hơn 10 năm kinh nghiệm, chúng tôi cam kết mang đến 
              những sản phẩm đá ong chất lượng cao, đáp ứng mọi nhu cầu xây dựng và trang trí.
            </p>
            <p className="text-gray-600">
              Mỏ đá của chúng tôi được khai thác tại Chu Lai, nơi có trữ lượng đá ong dồi dào với 
              chất lượng được đánh giá cao trong ngành xây dựng.
            </p>
          </motion.div>

          {/* Ưu điểm sản phẩm */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900">Ưu điểm sản phẩm</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Độ bền cao, chịu được mọi điều kiện thời tiết</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Màu sắc tự nhiên, đẹp mắt</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Dễ dàng thi công, lắp đặt</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Giá thành hợp lý, cạnh tranh</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Cam kết */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Cam kết của chúng tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-primary-600 text-4xl font-bold mb-4">100%</div>
              <h3 className="text-lg font-semibold mb-2">Đá tự nhiên</h3>
              <p className="text-gray-600">Không pha trộn, không nhân tạo</p>
            </div>
            <div className="text-center">
              <div className="text-primary-600 text-4xl font-bold mb-4">10+</div>
              <h3 className="text-lg font-semibold mb-2">Năm kinh nghiệm</h3>
              <p className="text-gray-600">Uy tín trong ngành</p>
            </div>
            <div className="text-center">
              <div className="text-primary-600 text-4xl font-bold mb-4">24/7</div>
              <h3 className="text-lg font-semibold mb-2">Hỗ trợ khách hàng</h3>
              <p className="text-gray-600">Luôn sẵn sàng phục vụ</p>
            </div>
          </div>
        </motion.div>

        {/* Liên hệ */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-gray-600 mb-6">
            Để được tư vấn và báo giá chi tiết, vui lòng liên hệ:
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
          >
            Liên hệ ngay
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 