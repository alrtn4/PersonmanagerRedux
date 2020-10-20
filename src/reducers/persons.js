//Reducer

export const personsReducer = ( state = [
    { id: 1, fullName: 'کیا احمدی' },
    { id: 2, fullName: 'کیارش غلامی' },
    { id: 3, fullName: 'کیانوش رفعتی' }
    ] , action ) => {
        switch (action.type) {
            case 'SET' :
                return action.payload ;
            default :
                return state ;
        }
    }