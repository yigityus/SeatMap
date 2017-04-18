/**
 * Created on 17.04.2017.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Seatmap from '../components/Seatmap';
import { fetchSeatmap, } from '../actions/seatmap';

function mapStateToProps(state) {

  console.log('SeatmapContainer ', state)

  return {
    seatMapRow: state.seatmap.seatMapRow,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchSeatmap}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Seatmap);
