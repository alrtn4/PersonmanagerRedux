import React from 'react';
import Person from './Person';

const Persons = ({persons , deleted , changed}) => {
    return <div>
        {persons.map(person => (
            <Person 
                key = {person.id} 
                fullName = {person.fullName} 
                deleted = {() => {deleted(person.id)}}
                change = {(event , id) => {changed(event , person.id)}}
            />             
        ))}
    </div>;
}
 
export default Persons;

