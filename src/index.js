import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC52BBxOxEbd88ekLpznL5--Ni1q_bD2lw';

YTSearch({key: API_KEY, term: 'nba'}, function(data){
   console.log(data);
});

class App extends Component {
    render (){
      return (
         <div>
            <SearchBar />
        </div>);
     };
}

ReactDOM.render(<App />, document.querySelector('.container'));
