import React from 'react';

const Person = ({firstname , lastname , age}) => {
    return ( 
        <div>
            <p>{firstname} {lastname} {age} سال دارم</p>
        </div>
     );
}
 
export default Person;