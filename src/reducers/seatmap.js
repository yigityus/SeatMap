/**
 * Created on 17.04.2017.
 */
import {FETCH_SEATMAP} from '../actions/seatmap'
// Set initial state
const initialState = {
  seatMapRow: {},
};

export default function seatmapReducer(state = initialState, action) {

  const {seatMapRow} = action

  console.log('seatMapRow ', seatMapRow)

  switch (action.type) {
    case FETCH_SEATMAP :
      return {
        ...state,
        seatMapRow,
      };

      // ...other actions

    default :
      return state;
  }
}
