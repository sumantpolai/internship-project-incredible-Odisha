import React from "react";
import "./Place.css";
// import gandhamardnaimg from '../Assets/cloud.jpeg'
// import gandhamardnaimg7 from '../Assets/gandhamardan1.jpeg'
// import gandhamardnaimg8 from '../Assets/temple.webp'
// import gandhamardnaimghill from '../Assets/gandhamardanhill.jpeg'
// import jharana from '../Assets/jharana.jpeg'

export default function Gandhamardan() {
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
        <h1 className="info1">Information About Gandhamardan</h1>
        <h2 className="content1">
          Gandhamardan Hills or Gandhamardan Parbat (Odia: ଗନ୍ଧମାର୍ଦନ ପର୍ବତ) is
          a hill located in between Balangir and Bargarh district of Odisha,
          India.[1] This hill is well known for medicinal plants. There is a
          Bauxite reserve which is planned for exploration by the state
          government through a private venture.[2] Lord Parshuram is believed to
          reside here.
        </h2>

        <h2 className="cultural1">
          <b> -: History :-</b>
          <br />
          Sage Drona residing on this mountain belonging to the Mahabharat
          period used to deliver art of weaponry to the selected few pupils and
          he was famous for it across the country. The pupils educated and
          trained in the art of warfare were feared by many warriors of that
          time.
          <br />
          Many scholars believe that this mountain (and not Nagarjunakonda) was
          the site of the monastery of Nagarjuna, which Hiuen-Tsiang referred to
          as Po-lo-mo-lo-ki-li (restored to "Paramalagiri" by Julien).
          Parimalagiri is identified with Gandhagiri (Gandhamardan hill) because
          the hill resembles a great extent to the description left by
          Hiuen-Tsiang, and also presents traces of a huge monastic
          establishment of the past.
        </h2>

        <h2 className="deities1">
          <b> -: Bio-diversity :-</b>
          <br />
          The Gandhamardan mountain ranges are a rich source of diversity for
          medicinal plants. The Botanical Survey of India has reported the
          existence of 220 plant species of medicinal value. Local people,
          however, claim that there are more than 500 species of medicinal
          plants in this area. The flora of the buffer zone is most vulnerable.
          Many medicinal plant species such as Clerodendron indicum, Rauvolfia
          serpentina and Plumbago zeylanica, which were once available in
          plenty, have become scarce. A study recorded 2,700 angiosperms and 125
          species of important medicinal plants, out of a total of 220 species
          of medicinal and quasi-medicinal and economically vital plants
          <br />
          Such is its richness in medicinal plants that more than 100
          traditional healthcare practitioners live in and around the
          Gandhamardan hills. These practitioners provide medical facilities to
          about 50,000 tribal people. There are two Ayurvedic colleges and
          hospitals on both side of Gandhamardan — one in Bargarh district and
          the other in Balangir.
        </h2>
      </div>

      <div className="visit1">
        <h1 className="last1">...Visit Gandhamardan...</h1>
      </div>
    </div>
  );
}
