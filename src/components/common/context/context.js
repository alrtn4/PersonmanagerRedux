import { createContext} from 'react';

let simpleContext = createContext ({
    state : {} ,
    handleDeletePersons : {} ,
    handleChangePersons : {} ,
    handleAddPersons : {}
}) ;

export default simpleContext ;