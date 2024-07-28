import React, { useState } from "react";
import "./HillView.css";
import ReactPlayer from "react-player";
// import hill from '../Assets/Hill.mp4'

function HillView() {
  // const videoUrls = ["Beach.mp4"];

  // const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  // const [isHovered, setIsHovered] = useState(false);

  // const handleEnded = () => {
  //   setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  // };

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  return (
    <>
     <div className="Natural-container">
    <video className="nv" src={`https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`} controls  width={1000}>nature</video>
    </div>
      {/* <div
        className="Natural-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ReactPlayer
          className="Natural-video"
          url={videoUrls[currentVideoIndex]}
          playing={isHovered}
          controls
          width="100%"
          height="auto"
          onEnded={handleEnded}
        />
      </div> */}
      <div className="vdo-footer">
        <p className="paragraph-natural">
          <b> Odisha's</b>, hill views offer serene escapes and breathtaking landscapes that captivate visitors with their natural beauty and tranquility. The state is blessed with several picturesque hill stations, each offering a unique perspective of its surroundings. Places like Daringbadi, often called the "Kashmir of Odisha," are known for their lush greenery, coffee plantations, and pleasant climate, making them ideal for relaxation and rejuvenation. The Simlipal National Park, a UNESCO Biosphere Reserve nestled amidst the Similipal Hills, presents stunning vistas of dense forests, cascading waterfalls, and diverse wildlife, offering nature enthusiasts and adventurers alike a glimpse into Odisha's ecological diversity. Whether exploring the scenic vistas of the Eastern Ghats or unwinding amidst the cool mountain air, Odisha's hill views promise unforgettable experiences for those seeking solace in nature's embrace.
        </p>

        <p className="paragraph-natural">
        Odisha's hill views encompass a rich tapestry of cultural and historical significance intertwined with their natural allure. The Khandadhar Waterfall, cascading from the verdant hills of Sundergarh district, not only offers a majestic sight but also holds mythological importance, believed to be associated with stories from Hindu epics. The ancient hill forts of Khandagiri and Udayagiri near Bhubaneswar provide glimpses into Odisha's past, with their intricate rock-cut caves and inscriptions dating back to the 2nd century BCE. Additionally, the Chandragiri Tibetan settlement in Gajapati district offers a unique cultural experience, where visitors can explore Tibetan monasteries amidst panoramic views of the surrounding hills. These hill views not only enchant with their natural beauty but also serve as repositories of Odisha's diverse cultural heritage, inviting exploration and appreciation of the state's rich history and natural splendor.
        </p>
      </div>
    </>
  );
}



export default HillView;
