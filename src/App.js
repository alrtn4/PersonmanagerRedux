import React, { Component } from 'react';
import Persons from './components/person/Persons';

class App extends Component {
    state = { 
        persons : [
            {id : 1 , fullName : 'کیا احمدی'} ,
            {id : 2 , fullName : 'کیارش غلامی'} ,
            {id : 3 , fullName : 'کیانوش رفعتی'}
        ] ,

        showPersons : false 
    } ;

    showPersons = false ;

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
    
        console.log(person.id) ;
        persons.push(person) ;
        this.setState({ persons }) ;
    }

    render() { 
        const {persons , showPersons} = this.state ;
        const styles = {textAlign : 'center'} ;

        let person = null ;

        if(showPersons) {
            person = <Persons 
                        persons = {persons} 
                        deleted={this.handleDeletePerson}
                        changed = {this.handleChangePerson}    
                    /> ;
        }

        let buttonStyle = {
            padding: '1em' ,
            fontFamily: 'BYekan' ,
            backgroundColor: 'pink' ,
            display: 'block' ,
            margin: '20px auto'
        }

        return ( 
            <div style={styles}>
                <h2>مدیریت کننده اشخاص</h2>
                <h4>تعداد اشخاص {persons.length} نفر می باشد</h4>
                <input type='text' id='newName' placeholder='نام شخص' style={{direction: 'rtl'}}/>
                <button onClick={this.handleAddPerson} >اضافه کن</button>

                <button onClick={this.handleShowPersons}  style={buttonStyle}>اشخاص را نشان بده</button>

                {person}
            </div> 
        );
    }
}
 
export default App;