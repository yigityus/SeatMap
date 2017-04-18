/**
 * Created on 17.04.2017.
 */
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store';
import FlightContainer from '../containers/FlightContainer'
import SeatmapContainer from '../containers/SeatmapContainer'
import {
  Scene,
  Router,
} from 'react-native-router-flux';

const store = configureStore();

let unsubscribe = store.subscribe(() => console.log('store.getState ', store.getState()))

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
          <Router hideNavBar>
            <Scene key="flight" component={FlightContainer} initial/>
            <Scene key="seatmap" component={SeatmapContainer}  />
          </Router>
        </Provider>
    );
  }
}