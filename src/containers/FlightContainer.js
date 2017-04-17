/**
 * Created on 17.04.2017.
 */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Flight from '../components/Flight';
import * as Actions from '../actions/flight';

function mapStateToProps(state) {
  return {
    flight: state.flight,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Flight);
