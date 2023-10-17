import React from 'react';
import Card from './Card.js'

const CardList = ({ droids }) => { 
   return (
   <div>
     {
   	   droids.map((user, i) => {
				return ( 
				  <Card 
		  			key={i} 
						id={droids[i].id} 
						name={droids[i].name} 
						email={droids[i].email}
					/>
   			);
  	 })
 		 }
	</div>
	);
	
}

export default CardList;