import {combineReducers} from 'redux';
import useBookedDate from './useBookedDate'
// redux reducer
const reducer = combineReducers({
    bookedDate:useBookedDate,
});

export default reducer;
