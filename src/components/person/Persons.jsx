import React, { useContext } from 'react';
import Person from './Person';
import simpleContext from '../common/context/context';

const Persons = () => {

    const context = useContext(simpleContext) ;

    return <div>
        {context.state.persons.map(person => (
            <Person 
                key = {person.id} 
                fullName = {person.fullName} 
                deleted = {() => context.handleDeletePersons(person.id)}
                change = {(event) => context.handleChangePersons(event , person.id)}
            />             
        ))}
    </div>;
}
 
export default Persons;

