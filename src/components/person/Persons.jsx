import React from 'react';
import Person from './Person';
import { useSelector } from 'react-redux';

const Persons = () => {

    const persons = useSelector(state => state.persons) ;

    return <div>
        {persons.map(person => (
            <Person 
                key = {person.id} 
                id = {person.id}
                fullName = {person.fullName} 
            />             
        ))}
    </div>;
}
 
export default Persons;

