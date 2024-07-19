import React , {useContext} from 'react'
import './Orders.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Orders = (props) => {
  
  const {addToCart} = useContext(ShopContext)
  return (
    <div className='orders'>
      <Link to={`/products/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="" /></Link>
      <div className="items-prices">
        <p>{props.name}</p>
        <div className="item-new-prices">
          ${props.price}
        </div>
      </div>
        <div className="order-set">
          <div className="quantity">
            Quantity
          </div>
          <div className="addtocart">
            <button onClick={()=>{addToCart(props.id)}}>Add To Cart</button>
          </div>
        </div>


    </div>
  )
}

export default Orders
