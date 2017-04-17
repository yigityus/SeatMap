/**
 * Created on 17.04.2017.
 */
import {SET_FLIGHT} from '../actions/flight'
// Set initial state
const initialState = {
  flightNumber: '200'
};

export default function flight(state = initialState, action) {

  console.log('123')
  console.log(action)
  console.log(state)

  newState = Object.assign({}, {state}, flight);

  console.log(newState);
  console.log(action.flight);

  switch (action.type) {
    case SET_FLIGHT :
      console.log('action case SET_FLIGHT')
      console.log(SET_FLIGHT)
      return newState;

      // ...other actions

    default :
      console.log('default case')
      return state;
  }

}
