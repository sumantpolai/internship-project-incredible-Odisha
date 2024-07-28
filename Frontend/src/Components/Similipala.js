import React from "react";
import "./Place.css";
// import similipalimg1 from '../Assets/bhitarakanika.jpg';
// import similipalimg2 from '../Assets/elephant.jpg';
// import similipalimg3 from '../Assets/devkund.jpg';
// import similipalimg4 from '../Assets/simlipal-national-park.jpg';
// import similipalimg5 from '../Assets/Tiger.jpg';

export default function Similipala() {
  return (
    <div>
      <div className="Konarka">
        <div className="surya">
          <img className="image6" src={`https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`} alt="jagannath" />
          <img className="image7" src={`https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`} alt="puribeach" />
        </div>
        <img className="image8" src={`https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`} alt="temple" />
        <div className="surya1">
          <img
            className="image9"
            src={`https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`}
            alt="rathyatra"
          />
          <img className="image10" src={`https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg`} alt="abadha" />
        </div>
      </div>
      <div className="infokonarka">
        <h1 className="info1">Information About Similipala</h1>
        <h2 className="content1">
          Similipal, located in Odisha's Mayurbhanj district, is a prominent
          national park and tiger reserve, recognized as part of the UNESCO
          World Network of Biosphere Reserves since 2009. Covering an area of
          2,750 square kilometers, it boasts rich biodiversity, including a
          variety of flora and fauna. Key wildlife includes tigers, elephants,
          gaurs, and over 231 bird species. The park's landscape features lush
          forests, rolling meadows, and notable waterfalls like Barehipani (399
          meters) and Joranda (150 meters).
        </h2>

        <h2 className="cultural1">
          <b> -: Conservation Efforts :-</b>
          <br />
          Similipal is a critical area for wildlife conservation, especially for
          the Bengal tiger. Various initiatives have been undertaken to protect
          and preserve its rich biodiversity.
          <br />
          The best time to visit Similipal is from November to June when the
          weather is pleasant and suitable for exploring the park's diverse
          attractions.
        </h2>

        <h2 className="deities1">
          <b>-: Warerfall :-</b>
          <br />
          Barehipani Falls: Cascading from a height of 399 meters, it is one of
          the highest waterfalls in India. This two-tiered waterfall is a
          striking sight amidst the dense forest.
          <br />
          Joranda Falls: Dropping from a height of 150 meters, Joranda Falls
          offers a mesmerizing view with its single-drop cascade.
        </h2>
      </div>

      <div className="visit1">
        <h1 className="last1">...Visit Similipala...</h1>
      </div>
    </div>
  );
}
