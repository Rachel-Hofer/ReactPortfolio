import React from 'react';

// Local
import './App.css';
import NavBar from '../components/NavBar';
import MainBackground from '../components/MainBackground';
// import AboutMe from '../components/AboutMe';
import CategoryOne from '../components/CategoryOne';
import CategoryTwo from '../components/CategoryTwo';

function App() {
  return (
    <div>
      <NavBar />
      <MainBackground />
      <CategoryOne />
      <CategoryTwo />
      {/* <AboutMe /> */}
    </div>
  );
}

export default App;
