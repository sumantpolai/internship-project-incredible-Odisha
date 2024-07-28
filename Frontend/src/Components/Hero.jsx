import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './Hero.css';
// import HeroWithSidebar from './HeroWithSidebar';
// import CardSlider from './Cardslider';
// import Slider from './Slider';
import tampv from '../Assets/Tampra Slide-1.m4v'
import tiger from '../Assets/Tiger-slide-2.m4v'
import slide3 from '../Assets/vdo-slide-3.m4v'
import slide4 from '../Assets/vdo-slide-4.mp4'


function Hero() {
  const videoUrls = [
  
    tampv,
    tiger,
    slide3,
    slide4,
    
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  return (
    <>
    <div className="hero-container">
      <ReactPlayer
      className="hero-video"
        url={videoUrls[currentVideoIndex]}
        playing
        controls
        width="100%"
        height="auto"
        onEnded={handleEnded}
      />
    </div>
    <div className='vdo-footer'>
        <p>Odisha, located on the eastern coast of India, is a state rich in culture, history, and natural beauty. Historically known as Kalinga, it is famous for the Kalinga War which led Emperor Ashoka to embrace Buddhism. Odisha is renowned for its architectural marvels like the Sun Temple at Konark, a UNESCO World Heritage Site, and the Jagannath Temple in Puri, one of the Char Dham pilgrimage sites. The state is also the birthplace of Odissi, one of India's classical dance forms, celebrated for its grace and intricate gestures. Additionally, Odisha is known for its unique handicrafts, including Pattachitra paintings, silver filigree work, and exquisite textiles such as Sambalpuri and Ikat saris. Its natural beauty is highlighted by stunning beaches like Puri and Chandrabhaga, as well as the lush greenery of Chilika Lake, Asia's largest brackish water lagoon.</p>
    </div>
   
    
   
   
    
    </>
  );
}

export default Hero;



