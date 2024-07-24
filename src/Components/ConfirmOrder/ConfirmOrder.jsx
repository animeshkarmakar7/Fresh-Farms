import React from 'react'
import './ConfirmOrder.css'
import { Link } from 'react-router-dom'
import star from '../Assets/star.png'
import tap from '../Assets/tap.png'

const ConfirmOrder = () => {
    return (
        <div className="orderfull">
        <div className='confirm-order'>
            <h1>Thank You! <img src={star} alt="" /></h1>
            <div className="descrip">
                <p>Your Order Has been Placed Successfully</p>
            <Link to='/' style={{textDecoration:'none'}}> <button>Continue Shopping <img src={tap} alt="" /></button></Link>   
            </div>
        </div>
        </div>
    )
}

export default ConfirmOrder
