import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Persons from './components/person/Persons';
import Header from './components/common/Header'
import simpleContext from './components/common/context/context';
import AddPerson from './components/person/AddPerson';

class App extends Component {
    state = {
        appTitle: 'مدیریت کننده اشخاص',

        persons: [
            { id: 1, fullName: 'کیا احمدی' },
            { id: 2, fullName: 'کیارش غلامی' },
            { id: 3, fullName: 'کیانوش رفعتی' }
        ],

        showPersons: true
    };

    handleShowPersons = () => {
        this.setState({ showPersons: !this.state.showPersons });
    }

    handleDeletePerson = id => {
        const persons = [...this.state.persons];
        const filteredPersons = persons.filter(p => p.id !== id);
        this.setState({ persons: filteredPersons });
        toast(`${persons.filter(p => p.id === id)[0].fullName} با موفقیت حذف شد`, {
            position: 'bottom-right',
            type: 'error',
            closeOnClick: true
        });
    }

    handleChangePerson = (event, id) => {
        const { persons: allPersons } = this.state;

        const personIndex = allPersons.findIndex(p => p.id === id);
        allPersons[personIndex].fullName = event.target.value;
        const persons = [...allPersons];
        this.setState({ persons });
    }

    handleAddPerson = () => {
        const persons = [...this.state.persons];
        let person = {
            id: persons.length + 1,
            fullName: document.getElementById('newName').value
        }

        if (person.fullName !== '' && person.fullName !== ' ') {
            persons.push(person);
            this.setState({ persons });

            toast(`${person.fullName} با موفقیت اضافه شد`, {
                position: 'top-right',
                closeOnClick: true,
                type: 'success'
            });
        }
    }


    render() {
        const { persons, showPersons } = this.state;

        let person = null;

        if (showPersons) {
            person = <Persons
                persons={persons}
                deleted={this.handleDeletePerson}
                changed={this.handleChangePerson}
            />;
        }

        return (
            <simpleContext.Provider
                value={{
                    state: this.state,
                    handleDeletePersons : this.handleDeletePerson,
                    handleChangePersons : this.handleChangePerson,
                    handleAddPersons : this.handleAddPerson
                }}
            >
                <div className='rtl text-center'>
                    <div>
                        <Header
                            // persons={persons} 
                            // title={this.state.appTitle} 
                        />

                    </div>

                    <AddPerson />

                    <Button
                        onClick={this.handleShowPersons}
                        variant={showPersons ? 'info' : 'danger'}  >
                        اشخاص را نشان بده
                    </Button>

                    {person}

                    <ToastContainer />
                </div>

            </simpleContext.Provider>
        );
    }
}

export default App;