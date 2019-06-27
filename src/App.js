import React from 'react';
import './App.css';
import { useState } from "react";
import MainPage from './components/main-page';
import Sing from './components/sing-page';
import ListOfSongs from './components/songs';
//import SearchResults from './components/search-results-page';

function App() {

  
  // Renders interface:
  return (
    <div className="App">
      <MainPage/>,
      <Sing/>
    </div>
  );
}

export default App;
