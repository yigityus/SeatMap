/**
 * Created on 17.04.2017.
 */
import {FETCH_SEATMAP} from '../actions/seatmap'
// Set initial state
const initialState = {
  seatmap: {},
};

export default function seatmapReducer(state = initialState, action) {

  const {seatmap} = action

  switch (action.type) {
    case FETCH_SEATMAP :
      return {
        ...state,
        seatmap,
      };

      // ...other actions

    default :
      return state;
  }
}
