import React, { useState } from "react";
import "./ReligiousSite.css";
import ReactPlayer from "react-player";
import religiouss from "../Assets/Religious.mp4";

function ReligiousSite() {
  const videoUrls = [religiouss];

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
          <b>Odisha, a state rich in cultural and historical heritage</b>, is home to an array of architectural marvels and heritage sites that offer a glimpse into its illustrious past. Known historically as Kalinga, Odisha boasts a legacy that spans thousands of years, marked by grand temples, ancient monuments, and traditional arts that have stood the test of time. The crown jewel of Odisha's heritage is the Sun Temple at Konark, a UNESCO World Heritage Site. This 13th-century architectural masterpiece, designed in the shape of a colossal chariot, is adorned with intricate carvings and is dedicated to the Sun God. The temple's grandeur and artistic brilliance make it one of the most iconic landmarks in India. Another significant heritage site is the Jagannath Temple in Puri, one of the Char Dham pilgrimage sites for Hindus. This 12th-century temple is renowned for its annual Rath Yatra (Chariot Festival), which draws millions of devotees from around the world. The temple complex, with its towering spires and sacred rituals, is a testament to Odisha's deep spiritual traditions. Bhubaneswar, the capital city of Odisha, is often referred to as the "Temple City of India" due to its numerous ancient temples. The Lingaraj Temple, dedicated to Lord Shiva, is one of the oldest and most revered temples in the city. Its stunning architecture and elaborate carvings are a fine example of Kalinga architectural style. Odisha is also famous for its Buddhist heritage, with several important sites linked to the life and teachings of Buddha. The Dhauli Giri, where Emperor Ashoka is believed to have embraced Buddhism after the Kalinga War, is home to the Dhauli Shanti Stupa, a serene white pagoda that symbolizes peace and non-violence. The state's rich cultural heritage is further exemplified by its traditional arts and crafts. Pattachitra paintings, known for their intricate details and mythological themes, and the exquisite silver filigree work of Cuttack, are renowned worldwide. Odisha's textile traditions, including the famous Sambalpuri and Ikat saris, showcase the region's exceptional weaving skills. The Udayagiri and Khandagiri Caves near Bhubaneswar are another remarkable heritage site. These ancient rock-cut caves, dating back to the 2nd century BCE, were once dwellings for Jain monks and are adorned with detailed carvings and inscriptions.
        </p>

        <p className="paragraph-natural">
          <b>In addition to its architectural wonders</b>, Odisha's vibrant festivals and cultural traditions add to its rich heritage. Festivals such as Durga Puja, Raja Parba, and the Puri Beach Festival highlight the state's lively cultural scene, bringing together people from diverse backgrounds to celebrate with music, dance, and traditional performances. Odisha's dedication to preserving its heritage is evident in the careful conservation of its historical sites and the promotion of its cultural practices. This commitment ensures that the state's rich legacy continues to inspire and attract visitors from around the globe. In essence, Odisha's heritage is a blend of spirituality, artistry, and history, offering a profound journey through India's cultural heartland. The state's magnificent temples, ancient monuments, traditional arts, and vibrant festivals provide a captivating experience that celebrates the timeless beauty and cultural richness of this remarkable region.
        </p>
      </div>
    </>
  );
}

export default ReligiousSite;
