import React from 'react';
import '../../css/Home.css';
import Card from '../card/Card';
import NavBar from '../navbar/NavBar';
import AboutMe from '../aboutme/AbuotMe';
import Skill from '../skills/Skill';
import Info from '../info/Info';
import Footer from '../footer/Footer';
import ScrollButton from '../common/ScrollButton';

function Home() {
  return (

    <div className="container">
      <NavBar />
      <Card />
      <AboutMe />
      <Skill />
      <Info />
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default Home;
