import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductCard = ({ id, name, price, image, description }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/products/${id}`}>
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover hover:opacity-75 transition-opacity"
        />
      </Link>
      <div className="p-4">
        <Link 
          to={`/products/${id}`}
          className="text-lg font-semibold text-gray-800 hover:text-primary-600"
        >
          {name}
        </Link>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-lg font-bold text-primary-600">
            {new Intl.NumberFormat('vi-VN', { 
              style: 'currency', 
              currency: 'VND' 
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