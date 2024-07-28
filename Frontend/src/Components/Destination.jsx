import React from 'react'
import Card from './card1'
import "./Destination.css"

function Destination() {
    let items = [1]
    return (
      <>
        <section className="Destination">
          <div className="Destination-cards">
          {
            items.map((item,index)=>{
              return(
                <Card key={index}/>
              )
            })
          }
          </div>
        </section>
      </>
    )
  }

export default Destination