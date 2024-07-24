import React from 'react';
import {  useParams } from 'react-router-dom';
import products from '../Components/Assets/products';
import ProductDisplay from '../Components/ProductsDisplay/ProductDisplay';

const SearchResult = () => {
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            {product && <ProductDisplay product={product} />}
        </div>
    );
};

export default SearchResult;
