import React, { useContext } from 'react';
import './Navbar.css'
import cart from '../Assets/add-cart.png'
import user from '../Assets/user.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';



const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext)
    return (

        <>
            <div className='navbar'>
                <div className="delivery">
                    At Your Doorsteps within mins
                </div>
                <div className="title">
                    <p>GREEN FARMS</p>
                </div>
                <div className="login">
                    <div className="login-img">
                        <Link to='/login'><img src={user} alt="" /></Link>
                    </div>
                    <div className="cart">
                        <Link to='/cart'><img src={cart} alt="" />
                            <div className="cart-count">{getTotalCartItems()}</div>
                            </Link>
                        <div className="cart-add">
                            Cart
                        </div>
                    </div>
                </div>
            </div>

            <ul className="menu">
                <li><Link style={{ textDecoration: 'none' }} to='/'>Home</Link></li>
                <li><Link style={{ textDecoration: 'none' }} to='/Products'>Products</Link></li>
                <input type="text" placeholder='search' />
                <li><Link style={{ textDecoration: 'none' }} to='/About'>About</Link></li>

            </ul>
        </>
    )
}

export default Navbar
