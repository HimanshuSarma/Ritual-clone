import './Hero.css';
import React from 'react';

const Hero = () => {
    return (
        <main className='hero'>
            
            <div className='hero-content'>
                <div className='hero-background-img'>
                    <img src="./Ritual hero.jpg" alt="" />
                </div>

                <div className='hero-details'>
                    <h1 className='hero-heading hero-heading1'>
                        The future
                    </h1>
                    <h1 className='hero-heading hero-heading2'>
                        of health
                    </h1>

                    <h1 className='hero-heading hero-heading3'>
                        &#8212; <em>is clear.</em> 
                    </h1>

                    <button className='hero-cta-btn'>
                        Shop all
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Hero
