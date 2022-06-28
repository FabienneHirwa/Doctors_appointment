import {combineReducers} from 'redux';
import useBookedDate from '../../components/redux/reducer/index'
const createReducer = () =>
    combineReducers({
        useBookedDate
    });

export default createReducer;
