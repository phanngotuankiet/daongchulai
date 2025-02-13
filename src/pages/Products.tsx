import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductList, { IProduct } from "../components/products/ProductList";
import kichThuoc from "../data/kich-thuoc.json";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [productsShown, setProductsShown] = useState(kichThuoc.categories);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category") ? searchParams.get("category") : null
  );

  // Get all products
  const allProducts = kichThuoc.categories.reduce(
    (acc: IProduct[], category) => {
      return [...acc, ...category.sizes];
    },
    []
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-gray-500 mb-8">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <a href="/" className="hover:text-gray-700">
                Trang chủ
              </a>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-700">Sản phẩm</li>
          </ol>
        </nav>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Sidebar filters */}
          <div className="hidden lg:block">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Danh mục
            </h3>

            <div className="space-y-4">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  searchParams.delete("category");
                  searchParams.delete("name");
                  setSearchParams(searchParams);
                }}
                className={`block w-full text-left px-4 py-2 rounded ${
                  selectedCategory === null
                    ? "text-amber-200 bg-amber-800"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Tất cả sản phẩm
              </button>
              {kichThuoc.categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    searchParams.set("category", category.id.toString());
                    searchParams.set("name", category.name || "");
                    setSearchParams(searchParams);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    selectedCategory === category.id
                      ? "text-amber-200 bg-amber-800"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div className="lg:col-span-3">
            <ProductList
              products={
                // lọc có điều kiện bằng id nếu giá trị của selectedCategory có tồn tại, nếu không thì lấy tất cả
                selectedCategory
                  ? kichThuoc.categories.find(
                      (category) => category.id === selectedCategory
                    )?.sizes
                  : allProducts
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
