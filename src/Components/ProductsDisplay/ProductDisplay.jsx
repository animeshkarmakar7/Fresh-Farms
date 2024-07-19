import React, { useContext } from 'react'
import './productDisplay.css'
import reliable from '../Assets/reliability.png'
import wallet from '../Assets/wallet.png'
import rupee from '../Assets/rupee-indian.png'
import { ShopContext } from '../Context/ShopContext'

const ProductDisplay = (props) => {
const {products} = props
const {addToCart} = useContext(ShopContext)
  return (
    <>
    <div className="product-container">
      <ul className="banner">
<li>
  <img src={reliable} alt="" />
  <p>Best Quality</p></li>
<li>
<img src={wallet} alt="" />
 <p>Easy Returns</p> </li>
<li>
<img src={rupee} alt="" />
 <p>new deals everyday</p> </li>
      </ul>
    <div className='productdisplay'>
      <div className="display-left">
<img src={products.image} alt="" />
<button  onClick={()=>{addToCart(products.id)}}>ADD TO CART</button> 
      </div>
      <div className="display-right">
<h1>{products.name}</h1>
<div className="price">
    ${products.price}
</div>
      </div>
    </div>
    </div>
    </>
  )
}

export default ProductDisplay
