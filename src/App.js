import React, { Component } from 'react';
import Persons from './components/person/Persons';

class App extends Component {
    state = { 
        persons : [
            {firstname : 'کیا' , lastname : 'احمدی' , age : '32'} ,
            {firstname : 'کیارش' , lastname : 'غلامی' , age : '22'} ,
            {firstname : 'کیانوش' , lastname : 'رفعتی' , age : '19'}
        ] 
    } ;

    render() { 
        const {persons} = this.state ;
        return ( 
            <div>
                <Persons persons = {persons} />
            </div> 
        );
    }
}
 
export default App;