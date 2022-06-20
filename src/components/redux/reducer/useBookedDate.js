if(localStorage.getItem('loc') == null || localStorage.getItem('loc') == "" || localStorage.getItem('loc') == undefined){
    console.log('Welcome')
    localStorage.setItem('loc','[]')
}
const useBookedDate = (state = JSON.parse(localStorage.getItem('loc')),action) =>{
    switch (action.type) {
        case "bookedDateSaveGet":
            return (
                state || action.payload
            );
        case "addingBookedDateSave":
            console.log('useBook reducer')
            state.push({
                user:action.payload.user,
                doctor:action.payload.doctor,
                date:action.payload.date,
                time:action.payload.time,
            }) 
            localStorage.setItem('loc',JSON.stringify(state))
            return state
        default:
            return state;
    }
}
export default useBookedDate;
