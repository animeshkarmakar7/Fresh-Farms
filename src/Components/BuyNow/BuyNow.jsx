import React  from 'react';
import { useParams } from 'react-router-dom';
import products from '../Assets/products';
import { Link } from 'react-router-dom';

import './BuyNow.css'


const BuyNow = () => {
    
    const { id } = useParams();
    const product = products.find((item) => item.id === parseInt(id));

    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Product not found</h2>
                <Link to="/" className="back-link">Back to Shop</Link>
            </div>
        );
    }

    return (
        <div className="buy-now-container">
            <div className="product-details" key={product.id}>
                <img src={product.image} alt={product.name} className="product-image" />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p className="price">Price: ${product.price.toFixed(2)}</p>
            <Link to={`/buypay/${product.id}`}>  <button className="buy-button">Confirm Order</button></Link>  
                <Link style={{textDecoration:'none'}} to="/" className="back-link">Back to Shop</Link>
            </div>
        </div>
    );
}

export default BuyNow;

