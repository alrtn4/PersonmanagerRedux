//Action
import { setPerson } from './setPerson';

const changePerson = (event, id) => {
  return async (dispatch, getState) => {
    const allPersons = getState().persons;

    const personIndex = allPersons.findIndex((p) => p.id === id);
    allPersons[personIndex].fullName = event.target.value;
    const person = [...allPersons];
    await dispatch(setPerson(person));
  };
};

export default changePerson
