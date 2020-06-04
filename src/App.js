import React, { Component } from 'react';
import Persons from './components/person/Persons';

class App extends Component {
    state = { 
        persons : [
            {id : 1 , firstname : 'کیا' , lastname : 'احمدی'} ,
            {id : 2 , firstname : 'کیارش' , lastname : 'غلامی'} ,
            {id : 3 , firstname : 'کیانوش' , lastname : 'رفعتی'}
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

    render() { 
        const {persons , showPersons} = this.state ;
        const styles = {textAlign : 'center'} ;

        let person = null ;

        if(showPersons) {
            person = <Persons persons = {persons} deleted={this.handleDeletePerson}/> ;
        }

        let buttonStyle = {
            padding: '1em' ,
            fontFamily: 'BYekan' ,
            backgroundColor: 'pink'
        }

        return ( 
            <div style={styles}>
                <h2>مدیریت کننده اشخاص</h2>
                <h4>تعداد اشخاص {persons.length} نفر می باشد</h4>

                {person}

                <button onClick={this.handleShowPersons}  style={buttonStyle}>اشخاص را نشان بده</button>
            </div> 
        );
    }
}
 
export default App;