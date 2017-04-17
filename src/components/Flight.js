/**
 * Created on 17.04.2017.
 */
import React, { Component, PropTypes } from 'react';
import { Container, Content } from 'native-base';
import { Button, Form, Item, Label, Input } from 'native-base';
import { Text } from 'react-native';

export default class Flight extends React.Component {

  onPress = () => {
    console.log('onPress this.state', this.state)
    console.log('onPress this.props', this.props)
    const flight = {
      flightNumber: this.state.flightNumber,
      flightDate: this.state.flightDate,
      flightDeparture: this.state.flightDeparture,
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
                <Input onChangeText={(flightNumber) => this.setState({flightNumber})} />
              </Item>
              <Item inlineLabel>
                <Label>Flight Departure</Label>
                <Input onChangeText={(flightDeparture) => this.setState({flightDeparture})} />
              </Item>
              <Item inlineLabel last>
                <Label>Flight Date</Label>
                <Input onChangeText={(flightDate) => this.setState({flightDate})} />
              </Item>
            </Form>
            <Button block onPress={this.onPress}>
              <Text> Submit </Text>
            </Button>

            <Text> {this.props.flight.flightNumber} </Text>
            <Text> {this.props.flight.flightDate} </Text>
            <Text> {this.props.flight.flightDeparture} </Text>

          </Content>
        </Container>
    );
  }
}