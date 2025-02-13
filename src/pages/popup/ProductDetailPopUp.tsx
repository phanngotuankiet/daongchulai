import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import kichThuoc from "../../data/kich-thuoc.json";
import { IProduct } from "../../components/products/ProductList";
import { Link } from "react-router-dom";

interface ProductDetailPopUpProps {
  id: string;
  onClose: () => void;
}

const ProductDetailPopUp = ({ id, onClose }: ProductDetailPopUpProps) => {
  const allProducts = kichThuoc.categories.reduce(
    (acc: IProduct[], category) => {
      return [...acc, ...category.sizes];
    },
    []
  );

  const product: IProduct = allProducts.find(
    (product) => product.id === id
  ) as IProduct;
  //   {
  //     "id": "1",
  //     "name": "20 x 40 x 2",
  //     "unit": "cm",
  //     "price": 40000,
  //     "image": "https://via.placeholder.com/150"
  // },
  if (!product) {
    return null;
  }

  // Mảng ảnh mẫu - sau này có thể lấy từ API
  const productImages = product.image;

  return (
    // Overlay
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={1}
                className="rounded-lg overflow-hidden"
              >
                {productImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${product.name} - Ảnh ${index + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <p className="text-gray-600">{product.description}</p>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-800 font-medium">
                  ⚡️ Chúng tôi có thể cắt theo kích thước yêu cầu của khách
                  hàng
                </p>
                <p className="text-gray-600 mt-2">
                  Liên hệ để được tư vấn về kích thước và hình dáng phù hợp với
                  công trình của bạn
                </p>
              </div>

              <button className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors">
                <Link to="/contact" onClick={onClose}>
                  Liên hệ báo giá
                </Link>
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetailPopUp;
