//Action
import { toast } from "react-toastify";
import { setPerson } from "./setPerson";

let lastId = 3

export const addPerson = fullName => {
    return async (dispatch , getState) => {
        const persons = [...getState().persons];
        console.log(getState().persons)
        let person = {
            id: ++lastId,
            fullName
        }
        
        if (person.fullName !== '' && person.fullName !== ' ') {
            persons.push(person);
            await dispatch(setPerson(persons)) ;
            
            toast(`${person.fullName} با موفقیت اضافه شد`, {
                position: 'top-right',
                closeOnClick: true,
                type: 'success'
            });
        }

    }
}