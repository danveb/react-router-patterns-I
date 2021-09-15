import React from 'react' 
import { useParams } from 'react-router-dom' 

const DogDetails = ({dogs}) => {

    const { name } = useParams(); 

    // initialize idx
    let idx;
    // loop over length of dogs 
    for(let i = 0; i < dogs.length; i++) {
        // if name of loop matches to params
        if(dogs[i].name === name) {
            idx = i; 
        }
    }
    
    return (
        <div>
            <h1>{dogs[idx].name}</h1>
            <img src={dogs[idx].src} alt={dogs[idx].name}/>
            <h3>Age: {dogs[idx].age}</h3>
            {dogs[idx].facts.map(fact => <p>{fact}</p>)}
        </div>
    )
}

export default DogDetails