//Reducer

export const showPersonsReducer = ( state = true , action ) => {
    switch (action.type) {
        case 'SHOW' :
            return action.payload ;
        default :
            return state ;
    }
}