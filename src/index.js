'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

// downward data flow = most parent component should be the one doing data fetching

YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
})

const App = () => {

    return (
      <div>
        <SearchBar />
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById('container'))
