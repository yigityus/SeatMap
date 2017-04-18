/**
 * Created on 17.04.2017.
 */
import {SET_FLIGHT} from '../actions/flight'
// Set initial state
const initialState = {
  flight: {
  }
};

export default function flightReducer(state = initialState, action) {

  console.log('reducers state', state)
  console.log('reducers action', action)
  console.log('reducers action.flight', action.flight)

  console.log('reducers new state',
  {
      ...state,
      flight: action.flight,
  }
  )

  switch (action.type) {
    case SET_FLIGHT :
      return {
          ...state,
        flight: action.flight,
      };

      // ...other actions

    default :
      console.log('default case')
      return state;
  }

}
