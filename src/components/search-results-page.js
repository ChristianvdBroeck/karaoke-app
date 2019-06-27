import React, { Component } from 'react';
import ListOfSongs from './songs';

function SearchResults() {
    return(
        // listed search results 
        // list of artist and title 
        // items should have onClick={handleOnclickblabla} which opens sing-page
        ListOfSongs.filter(/* WHERE SEARCH = ARTIST || TITLE*/)
    )
}

export default SearchResults;