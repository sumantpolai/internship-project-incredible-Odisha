import React from "react";
import "./Place.css";
// import aradiimg1 from '../Assets/aradi temple1.jpg';
// import aradiimg2 from '../Assets/aradi temple2.jpg';
// // import aradiimg3 from '../Assets/aradi temple.jpg';
// import aradiimg4 from '../Assets/aradi temple3.jpg';
// import aradiimg5 from '../Assets/aradi temple4.jpeg';

export default function Aradi() {
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
          <img className="image10" src={`aradiimg5`} alt="abadha" />
        </div>
      </div>
      <div className="infokonarka">
        <h1 className="info1">Information About Aradi </h1>
        <h2 className="content1">
          Akhandalamani Temple (pronounced [akʰɔɳɖɔlɔmɔɳi]) at Aradi village,
          Odisha, India, is dedicated to Lord Shiva (Baba Akhandalamani). Aradi
          is about 37 kilometres (23 mi) away from Bhadrak. The present
          fifty-foot cement and concrete temple structure replaced a wooden
          temple some time between 1830 and 1840 AD
        </h2>

        <h2 className="cultural1">
          <b>-: Location & transportation :-</b>
          <br />
          This famous temple, the abode of “Lord Siva” is located in the bank of
          river Baitarani, at Aradi,[1] 37 kilometres (23 mi) to the east of the
          district headquarters of Bhadrak via Asurali, Kothara and Dhusuri.
          <br />
          This place is also linked to Chandabali by boat through the river
          Baitarani. From Chandabali ferry ghat to Aradi it will take hardly two
          hours by boat. The temple is just 18 km away from the famous Kali
          mandir of Rameswarpur village.
        </h2>

        <h2 className="deities1">
          <b>-:Legend/HistorGeography :-</b>
          <br />
          There is no conclusive history available either regarding Baba
          Akhandalamani or the temple of the lord Siva. According to legend,
          around 350 years ago during the rule of Raja Sri Niladri Samara Singha
          Mohapatra, one early morning the Raja sent a peasant to cultivate his
          paddy field on the bank of the river Baitarani. While cultivating, the
          blade of his plough was broken by hitting with some hard material. The
          peasant was astonished and found a black glazed granite stone full of
          blood flowing toward the river Baitarani. The peasant ran to call King
          Niladrisamar Singhm and he hurriedly came to the spot, finding a flood
          of milk in place of blood and a huge black cobra hooding the stone.
          <br />
          That night the king had a dream regarding the arrival of the God
          Akhandalamani on that place. This news spread like wild fire in the
          locality. The next day King Niladri Samara Singha Mohapatra started
          worshiping the great god and immediately built a wooden temple on the
          spot. A large number of devotees from different villages started
          visiting and worshiping the great God. The king invited five Brahmins
          from a village named Naharagrama of Jajapur district to perform
          seva-puja (worshiping and taking care) of lord Akhandalamani.
        </h2>
      </div>

      <div className="visit1">
        <h1 className="last1">...Visit Aradi ...</h1>
      </div>
    </div>
  );
}
