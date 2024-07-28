import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./card1.css";
import { useEffect } from "react";

function Card1() {
  const [allcatplace, setAllcatplace] = useState([])
  const fetchCat = async()=>{
    const allcat = await fetch(`http://localhost:3004/allcategory`)
    const result = await allcat.json()
    console.log(result)
    setAllcatplace(result)
    // return result
  }

  useEffect(()=>{
    fetchCat()
  },[])

  return (
    <>
      {allcatplace.map((card, index) => (
        <div className="card1" key={index}>
          <div>
            <img className="image" src={card.img_item} alt={card.altText} />
            <h3>{card.categories_name}</h3>
            <Link to={`/dynamic/${card.categories_id}`}>see more</Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card1;
