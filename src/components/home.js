import React from 'react'
import Slider from 'react-slick';
import img1 from '/home/credentek/Bank Demo/bankdemo/src/components/gold_loan_updated.jpg'
import img2 from '/home/credentek/Bank Demo/bankdemo/src/components/OnlineSavingAC.jpg'
import img3 from '/home/credentek/Bank Demo/bankdemo/src/components/home_loan.png'
import img4 from '/home/credentek/Bank Demo/bankdemo/src/components/digital-market.jpg'
import '/home/credentek/Bank Demo/bankdemo/src/components/home.css'

import { useNavigate } from 'react-router-dom';

const Home = () => {

    

    const navigate = useNavigate();
  
    const loginButton = () => {
      navigate('/login');
    };

    const settings = {
       
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, 
        
    };

    return(

        <div className="slider-container">
            
        <Slider {...settings}>
            <div>
                <img src={img1} alt="Slide 1" />
            </div>
            <div>
            <img src={img2} alt="Slide 2" />
            </div>
            <div>
            <img src={img3} alt="Slide 3" />
            </div>
            <div>
            <img src={img4} alt="Slide 4" />
                
            </div>
        </Slider>
<div className='btn'>
<button type='submit' className='btn1' onClick={loginButton}>Click here to Login</button>
</div>

<div>
    <div>

    </div>
    <div>

    </div>
    <div></div>
</div>
        
    </div>
    
    )}

    export default Home