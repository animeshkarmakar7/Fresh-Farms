import React, { useContext, useState } from 'react'
import './Payment.css'
import { ShopContext } from '../Components/Context/ShopContext'
import { Link } from 'react-router-dom'

const Payment = (product) => {
    const{getTotalCartAmount} = useContext(ShopContext)

    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (address === '' || city === '' || pincode === '') {
            alert('Please fill in all the fields.');
        } else {
         
            alert('form submitted')
            setAddress('');
            setCity('');
            setPincode('');
           
        }
    };


  return (
    <>
    <div className="payment">
    <div className='left'>
    <form onSubmit={handleSubmit} >
            <h1>Delivery Information</h1>
            
                <label>Enter Your Local address <span>*</span></label>
                <input 
                    id='address' 
                    type="text" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                    placeholder='Enter address'
                />
            
           
                <label>Enter City <span>*</span></label>
                <input 
                    id='city' 
                    type="text" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                    placeholder='Enter city'
                />
           
          
                <label>Enter Your Pincode <span>*</span></label>
                <input 
                    id='pincode' 
                    type="number" 
                    value={pincode} 
                    onChange={(e) => setPincode(e.target.value)} 
                    placeholder='Enter pincode'
                />          
            <div className="submit-button">
                <button id='form-submit' type='submit'  >Submit</button>
            </div>
        </form>
    </div>
    <div className="right">
        <h1>Payment Details</h1>
       <p>Payment will be By Cash On delivery Mode;Total ${getTotalCartAmount()}</p>
       <p>Other Modes will be added later.</p>
      <Link style={{textDecoration:'none'}} to='/confirmOrder'><button onClick={handleSubmit} id='form-submit'>Confirm</button></Link> 
    </div>
    </div>
    </>
  )
}

export default Payment
