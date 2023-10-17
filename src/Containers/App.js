import React, { useState, useEffect } from 'react';
import CardList from '../Components/CardList.js';
import SearchBox from '../Components/SearchBox.js';
import Scroll from '../Components/Scroll.js';
import './App.css';


function App () {
	const [droids, setDroids] = useState([])
	const [searchfield, setSearchfield] = useState('')



// class App extends Component {
//    constructor () {
//    	super()
//    	this.state = {
//    		droids: [],
//    		searchfield: ''
//    }
// }

// componentDidMount() {
// 	fetch('https://jsonplaceholder.typicode.com/users')
// 	 .then(response=> response.json())
// 	 .then(users => this.setState({ droids: users }));
// }

useEffect(() => {
	fetch('https://jsonplaceholder.typicode.com/users')
	 .then(response=> response.json())
	 .then(users => {setDroids(users)});
},[])

const onSearchChange = (event) => {
	 setSearchfield(event.target.value)
	}
const filteredDroids = droids.filter(droids =>{
  return droids.name.toLowerCase().includes(searchfield.toLowerCase());
})

return !droids.length ?
	<h1>Loading</h1> :
	
(
	<div className='tc'>
		<h1 className='f1'>Cantina LaDroido</h1>
		<SearchBox searchChange={onSearchChange} />
		<Scroll>
			<CardList droids={filteredDroids} />
		</Scroll>
	</div>

);

  }



  
 



export default App;
