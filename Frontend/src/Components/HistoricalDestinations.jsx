import React from 'react';
import Panchalingeswar from './Panchalingeswar';
import Ravenshaw from './Ravenshaw ';
import Emamin from './Emami';
import Aradi from './Aradi '
import Baliyatra from './Baliyatra';
import Gandhamardan from './Gandhamardan';
function HistoricalDestinations() {
  return (
    <div className='hist'>
      <div>
      <h1>Historical Destinations</h1>
      <p>Details about historical destinations.</p>
    </div>
    <Panchalingeswar/>
    <Ravenshaw/>
    <Emamin/>
    <Aradi/>
    <Baliyatra/>
    <Gandhamardan/>
    </div>
  );
}

export default HistoricalDestinations;