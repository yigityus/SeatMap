/**
 * Created on 18.04.2017.
 */
import {
  Actions,
} from 'react-native-router-flux';

export const FETCH_SEATMAP = 'FETCH_SEATMAP';

export function fetchSeatmap(payload) {

  Actions.seatmap()

  const {flightNumber, flightDate, flightDeparture} = payload

  const params = Object.keys(payload).map(function(k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(payload[k])
  }).join('&')

  url = 'http://192.168.1.102:3000/db'
  //url = 'http://10.26.15.68:8085/seats?' + params

  console.log(url)

  return dispatch => fetch(url)
      .then((res) => res.json())
      .then((resJson) => {

    //sleep(3000);

    console.log('resJson ', resJson)

    dispatch({
      type: FETCH_SEATMAP,
      seatMapRow: resJson,
    })
  }).catch((error) => {
        console.error(error);
      });

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}