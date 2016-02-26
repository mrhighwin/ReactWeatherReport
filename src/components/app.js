import React, {Component} from 'react';
import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
  	console.log("dhf");
    return (
    	<div>
    		<SearchBar />
    		<WeatherList />
    	</div>
    );
  }
}
