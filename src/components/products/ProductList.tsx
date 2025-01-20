import ProductCard from './ProductCard';

// Dữ liệu mẫu - sau này sẽ được thay thế bằng dữ liệu từ API
const sampleProducts = [
  {
    id: '1',
    name: 'Đá ong xám',
    price: 150000,
    image: '/images/da-ong-xam.jpg',
    description: 'Đá ong xám tự nhiên, độ cứng cao, phù hợp làm tường rào, ốp tường.'
  },
  {
    id: '2',
    name: 'Đá ong vàng',
    price: 180000,
    image: '/images/da-ong-vang.jpg',
    description: 'Đá ong vàng cao cấp, màu sắc đẹp, thích hợp trang trí nội thất.'
  },
  // Thêm các sản phẩm mẫu khác
];

const ProductList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Sản phẩm của chúng tôi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList; 