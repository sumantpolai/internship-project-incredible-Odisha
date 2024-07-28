import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Destination from './Components/Destination';
import Explore from './Components/Explore';
import Footer from './Components/Footer';
import Slider from './Components/Slider';
import Dynamic from './Components/Dynamic';
import ReligiousDestinations from './Components/ReligiousDestinations';
import HistoricalDestinations from './Components/HistoricalDestinations';
import AllDestinations from './Components/AllDestinations';
import CardSlider from './Components/Cardslider';
import NaturalDestinations from './Components/NaturalDestinations';
import NaturalAttraction from './Components/NaturalAttaraction';
import ReligiousSite from './Components/ReligiousSite';
import HistoricalSite from './Components/HistoricalSite';
import WildlifeAndNature from './Components/WildlifeAndNature';
import Beach from './Components/Beach';
import EducationalandCalturalSite from './Components/EducationalandCalturalSite';
import HillView from './Components/HillView';
import Industry from './Components/Industry';
import HeroWithSidebar from './Components/HeroWithSidebar';
import PlacesByDistrict from './Components/PlacesByDistrict';
import SearchResults from './Components/SearchResults';

function App() {
  const [districtId, setDistrictId] = useState('');

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/destination/natural-destinations" element={<NaturalDestinations />} />
        <Route path="/destination/religious-destinations" element={<ReligiousDestinations />} />
        <Route path="/destination/historical-destinations" element={<HistoricalDestinations />} />
        <Route path="/destination/all-destinations" element={<AllDestinations />} />
        <Route path="/explore/natural-attraction" element={<NaturalAttraction />} />
        <Route path="/explore/Religious-site" element={<ReligiousSite />} />
        <Route path="/explore/Historical-Site" element={<HistoricalSite />} />
        <Route path="/explore/Wildlife-And-Nature" element={<WildlifeAndNature />} />
        <Route path="/explore/Beach" element={<Beach />} />
        <Route path="/explore/Educational-and-Caltural-Site" element={<EducationalandCalturalSite />} />
        <Route path="/explore/Hill-View" element={<HillView />} />
        <Route path="/explore/Industry" element={<Industry />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path='/dynamic/:id' element={<Dynamic/>} />
      </Routes>

      {/* <HeroWithSidebar /> */}
              
      <div className="App">
        <h1>Must Visit Destinations</h1>
        <h4 className='his'>From historical cities to natural splendours, come see the best of Odisha</h4>
       
        <CardSlider />
        {/* <div className="view-all">
          <input 
            type="text" 
            value={districtId} 
            onChange={(e) => setDistrictId(e.target.value)} 
            placeholder="Enter district ID" 
          />
          <button onClick={() => {}}>View All</button>
        </div>
        <PlacesByDistrict districtId={districtId} /> */}
      </div>

      <div className='App'>
        <h1>Celebrate With Us</h1>
        <h4 className='his'>As you travel through the country, be a part of our festivals and feasts</h4>
        
        <Slider />
      </div>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
