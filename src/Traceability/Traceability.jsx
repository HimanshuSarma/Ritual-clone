import './Traceability.css';
import '../Grids/MainGrid.css';
import React from 'react';

const Traceability = () => {
    return (
        <section className='traceability main-grid'>
            <div className='traceability-content'>
                <div className='traceability-content-desc'>
                    <h2 className='traceability-desc-heading'>
                        You deserve traceability                    
                    </h2>
                    <p className='traceability-desc-details'>
                        We share our sources, studies, and suppliers — daily essentials backed by the first visible supply chain of its kind.
                    </p>    

                    <div className='traceability-content-desc-btns'>
                        <button>Meet Our Ingredients</button>
                        <button>Our Clinical Study</button>
                    </div>
                </div>

                <div className='traceability-content-img'>
                    <img src="./Home-Map.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Traceability
