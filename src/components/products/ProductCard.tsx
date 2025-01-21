import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface ProductCardProps {
  id: string;
  size: string;
  price: number;
  color: string;
  weight: number;
  loading: boolean;
}

const ProductCard = ({
  id,
  size,
  price,
  color,
  weight,
  loading,
}: ProductCardProps) => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") || "";
  const vien_hoac_lat: "viên" | "lát" = name.includes("vien") ? "viên" : name.includes("lat") ? "lát" : "viên";
  
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <Skeleton 
          height={192} 
          enableAnimation={true}
          baseColor="#374151" // gray-700
        />
        <div className="p-4">
          <Skeleton height={24} width="60%" baseColor="#374151" />
          <div className="mt-2">
            <Skeleton height={20} width="80%" baseColor="#374151" />
          </div>
          <div className="mt-3 flex justify-between items-center">
            <Skeleton height={24} width={120} baseColor="#374151" />
            <Skeleton height={40} width={100} baseColor="#374151" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/products/${id}`}>
        <img
          src=""
          alt={size}
          className="w-full h-48 object-cover hover:opacity-75 transition-opacity"
        />
      </Link>
      <div className="p-4">
        <Link
          to={`/products/${id}`}
          className="text-lg font-semibold text-gray-800 hover:text-primary-600"
        >
          Kích thước {size} (cm)
        </Link>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">
          Màu {color} - {weight} kg/{vien_hoac_lat}
        </p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-bold text-primary-600">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(price)}
          </span>
          <Link
            to={`/products/${id}`}
            className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700"
          >
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
