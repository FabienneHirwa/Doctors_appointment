export const bookedDateSave = (data) =>{
    return (dispatch) =>{
    return dispatch({
        type   : 'addingBookedDateSave',
        payload: data
    })
}  
}
export const deletebookedDateAndSave = (data) =>{
    return (dispatch) =>{
        return dispatch({
            type   : 'deletebookedDateAndSave',
            payload: data
        })
    }    
}