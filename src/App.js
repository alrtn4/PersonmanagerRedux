import React, { Component } from 'react';
import Persons from './components/person/Persons';

class App extends Component {
    state = { 
        persons : [
            {firstname : 'کیا' , lastname : 'احمدی'} ,
            {firstname : 'کیارش' , lastname : 'غلامی'} ,
            {firstname : 'کیانوش' , lastname : 'رفعتی'}
        ] ,

        showPersons : false 
    } ;

    showPersons = false ;

    handleShowPersons = () => {
        this.setState({ showPersons : !this.state.showPersons}) ;
    }

    render() { 
        const {persons , showPersons} = this.state ;
        const styles = {textAlign : 'center'} ;

        let person = null ;

        if(showPersons) {
            person = <Persons persons = {persons} /> ;
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