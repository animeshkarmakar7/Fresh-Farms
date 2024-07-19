import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductsDisplay/ProductDisplay';
import { ShopContext } from '../Components/Context/ShopContext';

const ProductClick = () => {
  const { all_products, vegetable, fruit } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_products.find((e) => e.id === Number(productId)) ||
                  vegetable.find((e) => e.id === Number(productId)) ||
                  fruit.find((e) => e.id === Number(productId));

  return (
    <div>
      {product && <ProductDisplay product={product} />}
    </div>
  );
};

export default ProductClick;

