import React from 'react';
import './Essentials.css';
import {SiFlood} from 'react-icons/si';
import {GiWaterDrop} from 'react-icons/gi';
import {GiThreeLeaves} from 'react-icons/gi';
import {GiCheckedShield} from 'react-icons/gi';
import {MdDoNotDisturbAlt} from 'react-icons/md';


const Essentials = () => {

    return (
        <section className='essentials'>
            <div className='essentials-content'>
                <h2 className='essentials-content-heading'>
                    Daily essentials with good intentions &#8212; for living life or creating it.
                </h2>

                <div className='essentials-content-grid'>
                    <div className='essential'>
                        <div className="essential-svg-cont">
                            <SiFlood className='essential-svg'/>
                        </div>

                        <p>Traceable Ingredients</p>
                    </div>
                    <div className='essential'>
                        <div className="essential-svg-cont">
                            <MdDoNotDisturbAlt className='essential-svg'/>
                        </div>

                        <p>Non-GMO</p>
                    </div>
                    <div className='essential'>
                        <div className="essential-svg-cont">
                            <GiCheckedShield className='essential-svg'/>
                        </div>

                        <p>Third Party Tested</p>
                    </div>
                    <div className='essential'>
                        <div className="essential-svg-cont">
                            <GiThreeLeaves className='essential-svg'/>
                        </div>

                        <p>Vegan</p>
                    </div>
                    <div className='essential'>
                        <div className="essential-svg-cont">
                            <GiWaterDrop className='essential-svg'/>
                        </div>

                        <p>No Artificial Flavors or Synthetic Fillers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Essentials
