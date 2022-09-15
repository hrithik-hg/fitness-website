import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Reasons = () => {
    return (
        <div className="Reasons" id="reasons">
            <div className="left-r">
                <img className='img1' src={image1} alt="" />
                <img className='img2' src={image2} alt="" />
                <img className='img3' src={image3} alt="" />
                <img className='img4' src={image4} alt="" />
            </div>
            <div className="right-r">
                <span>Some Reasons</span>
                <div className="choose">
                    <span className='stroke-text'>Why</span>
                    <span> Choose Us?</span>
                </div>

                <div className='details-r'>
                    <div className="choose">
                        <img src={tick} alt=""></img>
                        <span>OVER 150+ EXPERT COACHES</span>
                    </div>
                    <div className="choose">
                        <img src={tick} alt="" />
                        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                    </div>
                    <div className="choose">
                        <img src={tick} alt="" />
                        <span>FOR NEW MEMBER ABSOLUTELY 1 FREE PROGRAM</span>
                    </div>
                    <div className="choose">
                        <img src={tick} alt="" />
                        <span>TRUSTWORTHY PARTNERS</span>
                    </div>
                </div>

                {/* <span id='partners'style={(
                    color: 'var(--gray)', 
                    fontWeight: 'normal'

                )}>OUR PARTNERS</span> */}

                <span id = "partners">OUR PARTNERS</span>

                <div className="partners">
                    <img src={adidas} alt="" />
                    <img src={nike} alt="" />
                    <img src={nb} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Reasons
