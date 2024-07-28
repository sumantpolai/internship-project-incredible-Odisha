import React from "react";
import "./Place.css";
// import gopalpurimg from '../Assets/gopalpur beach2.jpg'
// import gopalpurimg3 from '../Assets/gopalpur beach3.jpeg'
// import gopalpurimg1 from '../Assets/gopalpur beach1.jpeg'
// import gopalpurimg2 from '../Assets/gopalpur beach2.jpg'
// import gopalpurimg4 from '../Assets/gopalpur beach4.jpg'



export default function Gopalpur() {
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
        <h1 className="info1">Information About Gopalpur</h1>
        <h2 className="content1">
          Gopalpur is a coastal town and a Notified Area Council on the Bay of
          Bengal coast in Ganjam district in the southern part of Odisha, India.
          Today it is a commercial port, a famous sea beach and a tourist
          destination. Gopalpur is around 15 km from Berhampur. The
          reconstruction of an all weather port including new berths is under
          development.
        </h2>

        <h2 className="cultural1">
          <b> -: Post-Medieval era :-</b>
          <br />
          Under the ownership of the Soraine family the village grew in wealth,
          from an obscure little fishing village, Gopalpur became a prominent
          trading port. The family built the port, the lighthouse and the Albert
          Hotel and established both a local fishing industry and a trade route
          with Burma.
          <br />
          They also established the bylaw allowing any villagers who could build
          a house, with a perimeter and light a fire in the fireplace overnight,
          could then keep the land and house (on the backwaters) as their own.
        </h2>

        <h2 className="deities1">
         <b> -: Demographics :-</b>
          <br />
          As of 2001 India census,[2] Gopalpur had a population of 6663. Males
          constitute 50% of the population and females 50%. Gopalpur has an
          average literacy rate of 59%, lower than the national average of
          59.5%: male literacy is 59%, and female literacy is 42%. In Gopalpur,
          12% of the population is under 6 years of age.
        </h2>
      </div>

      <div className="visit1">
        <h1 className="last1">...Visit Gopalpur...</h1>
      </div>
    </div>
  );
}
