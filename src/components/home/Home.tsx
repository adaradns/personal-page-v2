import React from 'react';
import '../../css/Home.css';
import Card from '../card/Card';
import NavBar from '../navbar/NavBar';
import AboutMe from '../aboutme/AbuotMe';
import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Home() {
  return (
    <div className="container">
        <NavBar />
        <Card />
        <AboutMe />
    </div>
  );
}

export default Home;
