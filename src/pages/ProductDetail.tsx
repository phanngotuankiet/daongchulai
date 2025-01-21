import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Cập nhật interface cho size
interface ProductSize {
  id: number;
  dimensions: string;
  unit: string;
  image: string;
  price: number;
}

// Dữ liệu mẫu - sau này sẽ được thay thế bằng dữ liệu từ API
const products = {
  '1': {
    id: '1',
    name: 'Đá ong xám',
    description: 'Đá ong xám tự nhiên, độ cứng cao, phù hợp làm tường rào, ốp tường.',
    sizes: [
      { 
        id: 1, 
        dimensions: '15 x 30', 
        unit: 'cm',
        image: 'https://gachbonggio.net/wp-content/uploads/2024/03/da-ong-vang-toi-uu-0.jpg',
        price: 150000
      },
      { 
        id: 2, 
        dimensions: '20 x 40', 
        unit: 'cm',
        image: 'https://nld.mediacdn.vn/2020/11/21/hinh-chot-theo-bai-16059680506021632521042.jpg',
        price: 180000
      },
      { 
        id: 3, 
        dimensions: '10 x 20', 
        unit: 'cm',
        image: 'https://damynghethienduc.com/wp-content/uploads/2021/05/da-ong-vang-4.jpg',
        price: 120000
      },
    ]
  },
  '2': {
    id: '2',
    name: 'Đá ong vàng',
    description: 'Đá ong vàng cao cấp, màu sắc đẹp, thích hợp trang trí nội thất.',
    sizes: [
        { 
          id: 1, 
          dimensions: '15 x 30', 
          unit: 'cm',
          image: 'https://gachbonggio.net/wp-content/uploads/2024/03/da-ong-vang-toi-uu-0.jpg',
          price: 150000
        },
        { 
          id: 2, 
          dimensions: '20 x 40', 
          unit: 'cm',
          image: 'https://nld.mediacdn.vn/2020/11/21/hinh-chot-theo-bai-16059680506021632521042.jpg',
          price: 180000
        },
        { 
          id: 3, 
          dimensions: '10 x 20', 
          unit: 'cm',
          image: 'https://damynghethienduc.com/wp-content/uploads/2021/05/da-ong-vang-4.jpg',
          price: 120000
        },
      ]
  },
  // Thêm các sản phẩm khác...
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[id as keyof typeof products];
  const [selectedSize, setSelectedSize] = useState<ProductSize>(product.sizes[0]);

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

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
            <li className="flex items-center">
              <a href="/products" className="hover:text-gray-700">Sản phẩm</a>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            key={selectedSize.image}
          >
            <img
              src={selectedSize.image}
              alt={`${product.name} - ${selectedSize.dimensions}${selectedSize.unit}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
            
            {/* <div className="border-t border-b border-gray-200 py-6">
              <h2 className="text-xl font-semibold mb-4">Kích thước tiêu chuẩn:</h2>
              <div className="space-y-3">
                {product.sizes.map((size) => (
                  <div 
                    key={size.id}
                    onClick={() => setSelectedSize(size)}
                    className={`flex items-center justify-between bg-white p-4 rounded-lg shadow-sm cursor-pointer transition-colors
                      ${selectedSize.id === size.id ? 'ring-2 ring-primary-600' : 'hover:bg-gray-50'}`}
                  >
                    <span className="text-gray-800">{size.dimensions} {size.unit}</span>
                    <span className="text-primary-600 font-semibold">
                      {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND'
                      }).format(size.price)}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-gray-800 font-medium">
                ⚡️ Chúng tôi có thể cắt theo kích thước yêu cầu của khách hàng
              </p>
              <p className="text-gray-600 mt-2">
                Liên hệ để được tư vấn về kích thước và hình dáng phù hợp với công trình của bạn
              </p>
            </div>

            <button className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors">
              Liên hệ báo giá
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 