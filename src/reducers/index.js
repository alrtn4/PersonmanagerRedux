import { combineReducers } from "redux";
import { personsReducer } from "./persons";
import { showPersonsReducer } from "./showpersons";
import { singlePersonReducer } from "./singlePerson";

export const reducers = combineReducers({
    persons : personsReducer ,
    showPerson : showPersonsReducer ,
    singlePerson : singlePersonReducer
}) ;