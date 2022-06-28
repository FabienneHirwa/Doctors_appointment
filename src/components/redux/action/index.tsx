export const bookedDateSave = (data:any) =>{
    return (dispatch:any) =>{
    return dispatch({
        type   : 'addingBookedDateSave',
        payload: data
    })
}  
}
export const deletebookedDateAndSave = (data:any) =>{
    return (dispatch:any) =>{
        return dispatch({
            type   : 'deletebookedDateAndSave',
            payload: data
        })
    }    
}