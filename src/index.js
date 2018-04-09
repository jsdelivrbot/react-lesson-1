import React ,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAnXtrp3aATTq1AooLkon4-syjzB-tXswU';


imp

// component(s) pruduce some html

class App extends Component {

    constructor(props){
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY,term: 'iphone'},function(data){
            //this.setState({videos: data});
            
        });

    }

    render(){
        return (
            <div>
                <SearchBar /> Go!!
            </div>
        );
    }
}

//generate page DOM
 
ReactDOM.render(<App />,document.querySelector('.container'));