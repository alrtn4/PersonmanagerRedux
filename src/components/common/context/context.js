import { createContext} from 'react';

let simpleContext = createContext ({
    // state : {} ,
    persons : [] ,
    handleDeletePersons : {} ,
    handleChangePersons : {} ,
    handleAddPersons : {}
}) ;

export default simpleContext ;