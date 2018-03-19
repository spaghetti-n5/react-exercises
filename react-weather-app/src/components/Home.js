import React from 'react';

import LocationSearch from '../containers/LocationSearch/LocationSearch';

const Home = () => (
  <div>
    <h2 style={{textAlign:'center',paddingTop:'30px'}}>Enter a Location</h2>
    <LocationSearch />
  </div>
);

export default Home;
