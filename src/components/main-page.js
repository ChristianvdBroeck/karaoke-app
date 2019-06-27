import React, { Component } from 'react';
import Sing from './sing-page'


class MainPage extends React.Component{
   constructor(){
       super()
       this.state = {
           artistInput: null,
           songInput: null,
           song: null,
           error: null
       }
   }

   // Event Handler that handles artist input (artistInput = input value)
   setArtistInput=(text)=>{
       this.setState({artistInput:text});
   }

   // Event Handler that handles song input (artistInput = input value)
   setSongInput=(text)=>{
        this.setState({songInput:text});
    }

    getLyrics=()=>{
        fetch('https://api.lyrics.ovh/v1/'+ this.state.artistInput + '/' + this.state.songInput)
        
        // return as JSON
        .then(result => {
            return result.json();
        })

        // save lyrics in song variable
        .then(json => {
            // log the result (just for debugging)
            console.log(json)

            this.setState({song: json.lyrics})
        })  
    }
   

   render(){
        return (
            <div>
                {this.state.song && <Sing song={this.state.song}/>}
                <div className="App">
                    <header className="App-header">
                        <h1>
                            LET'S KARAOKE!
                        </h1>
                        <h4>
                            Search a song you would like to sing:
                        </h4>
                        <label>
                            Artist:
                            <input className="input" type="text" onChange={e => this.setArtistInput(e.target.value)}/>
                        </label>
                        <label>
                            Song:
                            <input className="input" type="text" onChange={e => this.setSongInput(e.target.value)}/>
                        </label>
                        <button className="button" type="submit" value="Search" onClick={()=>this.getLyrics()}>LET'S SING</button>
                    </header>
                </div>
            </div>
        );
    }
}

export default MainPage;


// I TRIED USING ONLY FUNCTIONAL COMPONENTS, UNFORTUNATELY IT DIDN'T WORK OUT

// import React, { Component } from 'react';
// import ListOfSongs from './songs';

// function MainPage(){
//   //state variable declared called 'input'
//   const [input, setInput] = useState();

//   const handleButtonSearch  = (event) => {
//     //call api 
//     const searchResults = ListOfSongs.filter();

//     //search through songs (filter through artists and tracknames)

//     //prevent setting back to default
//     event.preventDefault();
//   }
    
//   const inputValue = '';

//     // Renders interface:
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>
//                     LET'S KARAOKE!
//                 </h1>
//                 <h4>
//                     Search a song you would like to sing:
//                 </h4>
//                 <input className="input" type="text" onChange={e => setInput(e.target.value)}/*onChange={handleInputChange}*//>
//                 <button className="button" type="submit" value="Search" onClick={handleButtonSearch}>Search</button>
//                 {/* <ListOfSongs/> */}
//             </header>
//         </div>       
//     );
// }

// export default MainPage;