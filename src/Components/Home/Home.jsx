import React from 'react'
import truck from '../Assets/truck.png'
import support from '../Assets/headphones-with-mic.png'
import wallet from '../Assets/wallet.png'
import money from '../Assets/salary.png'
import './Home.css'
import ImageSlider from '../ImageSlider/ImageSlider'

const Home = () => {
    return (
        <>
            {/* <section className='container'>
                <div className="slider-wrapper">
                    <div className="slider">
                        <img id='slide-1' src="https://t3.ftcdn.net/jpg/02/05/56/54/360_F_205565499_waqtbwXp6KukIa7ilco7GfIErIjIK117.jpg" alt="vegetable green" />
                        <img id='slide-2' src="https://t3.ftcdn.net/jpg/02/05/56/54/360_F_205565499_waqtbwXp6KukIa7ilco7GfIErIjIK117.jpg" alt="vegetable green" />
                        <img id='slide-3' src="https://t3.ftcdn.net/jpg/02/05/56/54/360_F_205565499_waqtbwXp6KukIa7ilco7GfIErIjIK117.jpg" alt="vegetable green" />
                    </div>
                    <div className="slider-nav">
                        <a href="#slide-1"></a>
                        <a href="#slide-2"></a>
                        <a href="#slide-3"></a>
                    </div>
                </div>
            </section> */}
            <ImageSlider/>
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
