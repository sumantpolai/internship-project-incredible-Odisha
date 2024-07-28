import React from 'react';
import Aradi from './Aradi ';
import Gandhamardan from './Gandhamardan';
import Ravenshaw from './Ravenshaw ';
import Emamin from './Emami';
import Baliyatra from './Baliyatra';
import Chilika from './Chilika';

function ReligiousDestinations() {
  return (
    <div className='reli'>
      <div>
      <h1>Religious Destinations</h1>
      <p>Details about religious destinations.</p>
    </div>
    <Aradi/>
    <Gandhamardan/>
    <Ravenshaw/>
    <Emamin/>
    <Baliyatra/>
    <Chilika/>

    </div>
  );
}

export default ReligiousDestinations;