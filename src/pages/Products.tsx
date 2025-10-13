import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import ProductList, { IProduct } from "../components/products/ProductList";
import { GetProductsDocument, GetProductsByCategoryDocument, GetCategoriesDocument } from "../generated/graphql";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category") ? searchParams.get("category") : null
  );

  // Fetch categories
  const { data: categoriesData, loading: categoriesLoading } = useQuery(GetCategoriesDocument, {
    variables: { type: "product" }
  });

  // Fetch products based on selected category
  const { data: productsData, loading: productsLoading } = useQuery(
    selectedCategory ? GetProductsByCategoryDocument : GetProductsDocument,
    {
      variables: selectedCategory 
        ? { categoryId: parseInt(selectedCategory) }
        : { status: "active" }
    }
  );

  // Transform GraphQL data to match ProductList interface
  const transformedProducts: IProduct[] = productsData?.products?.map((product: any) => ({
    id: product.id.toString(),
    name: product.name,
    unit: "viên", // Default unit
    price: product.price,
    image: product.images?.length > 0 ? [product.images[0].image_url] : ["/placeholder-image.jpg"],
    description: product.description || "",
    weight: 0 // Default weight
  })) || [];

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
              {categoriesLoading ? (
                <div className="text-gray-500">Đang tải...</div>
              ) : (
                categoriesData?.categories?.map((category: any) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id.toString());
                      searchParams.set("category", category.id.toString());
                      searchParams.set("name", category.name || "");
                      setSearchParams(searchParams);
                    }}
                    className={`block w-full text-left px-4 py-2 rounded ${
                      selectedCategory === category.id.toString()
                        ? "text-amber-200 bg-amber-800"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {category.name}
                  </button>
                ))
              )}
            </div>
          </div>

          {/* Product grid */}
          <div className="lg:col-span-3">
            {productsLoading ? (
              <div className="text-center py-8">
                <div className="text-gray-500">Đang tải sản phẩm...</div>
              </div>
            ) : (
              <ProductList products={transformedProducts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
