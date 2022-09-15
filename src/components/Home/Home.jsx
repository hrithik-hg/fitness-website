import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'

const Home = () => {
    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className="home" id="home">
        <div className="blur blur-home"></div>
        <div className="left-h">
            <Header/>
            {/*best ad*/}
            <div className="best-ad">
                <motion.div
                initial={{left: mobile? "178px": "238px"}}
                whileInView={{left: '8px'}}
                transition= {{...transition, type: "tween"}}   /* for linear transition*/
                ></motion.div>
                <span>The best fitnes club in the city</span>
            </div>
            {/*Heading*/}
            <div className="main-text">
                <div>
                    <span className='stroke-text'>Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                    <span>In here we will help you to shape your body and build muscule </span>
                </div>
            </div>

            {/* figures */}
            <div className="figures">
                <div>
                    <span>
                        <NumberCounter start={100} end={150} delay='4' preFix="+"/>
                    </span>
                    <span>Expert Coaches</span>
                </div>
                <div>
                    <span>
                    <NumberCounter start={930} end={1000} delay='4' preFix="+"/>
                    </span>
                    <span>members joined</span>
                </div>
                <div>
                    <span>
                    <NumberCounter start={30} end={50} delay='4' preFix="+"/>
                    </span>
                    <span>fitnes program</span>
                </div>
            </div>

            {/* buttons */}

            <div className="h-buttons">
                <buttons className="btn">Get Started</buttons>
                <buttons className="btn">Learn More</buttons>
            </div>
            


        </div>
        <div className="right-h">
            <button className='btn'>Join Now</button>

            <motion.div 
            initial= {{right: '-1rem'}}
            whileInView={{right: '4rem'}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Heart Rate</span>
                <span>115 bpm</span>
            </motion.div>

            {/* Model Image */}
            <img src={hero_image} alt="" className="model-img" />
            <motion.img
            initial={{right: '11rem'}}
            whileInView={{right: '20rem'}}
            transition= {transition}
            src={hero_image_back} alt="" className="model-img-back" />
            {/* calories */}
            <motion.div 
            initial= {{right: '37rem'}}
            whileInView= {{right: '28rem'}}
            transition= {transition}
            className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Claories Burned</span>
                    <span>200 kcal</span>
                </div>
            </motion.div>
        </div>
    </div>

  )
}

export default Home
