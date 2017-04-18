/**
 * Created on 17.04.2017.
 */
import React, { Component, PropTypes } from 'react';
import { Container, Content } from 'native-base';
import { Button, Form, Item, Label, Input } from 'native-base';
import { Text } from 'react-native';

export default class Flight extends React.Component {

  onPress = () => {
    const flight = {
      flightNumber: '1',
      flightDate: '2017-04-18',
      flightDeparture: 'IST',
/*
      flightNumber: this.state.flightNumber,
      flightDate: this.state.flightDate,
      flightDeparture: this.state.flightDeparture,
*/
    }

    this.props.setFlight(flight);

    console.log('onPress flight', flight)
    console.log('onPress this.props', this.props)

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

            <Button dark onPress={this.props.pop}>
              <Text> Submit </Text>
            </Button>

            <Text> {this.props.flightNumber} </Text>
            <Text> {this.props.flightDate} </Text>
            <Text> {this.props.flightDeparture} </Text>

          </Content>
        </Container>
    );
  }
}