import React, { useContext } from 'react';
import './productDisplay.css';
import reliable from '../Assets/reliability.png';
import wallet from '../Assets/wallet.png';
import rupee from '../Assets/rupee-indian.png';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);
  
  return (
    <>
      <div className="product-container">
        <ul className="banner">
          <li>
            <img src={reliable} alt="Reliable" />
            <p>Best Quality</p>
          </li>
          <li>
            <img src={wallet} alt="Wallet" />
            <p>Easy Returns</p>
          </li>
          <li>
            <img src={rupee} alt="Rupee" />
            <p>New Deals Everyday</p>
          </li>
        </ul>
        <div className='productdisplay'>
          <div className="display-left">
            <img src={product.image} alt={product.name} />
            <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
          </div>
          <div className="display-right">
            <h1>{product.name}</h1>
            <div className="price">
              ${product.price}
            </div>
            <div className="rate">
              <div className="reviews"></div>
              <div className="ratings"></div>
            </div>
            <div className="available-offers">
              <p><span><img src="" alt="Offer" /></span>Bank Offer 10% off up to ₹300 on Axis Bank Credit Card Txns, Min Txn Value: ₹2,500 <span>T&C</span></p>
              <p><span><img src="" alt="Offer" /></span>Bank Offer 10% off up to ₹300 on HDFC Bank Credit Card Txns, Min Txn Value: ₹2,500<span>T&C</span></p>
              <p><span><img src="" alt="Offer" /></span>Bank Offer 10% off up to ₹300 on IDFC FIRST Bank Credit Card Txns, Min Txn Value: ₹2,500<span>T&C</span></p>
            </div>
            <div className="services">
              <h1>Services</h1>
              <ul className='service-policy'>
                <li>2 Days Return Policy</li>
                <li>Schedule your delivery</li>
                <li>Cash on Delivery available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;

