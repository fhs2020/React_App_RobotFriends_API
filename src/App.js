import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
 

class App extends Compon
		super()
		this.state = {
			 	robots: robots,
 				searchfield: ''	
		}
	}

onsearchChange(event){
	console.log(event);
}

	render(){
	return (
		<div className='tc'>
			<h1>RobotFriends</h1>
			<SearchBox />
			<CardList robots={this.state.robots}/>
		</div>

		);
	}
}

export default App;