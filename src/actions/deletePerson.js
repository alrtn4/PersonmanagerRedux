import { toast } from "react-toastify";
import { setPerson } from './setPerson';


export const deletePerson = (id) => {
  return async (dispatch, getState) => {
    const person = [...getState().persons];
    const filteredPersons = person.filter((p) => p.id !== id);
    await dispatch(setPerson(filteredPersons));
    toast(`${person.filter((p) => p.id === id)[0].fullName} با موفقیت حذف شد`, {
      position: "bottom-right",
      type: "error",
      closeOnClick: true,
    });
  };
};
