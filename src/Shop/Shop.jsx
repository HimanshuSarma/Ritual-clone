import './Shop.css';
import '../Grids/MainGrid.css';
import React from 'react';

const Shop = () => {
    return (
        <section className='shop main-grid'>
            <div className='shop-content-grid'>
                <div className='shop-content-item-wrapper'>
                    <div className="shop-content-item">
                        <div>
                            <img src="./Shop1.jpg" alt="" />
                        </div>
                        <p>Shop Multivitamin</p>
                    </div>
                </div>
                <div className='shop-content-item-wrapper'>
                    <div className="shop-content-item">
                        <div>
                            <img src="./Shop2.jpg" alt="" />
                        </div>
                        <p>Shop Protein</p>
                    </div>
                </div>
                <div className='shop-content-item-wrapper'>
                    <div className="shop-content-item">
                        <div>
                            <img src="./Shop3.jpg" alt="" />
                        </div>
                        <p>Shop Pregnancy</p>
                    </div>
                </div>
                <div className='shop-content-item-wrapper'>
                    <div className="shop-content-item">
                        <div>
                            <img src="./Shop4.jpg" alt="" />
                        </div>
                        <p>Shop Bundles</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop
