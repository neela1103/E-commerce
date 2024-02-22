import React from 'react';
import Navcomp from '../Nav1/Navcomp'
import Sec1 from '../Section1/Sec1'
import Deal from '../Section2/Deal';
import NewArrival from '../Section3/NewArrival';
import Peaky from '../Section4/Peaky';
import Banner from '../Section5/Banner';
import Section8 from '../Section8/Section8';
import Footer from '../Footer/Footer';
import ImageScroller from '../Section6/ImageScroller';

function Home() {
  return (
    <div className="App">
      <Navcomp/>
      <Sec1/>
      <Deal />
      <NewArrival />
      <Peaky />
      <Banner/> 
      <ImageScroller />
      <Section8/>
      <Footer/>
    </div>
  );
}

export default Home;
