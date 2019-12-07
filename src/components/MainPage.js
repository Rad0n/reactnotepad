import React from 'react';
import './MainPageStyle.css';
import CardHolder from './CardHolder'
import Nav from './Nav'



function MainPage() {
  return (
    <div className="MainPage">
      
      <Nav />
      <CardHolder />
      
    </div>
  );
}

export default MainPage;