import React, { Component } from 'react';

class Sing extends React.Component{
    constructor(props){
       super(props)
       this.state = {
           lyrics: [], lyricToShow: null
        }
   }

   componentDidMount() {
        // fill lyrics array with song string splitted on '\n'
        if(this.props.song){            
            const lyrics = this.props.song.split("\n");
            // every three second show one line of the lyrics, starting at i = 0 
            let i = 0;
            setInterval(() => {
                this.setState ({
                    lyricToShow: lyrics[i]
                })
                i++;
                }, 3000
            );
        }      
   } 

   render(){
       return(
        <div className="App">
        <header className="App-header">
            <div>
                <h4>{this.state.lyricToShow}</h4>
            </div>
        </header>
    </div>
       )
   }
}

export default Sing;