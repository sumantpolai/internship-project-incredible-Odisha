import React from 'react'
import Card from './card'
import "./Explore.css"

function Explore() {
    let items = [1]
    return (
      <>
        <section className="Explore">
          <div className="Explore-cards">
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

export default Explore