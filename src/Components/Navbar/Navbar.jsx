import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import cart from '../Assets/add-cart.png';
import user from '../Assets/user.png';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import searchIcon from '../Assets/loupe.png';
import products from '../Assets/products';

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [menu , setmenu] = useState('Home')
    const [filteredItems, setFilteredItems] = useState([]);
    const { getTotalCartItems } = useContext(ShopContext);
    const navigate = useNavigate();

    useEffect(() => {
        const results = products.filter((val) => {
            if (searchTerm === '') {
                return false;
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
            }
            return false;
        });
        setFilteredItems(results);
    }, [searchTerm]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSelect = (item) => {
        setSearchTerm('');
        setFilteredItems([]);
        navigate(`/product/${item.id}`);
    };

    return (
        <>
            <div className='navbar'>
                <div className="delivery">
                    At Your Doorsteps within mins
                </div>
                <div className="title">
                    <p>FRESH-FARMS</p>
                </div>
                <div className="login">
                    <div className="login-img">
                        <Link to='/login'><img src={user} alt="User" /></Link>
                    </div>
                    <div className="cart">
                        <div><Link to='/cart'><img src={cart} alt="Cart" /></Link></div>
                        <div className="cart-count">{getTotalCartItems()}</div>
                        <div className="cart-add">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to='/cart'>CART</Link>
                        </div>
                    </div>
                </div>
            </div>

            <ul className="menu">
                <li onClick={()=>{setmenu('Home')}} ><Link className='menu-li' style={{ textDecoration: 'none' }} to='/'>Home{menu==='Home'?<hr/>:<></>}</Link></li>
                <li onClick={()=>{setmenu('Products')}}><Link className='menu-li' style={{ textDecoration: 'none' }} to='/Products'>Products{menu==='Products'?<hr/>:<></>}</Link></li>
                <div className="search">
                    <input
                        type="text"
                        placeholder='Search...'
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <div className='icon'>
                        <img src={searchIcon} alt="Search" onClick={() => setSearchTerm('')} />
                    </div>
                    {searchTerm && filteredItems.length > 0 && (
                        <ul className="dropdown">
                            {filteredItems.map((item) => (
                                <li key={item.id} onClick={() => handleSearchSelect(item)}>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <li><Link onClick={()=>{setmenu('About')}} className='menu-li' style={{ textDecoration: 'none' }} to='/About'>About{menu==='About'?<hr/>:<></>}</Link></li>
            </ul>
        </>
    );
};

export default Navbar;
