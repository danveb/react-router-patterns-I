import React from 'react' 
import { Link } from 'react-router-dom'

const DogList = ({ dogs }) => {
    return (
        <div>
            <h1>Dog List</h1>
            <div className="row">
                {/* loop for each dog to return key/name/img */}
                {dogs.map(d => (
                    <div key={d.name}>
                    <h3 className="mt-3">
                        <Link to={`/dogs/${d.name}`}>{d.name}</Link>
                    </h3>
                    <img src={d.src} alt={d.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DogList