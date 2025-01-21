import { LateriteSizesQuery } from '../../generated/graphql';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: LateriteSizesQuery['laterite_sizes'];
  loading: boolean;
}

const ProductList = ({ products, loading }: ProductListProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Sản phẩm của chúng tôi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <ProductCard
           key={product.id} 
           id={product.id.toString()}
           size={product.size}
           price={product.price}
           color={product.color || ""}
           weight={product.weight}
           loading={loading}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 