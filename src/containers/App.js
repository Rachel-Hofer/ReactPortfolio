import React from 'react';

// Local
import './App.css';
import NavBar from '../components/NavBar';
import MainBackground from '../components/MainBackground';
// import AboutMe from '../components/AboutMe';
import CategoryOne from '../components/CategoryOne';
import CategoryTwo from '../components/CategoryTwo';
import CategoryThree from '../components/CategoryThree';
import CategoryFour from '../components/CategoryFour';

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <MainBackground />
      <CategoryOne />
      <CategoryTwo />
      <CategoryThree />
      <CategoryFour />
    </div>
  );
}

export default App;
