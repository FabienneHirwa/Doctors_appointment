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
            state.push({
                user:action.payload.user,
                id:Date.now() + Math.random(),
                doctor:action.payload.doctor,
                date:action.payload.date.toISOString(),
                time:action.payload.time,
            }) 
            localStorage.setItem('loc',JSON.stringify(state))
            return state
        case "deletebookedDateAndSave": 
        let filterToDelete = state.filter((u) => u.id !== action.payload[0].id) ;
        localStorage.setItem('loc',JSON.stringify(filterToDelete))
        state =filterToDelete
        console.log(state)
        return state  
        default:
            return state;
    }
}
export default useBookedDate;
