import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hobbylist from "./components/Hobbylist";


function App() {
	return (
		<div className='App'>
			<header className='App-header'>Week-1 React Exercises</header>
			<hr className='hr' />
			<Hobbylist />
      <ul>
			{hobbies.map((hobby, index) => (
				<HobbyItem hobby={hobby} key={index} />
			))}
		</ul>
		</div>
	);
}



export default App;
