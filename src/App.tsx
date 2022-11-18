import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useNavigate, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Loading from './components/common/Loading';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<Loading />} /> 
        <Route path="/home" element={<Home />} />
      </Routes>
      </ParallaxProvider>
    </div>
  );
}

export default App;
