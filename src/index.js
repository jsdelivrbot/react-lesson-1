import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAnXtrp3aATTq1AooLkon4-syjzB-tXswU';


// component(s) pruduce some html

const App = () => {
    return (
        <div>
            <SearchBar /> Go!!
        </div>
    );
}

//generate page DOM
 
ReactDOM.render(<App />,document.querySelector('.container'));