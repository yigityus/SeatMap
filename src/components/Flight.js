/**
 * Created on 17.04.2017.
 */
import React, { Component, PropTypes } from 'react';
import { Container, Content } from 'native-base';
import { Button, Form, Item, Label, Input } from 'native-base';
import { Text } from 'react-native';

export default class Flight extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    flight: PropTypes.shape({
      flightNumber: PropTypes.string,
    }),
  }

  static defaultProps = {
    flight: {
      flightNumber: '100',
    }
  }

  onPress = () => {
    console.log(this.state)
    console.log(this.props)

    let flight = {
      flightNumber: this.state.flightNumber
    }

    this.props.setFlight(flight);

  }

  render() {
    return (
        <Container>
          <Content>
            <Form>
              <Item inlineLabel>
                <Label>Username</Label>
                <Input onChangeText={(flightNumber) => this.setState({flightNumber})} />
              </Item>
              <Item inlineLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
            </Form>
            <Button block onPress={this.onPress}>
              <Text> Primary </Text>
            </Button>

            <Text>{this.props.flightNumber}</Text>

          </Content>
        </Container>
    );
  }
}