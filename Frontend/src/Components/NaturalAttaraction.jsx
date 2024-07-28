import React, { useState } from "react";
import "./NaturalAttaraction.css";
import ReactPlayer from "react-player";
// import naturalattraction from'../Assets/Natural.mp4'

function NaturalAttraction() {
  // const videoUrls = ["wildlife.mp4"];

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
         <b>Odisha, located on India's eastern coast</b> , is a natural paradise
          boasting a diverse range of breathtaking landscapes that attract
          nature lovers from around the globe. The state's natural beauty is
          unparalleled, with its pristine beaches, lush forests, serene lakes,
          and majestic waterfalls. Each corner of Odisha offers a unique glimpse
          into the marvels of nature, making it a must-visit destination for
          anyone seeking tranquility and adventure. One of the highlights of
          Odisha's natural attractions is its coastline. The state is home to
          several stunning beaches, each with its own unique charm. Puri Beach,
          for instance, is famous for its golden sands and lively atmosphere. It
          is a haven for both pilgrims and tourists, offering breathtaking views
          of the sunrise and sunset. The beach is also home to the annual Puri
          Beach Festival, which showcases the region's rich cultural heritage
          through music, dance, and traditional crafts. Just a short drive away
          from Puri lies Chandrabhaga Beach, near the iconic Konark Sun Temple.
          Known for its serene environment and scenic beauty, Chandrabhaga is
          perfect for picnics, long walks, and enjoying the peaceful sound of
          the waves. In addition to its beaches, Odisha boasts some of the most
          beautiful lakes in India. The crown jewel among them is Chilika Lake,
          Asia's largest brackish water lagoon. Spread over an area of more than
          1,100 square kilometers, Chilika is a biodiversity hotspot and a haven
          for bird watchers. The lake is home to over 160 species of birds,
          including migratory species that travel from as far as Siberia and the
          Caspian Sea. During the winter months, Chilika transforms into a
          vibrant bird sanctuary, offering a mesmerizing sight for visitors. The
          lake also supports a rich aquatic life, including the endangered
          Irrawaddy dolphin, making it a significant ecological site. Odisha's
          natural beauty is not limited to its coastal areas and lakes; the
          state's interior is equally captivating. The verdant forests of Odisha
          are home to a rich array of flora and fauna. Simlipal National Park,
          one of India's largest national parks and a UNESCO World Network of
          Biosphere Reserve, is a prime example of this natural wealth. The
          park's dense forests, rolling hills, and expansive meadows provide a
          sanctuary for numerous species, including tigers, elephants, and a
          variety of birds. Simlipal is also home to some stunning waterfalls,
          such as Barehipani and Joranda, which add to the park's allure.
          Another natural wonder in Odisha is the Satkosia Gorge, where the
          Mahanadi River cuts through the Eastern Ghats, creating a dramatic
          landscape of steep cliffs and deep waters. The Satkosia Tiger Reserve,
          which encompasses the gorge, is a critical habitat for the tiger and
          other wildlife. The reserve offers exciting opportunities for
          eco-tourism, including river cruises, trekking, and wildlife safaris.
        </p>

        <p className="paragraph-natural">
          <b>Odisha's</b> commitment to preserving its natural heritage is evident in
          its numerous conservation efforts. The state's eco-tourism initiatives
          aim to promote sustainable tourism while protecting its rich
          biodiversity. Places like Bhitarkanika National Park, known for its
          mangrove forests and as a nesting ground for Olive Ridley turtles,
          highlight Odisha's dedication to environmental conservation.
          Bhitarkanika is also home to the largest population of saltwater
          crocodiles in India, making it an important site for wildlife
          enthusiasts. In conclusion, Odisha is a state of unparalleled natural
          beauty, offering a diverse range of landscapes that cater to every
          type of nature lover. From its sun-kissed beaches and tranquil lakes
          to its lush forests and majestic waterfalls, Odisha is a testament to
          the unspoiled natural splendor that India has to offer. The state's
          rich biodiversity and commitment to conservation make it a perfect
          destination for those seeking both adventure and tranquility. Whether
          you're a bird watcher, wildlife enthusiast, or simply someone looking
          to escape into nature, Odisha promises an unforgettable experience.
        </p>
      </div>
      
    </>
  );
}


export default NaturalAttraction;
