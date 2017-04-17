/**
 * Created on 17.04.2017.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Flight from '../components/Flight';
import { setFlight } from '../actions/flight';

function mapStateToProps(state) {

  const {flight} = state

  console.log('flight', flight)
  console.log('state ', state)
  console.log('state.flight ', state.flight)

  return flight
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({setFlight}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flight);
