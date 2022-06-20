import {combineReducers} from 'redux';
import useBookedDate from './useBookedDate'
const reducer = combineReducers({
    bookedDate:useBookedDate,
});

export default reducer;
