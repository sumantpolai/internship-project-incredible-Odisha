import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

function Card() {
  const cardsData = [
    { imgSrc: "https://img.lovepik.com/photo/48013/0627.jpg_wh860.jpg", altText: "Natural Attraction", title: "Natural Attraction", linkHref: "/explore/natural-attraction" },
    { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3tTrvnlZaatgaXR0BU27ufQtuNas8xctxg&s", altText: "Religious site", title: "Religious site", linkHref: "/explore/Religious-site" },
    { imgSrc: "https://vajiram-prod.s3.ap-south-1.amazonaws.com/Konark_Sun_Temple_13e71cbb6e.jpg", altText: "Historical Site", title: "Historical Site", linkHref: "/explore/Historical-Site" },
    { imgSrc: "https://www.shutterstock.com/image-photo/indian-tiger-male-first-rain-260nw-667856146.jpg", altText: "Wildlife and Nature", title: "Wildlife and Nature", linkHref: "/explore/Wildlife-And-Nature" },
    { imgSrc: "https://www.trawell.in/admin/images/upload/403298814Konark_Chandrabhaga_Beach.jpg", altText: "Beach", title: "Beach", linkHref: "/explore/Beach" },
    { imgSrc: "https://wp-assets.rooftopapp.com/wp-content/uploads/2023/10/KrishnaLila-wiki-1-1024x701.jpg.webp", altText: "Educational and Caltural Site", title: "Educational and Caltural Site", linkHref: "/explore/Educational-and-Caltural-Site" },
    { imgSrc: "https://media.istockphoto.com/id/1277015766/photo/sporty-man-on-the-mountain-peak-looking-on-mountain-valley-with-sunbeams-at-colorful-sunset.webp?b=1&s=170667a&w=0&k=20&c=KL1FAqDRJ3_SHLgiX-dSpmisd3GXwdyR84cmrnHbxjg=", altText: "Hill View", title: "Hill View", linkHref: "/explore/Hill-View" },
    { imgSrc: "https://etimg.etb2bimg.com/photo/88516764.cms", altText: "Industry", title: "Industry", linkHref: "/explore/Industry" },
  ];

  return (
    <>
  
      {cardsData.map((card, index) => (
    
        <div className="card" key={index}>
            <div>
          <img className="image" src={ card.imgSrc} alt={card.altText} />
          <h3>{card.title}</h3>
          <Link to={card.linkHref}>see more</Link>
        </div> 
        </div>  
       
      ))}
           
    </>
  );
}

export default Card;