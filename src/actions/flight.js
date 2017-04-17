/**
 * Created on 17.04.2017.
 */
export const SET_FLIGHT = 'SET_FLIGHT';

export function setFlight(flight) {
  console.log('test123');
  console.log(flight);
  return {
    type: SET_FLIGHT,
    flight
  };
}