/**
 * Created on 17.04.2017.
 */
import {SET_FLIGHT} from '../actions/flight'
// Set initial state
const initialState = {
  flightNumber: '',
  flightDate: '',
  flightDeparture: '',

};

export default function flightReducer(state = initialState, action) {

  switch (action.type) {
    case SET_FLIGHT :
      return {
        ...state,
        flightNumber: action.flightNumber,
        flightDate: action.flightDate,
        flightDeparture: action.flightDeparture,
      };

      // ...other actions

    default :
      console.log('default case')
      return state;
  }
}
