/**
 * Created on 18.04.2017.
 */
import React, {Component} from 'react';
import { Text } from 'react-native';
import { Container, Content, Spinner, Button } from 'native-base';

export default class Seatmap extends Component {

  constructor(props) {

    props.loading = true

    super(props);

    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData = () => {
    this.props.fetchSeatmap({
      flightNumber: '1',
      flightDate: '2017-04-18',
      flightDeparture: 'IST',
    }).then(() => {
      this.setState({
        loading: false
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    let spinner = this.state.loading ? <Spinner /> : null
    return (
        <Container>
          <Content>
            {spinner}
            <Text>Hello!</Text>
            <Text>{this.state.loading.toString()}</Text>
            <Text>{this.props.seatmap.id}</Text>
            <Text>{this.props.seatmap.content}</Text>
            <Text>{this.props.flightNumber}</Text>
            <Text>{this.props.flightDeparture}</Text>
            <Text>{this.props.flightDate}</Text>
            <Text>{this.props.seatmap.cabinType}</Text>

            <Button onPress={() => this.setState({loading:false})}>
              <Text> Submit </Text>
            </Button>

            <Button onPress={() => this.props.fetchSeatmap({
              flightNumber: this.props.flightNumber,
              flightDate: this.props.flightDate,
              flightDeparture: this.props.flightDeparture,
            }).then(() => {
              this.setState({
                loading: false
              });
            })}>
              <Text> Fetch </Text>
            </Button>



          </Content>
        </Container>
    );
  }
}