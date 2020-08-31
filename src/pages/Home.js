import React from 'react';

// Components
import Banner from '../components/banner/Banner';
import About from '../components/about/About';
import Testimonials from '../components/testimonials/Testimonials';

const Home = () => (
  <React.Fragment>
    <Banner />
    <About />
    <Testimonials />
  </React.Fragment>
);
export default Home;
