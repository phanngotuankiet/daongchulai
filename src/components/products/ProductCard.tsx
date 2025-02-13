import { useSearchParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface ProductCardProps {
  id: string;
  size: string;
  price: number;
  weight: number;
  image: string[];
  loading: boolean;
  setIsProductDetailPopUpOpenID: (id: string) => void;
}

const ProductCard = ({
  id,
  size,
  price: _price,
  weight,
  image,
  loading,
  setIsProductDetailPopUpOpenID,
}: ProductCardProps) => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "";
  const vien_hoac_lat: "viên" | "lát" = name.includes("vien")
    ? "viên"
    : name.includes("lat")
    ? "lát"
    : "viên";

  const handleClick = () => {
    setIsProductDetailPopUpOpenID(id);
  };

  // skeleton
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Skeleton
          height={192}
          enableAnimation={true}
          baseColor="#f3f4f6" // gray-100
        />
        <div className="p-4">
          <Skeleton height={24} width="60%" baseColor="#f3f4f6" />
          <div className="mt-2">
            <Skeleton height={20} width="80%" baseColor="#f3f4f6" />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <Skeleton height={24} width={120} baseColor="#f3f4f6" />
            <Skeleton height={40} width={100} baseColor="#f3f4f6" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        // to={`/products/${id}`}
        onClick={handleClick}
      >
        <img
          src={image[0]}
          alt={size}
          className="w-full h-48 object-cover hover:opacity-75 transition-opacity"
        />
      </div>
      <div className="p-4">
        <div
          // to={`/products/${id}`}
          onClick={handleClick}
          className="text-lg font-semibold text-gray-800 hover:text-primary-600"
        >
          Kích thước {size} (cm)
        </div>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          {weight} kg/{vien_hoac_lat}
        </p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-bold text-amber-800">
            {/* {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(price)} */}
          </span>
          {/* <Link
            to={`/products/${id}`}
            className="px-4 py-2 bg-amber-800 text-amber-200 rounded hover:bg-amber-900"
          >
            Xem chi tiết
          </Link> */}
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-amber-800 text-amber-200 rounded hover:bg-amber-900"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
