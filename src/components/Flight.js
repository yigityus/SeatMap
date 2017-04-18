/**
 * Created on 17.04.2017.
 */
import React, { Component, PropTypes } from 'react';
import { Container, Content } from 'native-base';
import { Button, Form, Item, Label, Input } from 'native-base';
import { Text } from 'react-native';

export default class Flight extends React.Component {

  onPress = () => {

    console.log('onPress')
    console.log(this.state)
    console.log('onPress')

    const flight = {
      flightNumber: this.state.flightNumber,
      flightDate: this.state.flightDate,
      flightDeparture: this.state.flightDeparture,
    }
    this.props.setFlight(flight);
  }

  onLucky = () => {
    console.log('onLucky')
    const flight = {
      flightNumber: '1',
      flightDate: new Date().toJSON().slice(0, 10),
      flightDeparture: 'IST',
    }

    this.props.setFlight(flight);

  }


  render() {
    return (
        <Container>
          <Content>
            <Form>
              <Item inlineLabel>
                <Label>Flight Number</Label>
                <Input onChangeText={(flightNumber) => this.setState({flightNumber: 1})} />
              </Item>
              <Item inlineLabel>
                <Label>Flight Departure</Label>
                <Input onChangeText={(flightDeparture) => this.setState({flightDeparture: 'IST'})} />
              </Item>
              <Item inlineLabel last>
                <Label>Flight Date</Label>
                <Input onChangeText={(flightDate) => this.setState({flightDate: '2017-04-18'})} />
              </Item>
            </Form>
            <Button block onPress={this.onPress}>
              <Text> Submit </Text>
            </Button>

            <Button block outline light bordered onPress={this.onLucky}>
              <Text> Im feeling lucky </Text>
            </Button>


            <Text> {this.props.flightNumber} </Text>
            <Text> {this.props.flightDate} </Text>
            <Text> {this.props.flightDeparture} </Text>

          </Content>
        </Container>
    );
  }
}