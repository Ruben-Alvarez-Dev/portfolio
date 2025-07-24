import React from 'react';
import './App.css';
import HeaderComponent from './components/layout/HeaderComponent/HeaderComponent';
import MainComponent from './components/layout/MainComponent/MainComponent';
import FooterComponent from './components/layout/FooterComponent/FooterComponent';

function App() {
  return (
    <>
      <div className="app">
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
