import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import TopBanner from './components/TopBanner/TopBanner';
import FoodCategory from './components/FoodCategory/FoodCategory';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <TopBanner></TopBanner>
      <FoodCategory></FoodCategory>
    </div>
  );
}

export default App;
