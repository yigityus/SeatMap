/**
 * Created on 17.04.2017.
 */
import { combineReducers } from 'redux';
import flight from './flight';
import seatmap from './seatmap';

const rootReducer = combineReducers({
  flight,
  seatmap
});

export default rootReducer;
