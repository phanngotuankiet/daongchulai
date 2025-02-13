import { useState } from 'react';
import ProductCard from './ProductCard';
import ProductDetailPopUp from '../../pages/popup/ProductDetailPopUp';

export interface IProduct {
  id: string;
  name: string;
  unit: string;
  price: number;
  image: string[];
  description: string;
  weight: number;
}

export interface ProductListProps {
  products: IProduct[] | undefined;
}

const ProductList = ({ products }: ProductListProps) => {
  const [isProductDetailPopUpOpenID, setIsProductDetailPopUpOpenID] = useState("");
  // if (loading) {
  //   return (
  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //         {[...Array(6)].map((_, index) => (
  //           <ProductCard
  //             key={`skeleton-${index}`}
  //             id=""
  //             size=""
  //             price={0}
  //             color=""
  //             weight={0}
  //             loading={true}
  //           />
  //         ))}
  //       </div>
  //     );
  // }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Sản phẩm của chúng tôi</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product: IProduct) => (
          <ProductCard
           key={product.id} 
           id={product.id.toString()}
           size={product.name}
           image={product.image}
           price={product.price}
           weight={product.weight}
           loading={false}
           setIsProductDetailPopUpOpenID={setIsProductDetailPopUpOpenID}
          />
        ))}

        {isProductDetailPopUpOpenID && (
          <ProductDetailPopUp
            id={isProductDetailPopUpOpenID}
            onClose={() => setIsProductDetailPopUpOpenID("")}
          />
        )}
      </div>
    </div>
  );
};

export default ProductList; 