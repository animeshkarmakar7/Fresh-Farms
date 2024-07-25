import React, { useContext } from 'react'
import './Checkout.css'
import { ShopContext } from '../Context/ShopContext';
import all_products from '../Assets/All_products'
import vegetable from '../Assets/Vegetable';
import fruit from '../Assets/Fruits';
import { Link } from 'react-router-dom';


const Checkout = () => {
    const allProducts = [...all_products, ...vegetable, ...fruit];
    const { getTotalCartAmount, cartItems } = useContext(ShopContext);
    return (
        <div className='checkout'>
            <div className="checkout-left">
                
                <div className="check-details">
                    <h1>Order Summary</h1>
                    <div className="check-details-products">
                    {
                        allProducts.map((product) => {
                            if (cartItems[product.id] > 0) {
                                return (
                                    <div key={product.id} className="checkout-product">
                                        <img src={product.image} alt={product.name} />
                                        <p>{product.name}</p>
                                        <p>Quantity:{cartItems[product.id]}</p>
                                        <p>${product.price * cartItems[product.id]}</p>
                                    </div>
                                )
                            }
                            return null;
                        })
                    }
                </div>
                </div>
            </div>

            <div className="checkout-right">
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
                <div className="place-order">
                 <Link to='/payment'><button>Confirm Order</button></Link>   
                </div>
            </div>
        </div>
    )
}

export default Checkout
