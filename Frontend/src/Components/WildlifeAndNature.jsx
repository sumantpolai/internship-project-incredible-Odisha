import React, { useState } from "react";
import "./WildlifeAndNature.css";
import ReactPlayer from "react-player";
import wild from '../Assets/Tiger-slide-2.m4v'


function WildlifeAndNature() {
  const videoUrls = [wild];

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
          <b>Odisha</b>, nestled on India's eastern coast, is blessed with a
          diverse array of wildlife sanctuaries and natural reserves that
          showcase the region's rich biodiversity. From dense forests teeming
          with rare species to expansive wetlands that host migratory birds,
          Odisha's wildlife places offer a captivating glimpse into its natural
          heritage and conservation efforts. One of the most prominent wildlife
          destinations in Odisha is Simlipal National Park, a UNESCO Biosphere
          Reserve and one of India's largest national parks. Located in the
          Mayurbhanj district, Simlipal is renowned for its lush forests,
          rolling hills, and pristine waterfalls. It serves as a critical
          habitat for Bengal tigers, elephants, leopards, and numerous species
          of birds and butterflies. The park's diverse ecosystem and scenic
          beauty make it a popular destination for wildlife enthusiasts and
          nature lovers alike. Another notable wildlife sanctuary in Odisha is
          Bhitarkanika National Park, famous for its mangrove forests and rich
          avian diversity. Situated in the Kendrapara district, Bhitarkanika is
          home to the largest population of estuarine crocodiles in India. The
          park's wetlands and waterways also support numerous species of
          migratory birds, including the endangered Olive Ridley turtles that
          nest along its coastline during the breeding season. Chilika Lake,
          Asia's largest brackish water lagoon, is not only a biodiversity
          hotspot but also a significant wildlife sanctuary in Odisha. The lake
          supports a thriving ecosystem of fish, crustaceans, and birds,
          including migratory species that visit during the winter months.
          Birdwatchers flock to Chilika to witness flocks of flamingos, herons,
          and other waterfowl feeding in its shallow waters and mudflats.
          Satkosia Tiger Reserve, located along the Mahanadi River in central
          Odisha, is another key wildlife sanctuary known for its scenic beauty
          and diverse wildlife. The reserve is home to several species of
          mammals, including tigers, leopards, elephants, and rare gangetic
          dolphins that inhabit the river waters. Visitors to Satkosia can
          explore the reserve through boat safaris, nature trails, and camping
          experiences, offering a chance to observe wildlife in their natural
          habitat.
        </p>

        <p className="paragraph-natural">
          <b> Odisha</b>
           ,boasts numerous other wildlife reserves and forest areas that
          contribute to its rich natural heritage. These include Debrigarh
          Wildlife Sanctuary, Kuldiha Wildlife Sanctuary, and Nandankanan
          Zoological Park near Bhubaneswar, which is renowned for its
          conservation efforts and breeding programs for endangered species like
          the white tiger. Odisha's commitment to wildlife conservation is
          reflected in its efforts to preserve these habitats and protect
          endangered species. Through eco-tourism initiatives and community
          involvement, the state aims to promote sustainable practices while
          providing visitors with unforgettable experiences in the heart of
          nature. In essence, Odisha's wildlife places offer a blend of
          biodiversity, natural beauty, and conservation efforts that make them
          invaluable sanctuaries for both wildlife and humans alike. Whether
          exploring dense forests, cruising through mangrove-lined creeks, or
          observing migratory birds on vast wetlands, visitors to Odisha's
          wildlife sanctuaries are sure to be immersed in the wonders of the
          natural world.
        </p>
      </div>
    </>
  );
}


export default WildlifeAndNature;
