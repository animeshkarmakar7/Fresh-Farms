import React from 'react'
import truck from '../Assets/truck.png'
import support from '../Assets/headphones-with-mic.png'
import wallet from '../Assets/wallet.png'
import money from '../Assets/salary.png'
import './Home.css'

const Home = () => {
    return (
        <>
            <div className='bg'>
                bb
            </div>
            <div className="help">
                <div className="icons">
                    <div className="border"> <img src={truck} alt="" />
                    </div>
                    <p>Quick Delivery</p>
                    <hr />
                </div>
                <div className="icons">
                    <div className="border">  <img src={support} alt="" />
                    </div>
                    <p>24/7 Support</p>
                    <hr />
                </div>
                <div className="icons">
                    <div className="border"> <img src={wallet} alt="" />
                    </div>
                    <p>Easy Transactions</p>
                    <hr />
                </div>
                <div className="icons">
                    <div className="border">  <img src={money} alt="" />
                    </div>
                    <p>Money Back Gurantee</p>
                </div>
            </div>
        </>
    )
}

export default Home
