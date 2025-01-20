import { useState } from 'react';
import ProductList from '../components/products/ProductList';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'da-ong-xam', name: 'Đá ong xám' },
    { id: 'da-ong-vang', name: 'Đá ong vàng' },
    { id: 'da-ong-den', name: 'Đá ong đen' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-gray-500 mb-8">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="hover:text-gray-700">Trang chủ</a>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700">Sản phẩm</li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar filters */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Danh mục</h3>
            <div className="space-y-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div className="lg:col-span-3">
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products; 