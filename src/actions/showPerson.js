//Action

export const showPerson = () => {
    return async (dispatch , getState) => {
        await dispatch({type: 'SHOW' , payload: !getState().showPerson})
    }
}