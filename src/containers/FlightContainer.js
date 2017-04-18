/**
 * Created on 17.04.2017.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Flight from '../components/Flight';
import { setFlight, pop } from '../actions/flight';
import { fetchSeatmap } from '../actions/seatmap';

function mapStateToProps(state) {
  return {
    flightNumber: state.flight.flightNumber,
    flightDate: state.flight.flightDate,
    flightDeparture: state.flight.flightDeparture,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setFlight, pop, fetchSeatmap}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flight);
