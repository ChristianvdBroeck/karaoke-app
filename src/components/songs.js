import React, { Component } from 'react';

// List of Songs component 
class ListOfSongs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        };
    }

    //before component will mount, call API
    componentWillMount() {
        //fetch data
        fetch('https://lyricsovh.docs.apiary.io')
        //return as JSON
        .then(results => {
            return results.json();
        })
        //map the data (not sure if needed yet)
        .then(data => {
            let songs = data.results.map((song) => {
                return(
                    <div key={song.results}>
                        
                    </div>
                )
            })
            //change state
            this.setState({songs: songs});
            console.log("state:", this.state.songs);
        })
    }

    render(){
        return(
            <div>
                {this.state.songs}
            </div>
        )
    }
}

export default ListOfSongs;

