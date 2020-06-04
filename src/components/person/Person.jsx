import React from 'react';

const Person = ({firstname , lastname , deleted}) => {
    return ( 
        <div>
            <p onClick={deleted} style={{cursor : 'pointer'}}> {firstname} {lastname}</p>
        </div>
     );
}
 
export default Person;