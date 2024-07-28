import React from "react";
import "./Place.css";
// import panchalingeswarimg1 from '../Assets/panchalingeswar.jpeg'
// import panchalingeswarimg2 from '../Assets/panchalingeswar2.jpeg'
// import panchalingeswarimg from '../Assets/panchalingeswar1.jpg'
// import panchalingeswarimg3 from '../Assets/panchalingeswar3.jpg'
// import panchalingeswarimg4 from '../Assets/panchalingeswar4.jpeg'

export default function Panchalingeswar() {
  return (
    <div>
      <div className="Konarka">
        <div className="surya">
          <img className="image6" src={`https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`} alt="jagannath" />
          <img className="image7" src={`https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`} alt="puribeach" />
        </div>
        <img className="image8" src={`https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`} alt="temple" />
        <div className="surya1">
          <img className="image9" src={`https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`} alt="rathyatra" />
          <img className="image10" src={`https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`} alt="abadha" />
        </div>
      </div>
      <div className="infokonarka">
        <h1 className="info1">Information About Panchalingeswar</h1>
        <h2 className="content1">
          Panchalingeswar Temple is in Balasore district of Odisha, India. It
          named after the five Shivalinga that are enshrined inside. The temple
          is on top of a hillock near the Nilagiri hill
        </h2>

        <h2 className="cultural1">
          <b>-: More :-</b>
          <br />
          The Shivalingas are said to have been enshrined by Sita, the wife of
          Lord Rama during their exile. Another story holds that King Banasura
          worshiped the Swayambhu Lingas at this place given its beauty.
          <br />A perennial stream, which is the main attraction of the area,
          regularly washes the Shivalingas as it flows over them. To reach to
          the temple one has to lie flat on the rock parallel to the stream to
          touch and worship the lingas inside the water stream.
        </h2>

        <h2 className="deities1">
          <b> -: Transportation facility :-</b>
          <br />
          Panchalingeswar comes under Balasore district. Balasore is also the
          nearest city from Panchalingeswar. The nearest NAC to Panchalingeswar
          is Nilagiri. Regular bus services are there from Bhubaneswar to both
          Nilagiri and Balasore.
          <br />. A visitor can come to Balasore through Bhubaneswar Airport
          (200 km) or Kolkata Airport (250 km). There are regular transportation
          facilities between Panchalingeswar and Balasore.
        </h2>
      </div>

      <div className="visit1">
        <h1 className="last1">...Visit Panchalingeswar...</h1>
      </div>
    </div>
  );
}
