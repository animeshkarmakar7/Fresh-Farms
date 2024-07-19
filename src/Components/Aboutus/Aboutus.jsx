import React from 'react'
import './Aboutus.css'
import fresh from '../Assets/fresh.png'
import convinient from '../Assets/convinient.png'
import save from '../Assets/save-the-planet.png'
import satisfaction from '../Assets/satisfaction.png'
import quality from '../Assets/quality-control.png'
import season from '../Assets/season.png'

const Aboutus = () => {
    return (
        <div className='about'>
            <div className="about-title">
                <h1>About Us</h1>
                <p>Welcome to <span id='name'>Fresh Farms</span>, your number one source for fresh, high-quality vegetables delivered straight to your doorstep. We are dedicated to providing you with the very best of produce, with a focus on freshness, sustainability, and convenience.</p>
            </div>
            <div className="misson">
                <h1>Our Mission</h1>
                <div className="mission-list">
                    <div id='p-list'><div className='p-img'><img src={fresh} alt="" /></div><div className='p-title'>Freshness Guaranteed</div><div className='p-info'></div>We source our vegetables directly from local farms, ensuring they are harvested at their peak and delivered to you within hours, not days.</div>
                    <div id='p-list'><div className='p-img'><img src={save} alt="" /></div><div className='p-title'>Sustainability</div><div className='p-info'></div>We prioritize environmentally friendly practices, from our farming methods to our packaging. Our goal is to minimize our carbon footprint and promote a healthier planet.</div>
                    <div id='p-list'><div className='p-img'><img src={convinient} alt="" /></div><div className='p-title'>Convinience</div><div className='p-info'></div>We understand the demands of modern life, which is why we offer flexible delivery options and a seamless online shopping experience. You can order your vegetables from the comfort of your home and have them delivered at your convenience.</div>
                </div>
            </div>
            <div className="choose-us">
                <h1>Why Choose Us?</h1>
                <div className="mission-list">
                    <div id='p-list'><div className='p-img'><img src={quality} alt="" /></div><div className='p-title'>Quality You Can Trust</div><div className='p-info'></div>Our partnerships with trusted local farmers ensure that you receive only the best vegetables, free from harmful pesticides and chemicals.</div>
                    <div id='p-list'><div className='p-img'><img src={season} alt="" /></div><div className='p-title'>Variety and Seasonality</div><div className='p-info'></div>We offer a wide range of vegetables, including seasonal specialties that bring variety and freshness to your meals.</div>
                    <div style={{paddingTop:'1rem'}} id='p-list'><div className='p-img'><img src={satisfaction} alt="" /></div><div className='p-title'>Customer Satisfaction</div><div className='p-info'></div>Your satisfaction is our top priority. We are committed to providing exceptional customer service and are always here to help with any questions or concerns.</div>
                </div>
            </div>
            <div className="community">
                <h1>Community</h1>
                <p>We are more than just a vegetable delivery service; we are a community of health enthusiasts, food lovers, and sustainability advocates. Follow us on social media, sign up for our newsletter, and be part of our journey to make healthy eating easy and enjoyable.

                    Thank you for choosing Fresh Farms. We look forward to serving you and helping you live a healthier, more sustainable life.</p>
            </div>

        </div>
    )
}

export default Aboutus
