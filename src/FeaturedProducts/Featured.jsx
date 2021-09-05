import './Featured.css';
import '../Grids/MainGrid.css';
import React from 'react';

const Featured = () => {
    return (
        <section className='featured main-grid'>
            <div className='featured-content'>
                <div className='featured-content-heading-btn'>
                    <h2>Featured Products</h2>
                    <button>Shop All</button>
                </div>
                <div className='featured-content-grid'>
                    <div className='featured-content-item-wrapper'>
                        <div className="featured-content-item">
                            <div className='featured-item-img-cont'>
                                <img src="./FeaturedProduct1.jpg" alt="" />
                            </div>

                            <div className='featured-item-desc-cont'>
                                <p className='featured-item-essential-tag'><em>Essential for Women</em></p>
                                <p className='featured-item-title'>Multivitamin 18+</p>
                                <p className='featured-item-details'>The clinical-backed multivitamin, reimagined for women 18+.</p>
                            </div>  
                        </div>
                    </div>
                    <div className='featured-content-item-wrapper'>
                        <div className="featured-content-item">
                            <div className='featured-item-img-cont'>
                                <img src="./FeaturedProduct2.jpg" alt="" />
                            </div>

                            <div className='featured-item-desc-cont'>
                                <p className='featured-item-essential-tag'><em>Essential for Women</em></p>
                                <p className='featured-item-title'>Prenatal Multivitamin</p>
                                <p className='featured-item-details'>The prenatal multivitamin for thinking, trying, and when it's time.</p>
                            </div>
                        </div>
                    </div>
                    <div className='featured-content-item-wrapper'>
                        <div className="featured-content-item">
                            <div className='featured-item-img-cont'>
                                <img src="./FeaturedProduct3.jpg" alt="" />
                            </div>
                            <div className='featured-item-desc-cont'>
                                <p className='featured-item-essential-tag'><em>Essential Protein</em></p>
                                <p className='featured-item-title'>Daily Shake 18+</p>
                                <p className='featured-item-details'>The reimagined plant-based protein for adults 18-49.</p>
                            </div>
                        </div>
                    </div>
                    <div className='featured-content-item-wrapper'>
                        <div className="featured-content-item">
                            <div className='featured-item-img-cont'>
                                <img src="./FeaturedProduct4.jpg" alt="" />
                            </div>

                            <div className='featured-item-desc-cont'>
                                <p className='featured-item-essential-tag'><em>Essential for Men</em></p>
                                <p className='featured-item-title'>Multivitamin 18+</p>
                                <p className='featured-item-details'>Formulated for men 18-49 to help fill nutrient gaps in their diet.*</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured
