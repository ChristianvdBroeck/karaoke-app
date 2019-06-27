import React, { Component } from 'react';
import ListOfSongs from './songs';

function MainPage(){
  //state variable declared called 'input'
  //const [input, setInput] = useState();

  const handleButtonSearch  = (event) => {
    //call api 
    const searchResults = ListOfSongs();

    //search through songs (filter through artists and tracknames)

    //prevent setting back to default
    event.preventDefault();
  }
    
    // Renders interface:
    return (
        <div className="App">
            <header className="App-header">
                <h1>
                    LET'S KARAOKE!
                </h1>
                <h4>
                    Search a song you would like to sing:
                </h4>
                <input className="input" type="text" /*onChange={e => setInput(e.target.value)}/*onChange={handleInputChange}*//>
                <button className="button" type="submit" value="Search" onClick={handleButtonSearch}>Search</button>
                {/* <ListOfSongs/> */}
            </header>
        </div>
    );
}

export default MainPage;