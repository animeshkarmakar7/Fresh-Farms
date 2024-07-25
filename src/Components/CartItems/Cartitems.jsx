import React, { useContext  } from 'react';
import './CartItems.css';
import { ShopContext , useCart } from '../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { Link } from 'react-router-dom';
import minus from '../Assets/minus.png'
import add from '../Assets/add.png'

const CartItems = () => {

    const { cartItems ,getTotalCartItems } = useCart();
   
    const {addToCart , getTotalCartAmount,  removeFromCart, all_products, vegetable, fruit } = useContext(ShopContext);

const handlecheckout = ()=>{
    if (getTotalCartItems() === 0) {
        alert('No items in the cart. Please add items to proceed.');
        
    } else {
        alert('Ready to checkout!');
        // Proceed with checkout logic here
    }
}
    
    const allProducts = [...all_products, ...vegetable, ...fruit];

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allProducts.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={product.image} alt="" className='carticon-product-icon' />
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                                <div className="cartitems-button">
                                <button onClick={()=>{removeFromCart(product.id)}} className='cartitems-quantity-left'><img src={minus} alt="" /></button>
                                <button className='cartitems-quantity'>{cartItems[product.id]}</button>
                                <button onClick={()=>{addToCart(product.id)}} className='cartitems-quantity-right'><img src={add} alt="" /></button>
                                </div>
                                <p>${product.price * cartItems[product.id]}</p>
                                <img src={remove_icon} onClick={() => { removeFromCart(product.id) }} alt="Remove" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1 style={{marginBottom:'-2rem'}}>Cart Totals</h1>
                    <div>
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
                    </div>
                   <Link to='/checkout' ><button  onClick={handlecheckout} disabled={getTotalCartItems()===0} >PROCEED TO CHECKOUT</button></Link> 
                </div>
            </div>
        </div>
    );
}

export default CartItems;
