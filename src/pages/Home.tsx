import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import heroBg from '../assets/xecontainer.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[600px]">
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Đá ong background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Đá ong tự nhiên Chu Lai - Chuyên gia đá ong xây dựng
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Chất lượng tạo nên thương hiệu - Uy tín làm nên giá trị
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  to="/products"
                  className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Xem sản phẩm
                </Link>
                <Link
                  to="/contact"
                  className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Liên hệ ngay
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Đá ong xây dựng nổi bật</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá các sản phẩm đá ong chất lượng cao của chúng tôi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
                  >
                    Xem chi tiết
                    <ChevronRightIcon className="w-5 h-5 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại sao chọn chúng tôi?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Với kinh nghiệm nhiều năm trong ngành, chúng tôi tự hào mang đến những sản phẩm đá ong chất lượng với sự phục vụ tận tâm
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Bạn cần tư vấn về sản phẩm?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng hỗ trợ bạn
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

// Sample data
const featuredProducts = [
  {
    id: '1',
    name: 'Đá ong cắt lát',
    description: 'Đá ong cắt xẻ lát dày 2cm, phù hợp ốp tường, trang trí.',
    image: 'https://raw.githubusercontent.com/phanngotuankiet/daongchulai/main/src/assets/daongcatlat.jpg'
  },
  {
    id: '2',
    name: 'Đá ong xẻ nguyên khối',
    description: 'Đá ong nguyên khối với kích cỡ có sẵn hoặc cắt theo yêu cầu, phù hợp cho xây tường.',
    image: 'https://raw.githubusercontent.com/phanngotuankiet/daongchulai/main/src/assets/daongcatvien.jpg'
  },
  {
    id: '3',
    name: 'Đá ong xẻ theo kích thước yêu cầu',
    description: 'Đá xẻ theo yêu cầu, dùng để làm các công trình đặc biệt như giếng nước,...',
    image: 'https://raw.githubusercontent.com/phanngotuankiet/daongchulai/main/src/assets/gieng.jpg'
  }
];

const features = [
  {
    title: 'Đá ong tự nhiên',
    description: 'Chất lượng cao, đẹp mắt',
    icon: (props: any) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  },
  {
    title: 'Giá cả hợp lý',
    description: 'Giá cạnh tranh trên thị trường',
    icon: (props: any) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Tư vấn tận tình',
    description: 'Luôn sẵn sàng hỗ trợ bạn hết mình',
    icon: (props: any) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Giao hàng nhanh',
    description: 'Vận chuyển toàn quốc, đảm bảo tiến độ',
    icon: (props: any) => (
      <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default Home; 