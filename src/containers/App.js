/**
 * Created on 17.04.2017.
 */
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';
import FlightContainer from '../containers/FlightContainer'
import {
  Scene,
  Router,
} from 'react-native-router-flux';
const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Router hideNavBar>
            <Scene key="flight" component={FlightContainer} initial />
          </Router>
        </Provider>
    );
  }
}