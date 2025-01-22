import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductList from "../components/products/ProductList";
import {
  LateriteSizesQuery,
  useLateriteSizesQuery,
  useLateriteTypesQuery,
} from "../generated/graphql";
import { LateriteType } from "../types/LateriteTypes";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [lateriteTypes, setLateriteTypes] = useState<LateriteType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") ? Number(searchParams.get("category")) : 0
  );

  const { data: lateriteTypesData } = useLateriteTypesQuery({
    fetchPolicy: "no-cache",
  });

  const { data: lateriteSizesData, loading: lateriteSizesLoading, refetch: refetchLateriteSizes } =
    useLateriteSizesQuery({
      variables: {
        where: {
          laterite_type_id: { _eq: Number(selectedCategory) },
        },
      },
      fetchPolicy: "no-cache",
    });

  useEffect(() => {
    if (lateriteTypesData) {
      // option "Tất cả" với kiểu LateriteType
      const allOption: LateriteType = {
        id: 0,
        type: "all",
        no_pitches_name: "tat-ca-san-pham",
        origin: null,
        hardness_level: null,
        description: "Xem tất cả sản phẩm",
        created_at: null,
        updated_at: null,
      };

      // Thêm option "Tất cả" vào đầu mảng
      setLateriteTypes([
        allOption,
        ...(lateriteTypesData?.laterite_types as LateriteType[]),
      ]);
    }
  }, [lateriteTypesData]);

  useEffect(() => {
    // searchParams.set("category", selectedCategory.toString());
    // searchParams.set("name", "");
    // setSearchParams(searchParams);

    // Gọi refetch để cập nhật data khi selectedCategory thay đổi
    if (selectedCategory !== 0) {
      refetchLateriteSizes({
        where: {
          laterite_type_id: { _eq: Number(selectedCategory) },
        },
      });
    } else {
      refetchLateriteSizes({
        where: {}
      });
    }
  }, [selectedCategory, refetchLateriteSizes]);

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
              {lateriteTypes.map((lateriteType) => (
                <button
                  key={lateriteType.id}
                  onClick={() => {
                    setSelectedCategory(lateriteType.id);
                    searchParams.set("category", lateriteType.id.toString());
                    searchParams.set(
                      "name",
                      lateriteType.no_pitches_name || ""
                    );
                    setSearchParams(searchParams);
                  }}
                  className={`block w-full text-left px-4 py-2 rounded ${
                    Number(selectedCategory) === lateriteType.id
                      ? "bg-primary-600 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {lateriteType.type === "all"
                    ? "Tất cả sản phẩm"
                    : lateriteType.type}
                </button>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div className="lg:col-span-3">
            <ProductList
              products={
                lateriteSizesData?.laterite_sizes as LateriteSizesQuery["laterite_sizes"]
              }
              loading={lateriteSizesLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
