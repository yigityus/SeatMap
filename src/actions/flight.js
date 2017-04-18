/**
 * Created on 17.04.2017.
 */
import {
  Actions,
} from 'react-native-router-flux';

export const SET_FLIGHT = 'SET_FLIGHT';

export function setFlight(flight) {
  Actions.seatmap()
  return {
    type: SET_FLIGHT,
    flightNumber: flight.flightNumber,
    flightDate: flight.flightDate,
    flightDeparture: flight.flightDeparture,
  };
}

export function pop() {
  return dispatch => {
    dispatch({
      type: SET_FLIGHT,
      flightNumber: 1,
      flightDeparture: 'IST',
      flightDate: '2017-04-18'
    })
  }
}