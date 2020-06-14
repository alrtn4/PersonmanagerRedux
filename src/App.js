import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Persons from './components/person/Persons';
import Header from './components/common/Header'
import simpleContext from './components/common/context/context';
import AddPerson from './components/person/AddPerson';


const App = () => {

    let [getPersons , setPersons] = useState( [
                                            { id: 1, fullName: 'کیا احمدی' },
                                            { id: 2, fullName: 'کیارش غلامی' },
                                            { id: 3, fullName: 'کیانوش رفعتی' }
                                        ] ) ;
    let [getShowPersons , setShowPersons] = useState(true) ;


    const handleShowPersons = () => {
       setShowPersons( !getShowPersons );
    }
    
    const handleDeletePerson = id => {
        const persons = [...getPersons];
        const filteredPersons = persons.filter(p => p.id !== id);
        setPersons( filteredPersons ) ;
        toast(`${persons.filter(p => p.id === id)[0].fullName} با موفقیت حذف شد`, {
            position: 'bottom-right',
            type: 'error',
            closeOnClick: true
        });
    }
    
    const handleChangePerson = (event, id) => {
        const allPersons  = getPersons;
    
        const personIndex = allPersons.findIndex(p => p.id === id);
        allPersons[personIndex].fullName = event.target.value;
        const persons = [...allPersons];
        setPersons( persons );
    }
    
    const handleAddPerson = () => {
        const persons = [...getPersons];
        let person = {
            id: persons.length + 1,
            fullName: document.getElementById('newName').value
        }
        
        if (person.fullName !== '' && person.fullName !== ' ') {
            persons.push(person);
            setPersons( persons );
            
            toast(`${person.fullName} با موفقیت اضافه شد`, {
                position: 'top-right',
                closeOnClick: true,
                type: 'success'
            });
        }
    }
    
    const showPersons = getShowPersons;
    
    let person = null;
    
    if (showPersons) {
        person = <Persons />;
    }
    
    return (
        
        <simpleContext.Provider
            value={{
                persons : getPersons ,
                handleDeletePersons : handleDeletePerson,
                handleChangePersons : handleChangePerson,
                handleAddPersons : handleAddPerson
            }}
        >

            <div className='rtl text-center'>
                
                <Header appTitle='مدیریت کننده اشخاص' />                       
                

                <AddPerson />

                <Button
                    onClick={handleShowPersons}
                    variant={getShowPersons ? 'info' : 'danger'}  >
                    اشخاص را نشان بده
                </Button>

                {person}

                <ToastContainer />
            </div>

        </simpleContext.Provider>
    ) ;
}

export default App;
