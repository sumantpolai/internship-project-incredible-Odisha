import React from 'react';
import Gopalpur from './Gopalpur'
import Chilika from './Chilika';
import Mahendragiri from './Mahendragiri';


function NaturalDestinations() {
  return (
    <div className='nat'>
      <div className='nat-'>
      <h1>Natural Destinations</h1>
      <p>Details about natural destinations.</p>
    </div>
   <Gopalpur/>
    <Chilika/>
    <Mahendragiri/>
    </div>
  );
}
export default NaturalDestinations;