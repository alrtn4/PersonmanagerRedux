import React from 'react';
import './person.css' ;

const Person = ({fullName , deleted , change}) => {
    return ( 
        <div className='person'>
            <p> {fullName} </p>
            <input type='text' onChange={change} />
            <button onClick={deleted}>حذف</button>
        </div>
     );
}
 
export default Person;