import React, { useState } from "react";
import "./HistoricalSite.css";
import ReactPlayer from "react-player";
import histry from '../Assets/Historical.mp4'

function HistoricalSite() {
  const videoUrls = [histry];

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
     <div className="Natural-container">
    {/* <video className="nv" src={`https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`} controls  width={1000}>nature</video> */}
    </div>
      <div
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
      </div>
      <div className="vdo-footer">
        <p className="paragraph-natural">
          <b>Odisha, steeped in history that spans millennia</b>, is adorned
          with a wealth of historical sites that bear witness to its rich
          cultural heritage and significant contributions to India's history.
          From ancient caves and temples to monumental forts and archaeological
          wonders, each historical site in Odisha tells a compelling story of
          its past civilizations and enduring legacies. Among Odisha's most
          renowned historical sites is the Sun Temple at Konark, a UNESCO World
          Heritage Site and an architectural marvel of the 13th century. This
          temple, dedicated to the Sun God Surya, is intricately carved with
          detailed sculptures depicting mythological tales, celestial beings,
          and everyday life during that era. The temple's chariot-like
          structure, adorned with impressive stone wheels and towering
          sculptures, stands as a testament to the artistic and engineering
          prowess of ancient Odisha. The Jagannath Temple in Puri is another
          iconic historical landmark, revered as one of the holiest pilgrimage
          destinations in India. Built in the 12th century, this temple complex
          is dedicated to Lord Jagannath (a form of Lord Krishna), along with
          his siblings Balabhadra and Subhadra. The annual Rath Yatra (Chariot
          Festival) of Jagannath Temple attracts millions of devotees and
          tourists alike, underscoring its cultural and religious significance.
          Bhubaneswar, often referred to as the "City of Temples," is adorned
          with numerous ancient temples that reflect the architectural grandeur
          of Odisha's past. The Lingaraj Temple, dating back to the 11th
          century, is one of the largest and most elaborately carved temples
          dedicated to Lord Shiva. Its towering spire, intricately sculpted
          walls, and sacred rituals make it a must-visit for pilgrims and
          history enthusiasts alike. The Udayagiri and Khandagiri Caves near
          Bhubaneswar offer a fascinating glimpse into ancient Jain and Buddhist
          monastic life. Carved into the hillsides during the reign of King
          Kharavela in the 2nd century BCE, these rock-cut caves feature ornate
          carvings, inscriptions, and sculptural reliefs depicting religious
          motifs and daily activities of that era. These caves serve as a
          significant archaeological site and a testament to Odisha's cultural
          and religious diversity.
        </p>

        <p className="paragraph-natural">
          <b>Dhauli Giri</b>, located near Bhubaneswar, holds historical importance as
          the site where Emperor Ashoka is believed to have renounced violence
          and embraced Buddhism after the Kalinga War in the 3rd century BCE.
          The Dhauli Shanti Stupa, a white pagoda built to commemorate this
          event, stands as a symbol of peace and non-violence, reflecting
          Odisha's role in the spread of Buddhism across Asia. Beyond its
          monumental structures, Odisha's historical legacy is also preserved
          through its traditional arts and crafts, such as Pattachitra
          paintings, silver filigree work, and intricate textiles like
          Sambalpuri and Ikat sarees. These artistic traditions have been passed
          down through generations, showcasing Odisha's cultural continuity and
          artistic ingenuity. In essence, Odisha's historical places are a
          testament to its rich and diverse heritage, spanning ancient temples,
          monumental forts, rock-cut caves, and cultural artifacts that reflect
          the region's enduring legacy and contributions to India's historical
          tapestry. These sites offer a profound journey through time, inviting
          visitors to explore and appreciate the cultural richness and
          historical significance of this extraordinary state.
        </p>
      </div>
    </>
  );
}

export default HistoricalSite;
