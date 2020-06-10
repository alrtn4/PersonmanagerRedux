import React, { Component } from 'react';
import Persons from './components/person/Persons';

class App extends Component {
    state = { 
        persons : [
            {id : 1 , fullName : 'کیا احمدی'} ,
            {id : 2 , fullName : 'کیارش غلامی'} ,
            {id : 3 , fullName : 'کیانوش رفعتی'}
        ] ,

        showPersons : true 
    } ;

    showPersons = true ;

    handleShowPersons = () => {
        this.setState({ showPersons : !this.state.showPersons}) ;
    }

    handleDeletePerson = id => {
        const persons = [...this.state.persons] ;
        const filteredPersons = persons.filter(p => p.id !== id) ;
        this.setState({ persons : filteredPersons });
    }   
    
    handleChangePerson = (event , id) => {
        const {persons : allPersons} = this.state ;

        const personIndex = allPersons.findIndex(p => p.id === id) ;
        allPersons[personIndex].fullName = event.target.value ;
        const persons = [...allPersons] ;
        this.setState({ persons }) ;
    }

    handleAddPerson = () => {
        const persons = [...this.state.persons] ;
        let person = {
            id : persons.length + 1 ,
            fullName : document.getElementById('newName').value 
        }
    
        // console.log(person.id) ;
        persons.push(person) ;
        this.setState({ persons }) ;
    }

    render() { 
        const {persons , showPersons} = this.state ;
        // const styles = {textAlign : 'center'} ;

        let person = null ;

        if(showPersons) {
            person = <Persons 
                        persons = {persons} 
                        deleted={this.handleDeletePerson}
                        changed = {this.handleChangePerson}    
                    /> ;
        }

        // let buttonStyle = {
        //     padding: '1em' ,
        //     fontFamily: 'BYekan' ,
        //     backgroundColor: 'pink' ,
        //     display: 'block' ,
        //     margin: '20px auto'
        // }

        return ( 
            <div className='rtl text-center'>
                <div>
                    <div className='alert alert-info'>
                        <h2>مدیریت کننده اشخاص</h2>
                    </div>
                    
                    <h4 className='alert alert-light'>
                        تعداد اشخاص {' '}
                        <span className='badge badge-pill badge-success'>
                            {persons.length}
                        </span> {' '}
                         نفر می باشد
                    </h4>

                    <div className='m-2 p-2'>
                        <form className='form-inline justify-content-center' onSubmit={event => event.preventDefault()}>
                            <div className='input-group w-25'>
                                <input 
                                    className='form-control'
                                    type='text' 
                                    id='newName' 
                                    placeholder='نام بهم بده' 
                                />
                                <div className='input-group-prepend'>
                                    <button 
                                        type='submit' 
                                        className='btn btn-sm btn-success fa fa-plus-square' 
                                        onClick={this.handleAddPerson} 
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <button 
                    onClick={this.handleShowPersons} 
                    className='btn btn-info'>
                        اشخاص را نشان بده
                </button>

                {person}
            </div> 
        );
    }
}
 
export default App;