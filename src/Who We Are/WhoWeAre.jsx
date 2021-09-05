import './WhoWeAre.css';
import '../Grids/MainGrid.css';
import React from 'react';

const WhoWeAre = () => {
    return (
        <section className='whoweare main-grid'>
            <div className='whoweare-content'>

                <div className='whoweare-display-circle'>

                </div>

                <div className='whoweare-content-img-container'>
                    <img src="./Who we are.jpg" alt="" />
                </div>

                <div className='whoweare-content-desc-container'>
                    <h2 className='whoweare-desc-heading'>
                        We're not about pseudoscience and half-truths
                    </h2>

                    <p className='whoweare-desc-details'>
                        From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need.
                    </p>

                    <button>Who We Are</button>
                </div>
            </div>
        </section>
    )
}

export default WhoWeAre;