import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const ImageSlider = () => {
    const images = [
        { image: "https://t3.ftcdn.net/jpg/02/05/56/54/360_F_205565499_waqtbwXp6KukIa7ilco7GfIErIjIK117.jpg" },
        { image: "https://media.geeksforgeeks.org/wp-content/uploads/20240104142701/orange.jpg" },
        { image: "https://via.placeholder.com/600x400" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="container">
            <div className="slider-wrapper">
                <div
                    className="slider"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <img key={index} src={img.image} alt={`Slide ${index + 1}`} />
                    ))}
                </div>
                <div className="slider-nav">
                    {images.map((_, index) => (
                        <a
                            key={index}
                            href="/"
                            className={currentIndex === index ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                goToSlide(index);
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
