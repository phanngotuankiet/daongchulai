import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-gray-500 mb-8" itemScope itemType="https://schema.org/BreadcrumbList">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <a href="/" className="hover:text-gray-700" itemProp="item"><span itemProp="name">Trang chủ</span></a>
              <meta itemProp="position" content="1" />
              <span className="mx-2">/</span>
            </li>
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <span itemProp="name">Giới thiệu</span>
              <meta itemProp="position" content="2" />
            </li>
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
            Chuyên cung cấp đá ong tự nhiên, góp phần tạo nên những công trình kiến trúc độc đáo, bền vững.
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
              Đá ong Chu Lai là đơn vị khai thác và sản xuất đá ong tự nhiên tại khu vực miền Trung. Với {new Date().getFullYear() - 2008} năm kinh nghiệm (từ 2008), chúng tôi cam kết mang đến 
              những sản phẩm đá ong chất lượng cao, đáp ứng mọi nhu cầu xây dựng và trang trí. Liên hệ Dũng ngay để được tư vấn: 0913 019 915.
            </p>
            {/* <p className="text-gray-600">
              Đá ong được khai thác tại Chu Lai, nơi có trữ lượng đá ong dồi dào với 
              chất lượng được đánh giá cao trong ngành xây dựng.
            </p> */}
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
              {/* <li className="flex items-start">
                <span className="text-primary-600 mr-2">•</span>
                <span>Giá thành hợp lý</span>
              </li> */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-primary-600 text-4xl font-bold mb-4">{new Date().getFullYear() - 2008} năm</div>
              <h3 className="text-lg font-semibold mb-2">Kinh nghiệm sản xuất</h3>
              <p className="text-gray-600">Tâm huyết từ năm 2008</p>
            </div>
            <div className="text-center">
              <div className="text-primary-600 text-4xl font-bold mb-4">Đổi mới</div>
              <h3 className="text-lg font-semibold mb-2">Đảm bảo chất lượng</h3>
              <p className="text-gray-600">Luôn cam kết mang lại giá trị xứng đáng</p>
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
            Để được tư vấn và báo giá chi tiết cho từng kích thước, công trình, vui lòng:
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