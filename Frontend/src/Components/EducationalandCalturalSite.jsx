import React, { useState } from "react";
import "./EducationalandCalturalSite.css";
import ReactPlayer from "react-player";
import beach from '../Assets/industry_odisha.webm'


function EducationalAndCulturalSite() {
  const videoUrls = [beach]; // Ensure the correct path to your video file

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
          <b>Odisha</b> boasts a rich tapestry of educational and cultural sites that reflect its historical and artistic heritage. Educational institutions in the state include esteemed universities like Utkal University and Berhampur University, known for their academic excellence and contributions to research and learning. Cultural landmarks such as the Konark Sun Temple, a UNESCO World Heritage Site renowned for its intricate architecture and depiction of Odisha's cultural legacy, stand as testaments to the state's artistic prowess. Additionally, the Lingaraj Temple in Bhubaneswar, dedicated to Lord Shiva, exemplifies Odisha's religious and architectural heritage. These sites not only attract visitors from around the world but also serve as centers for cultural preservation and education, showcasing Odisha's deep-rooted traditions and artistic brilliance.
        </p>
        <p className="paragraph-natural">
          Odisha's educational and cultural landscape is further enriched by its vibrant festivals and traditional arts. Festivals like Rath Yatra in Puri, where massive chariots carry deities through the streets amidst fervent celebrations, exemplify the state's religious fervor and community spirit. The art forms of Odissi dance, known for its graceful movements and expressive storytelling, and Pattachitra, intricate paintings on cloth depicting mythological tales, highlight the state's artistic ingenuity and commitment to preserving cultural heritage. Moreover, institutions like the Odisha State Museum in Bhubaneswar offer insights into the state's history through its extensive collection of artifacts, manuscripts, and archaeological finds. These cultural and educational treasures not only contribute to Odisha's identity but also serve as platforms for fostering creativity, learning, and appreciation of its rich cultural tapestry.
        </p>
      </div>
    </>
  );
}

export default EducationalAndCulturalSite;
