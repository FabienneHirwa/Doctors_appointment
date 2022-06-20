export const bookedDateSave = (data) =>{
    return (dispatch) =>{
        console.log('index action')
    return dispatch({
        type   : 'addingBookedDateSave',
        payload: data
    })
}  
}