import React, { useState } from "react";
import "./Industry.css";
import ReactPlayer from "react-player";
import indust from "../Assets/industry_odisha.webm";

function Industry() {
  const videoUrls = [indust];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="natural-container">
        {/* If you need another video, uncomment and use the correct path */}
        {/* <video className="nv" src={`https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`} controls  width={1000}>nature</video> */}
      </div>
      <div
        className="natural-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ReactPlayer
          className="natural-video"
          url={videoUrls[currentVideoIndex]}
          playing={isHovered}
          controls
          width="100%"
          height="auto"
          onEnded={handleEnded}
        />
      </div>
      <div className="vdo-footer">
        <p className="paragraph-natural">
          <b>Odisha</b>, located along India's eastern coastline, boasts a collection of serene and picturesque beaches that offer a perfect blend of natural beauty, cultural richness, and tranquil atmospheres. From bustling tourist hubs to secluded stretches of golden sands, Odisha's beaches cater to a variety of preferences, making them ideal destinations for relaxation and exploration. Puri Beach stands out as one of Odisha's most iconic beaches, renowned for its vibrant ambiance and spiritual significance. It serves as a major pilgrimage site for Hindus, drawing devotees who come to take holy dips in the sea during festivals. The beach offers breathtaking views of the sunrise and sunset, casting a golden hue over the Bay of Bengal. Visitors can enjoy leisurely strolls along the promenade, indulge in local snacks from beachside vendors, or participate in beach activities like camel rides and boat cruises. Chandrabhaga Beach, located near the historic Konark Sun Temple, offers a quieter alternative to Puri Beach. Known for its tranquil environment and pristine sands, Chandrabhaga is ideal for those seeking solitude and natural beauty. The beach is steeped in mythology and is believed to have been a port in ancient times, adding to its cultural significance. Visitors can relax under the shade of casuarina trees, watch local fishermen at work, or simply soak in the peaceful ambiance. Gopalpur-on-Sea, once a bustling colonial-era port, is now famous for its laid-back charm and scenic vistas. This beach town exudes a nostalgic feel with its old-world charm, colonial architecture, and palm-fringed shores. Gopalpur Beach is perfect for leisurely walks along the promenade, sampling fresh seafood at beachside eateries, or indulging in water sports such as surfing and sailing.
        </p>

        <p className="paragraph-natural">
          Beyond these popular destinations, Odisha's coastline is dotted with hidden gems waiting to be discovered. Beaches like Chandipur and Astaranga offer pristine sands and clear waters, ideal for quiet retreats and nature walks. These beaches are known for their unique tidal variations, where the sea recedes up to five kilometers during low tide, revealing fascinating marine life and creating a surreal landscape. Odisha's beaches not only provide opportunities for relaxation and recreation but also showcase the state's vibrant cultural heritage. Coastal towns and villages host colorful festivals and traditional events throughout the year, offering visitors a chance to experience local customs, music, and dance. Whether exploring ancient temples nearby or simply unwinding amidst natural beauty, Odisha's beaches promise unforgettable experiences for travelers seeking a blend of tranquility and cultural immersion. In essence, Odisha's beaches are more than just sun and sand—they are gateways to a world of natural wonders, cultural richness, and serene landscapes. Whether seeking adventure or solitude, visitors to Odisha's coastal shores are sure to find a slice of paradise along its diverse and captivating coastline.
        </p>
      </div>
    </>
  );
}

export default Industry;
