/**
 * Created on 18.04.2017.
 */
import React, {Component} from 'react';
import { Text } from 'react-native';
import { Container, Content, Spinner, Button} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Seatmap extends Component {

  constructor(props) {

    props.loading = true

    super(props);

    this.state = {
      loading: true,
      seatMapRow: [],
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
        loading: false,
        seatMapRow: this.props.seatMapRow.seatMapRow,
      })
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    let spinner = this.state.loading ? <Spinner /> : null
    let seatMapRow = this.state.seatMapRow ? this.state.seatMapRow : null

    console.log('seatMapRow ', seatMapRow)

    if (seatMapRow) {
      seatMapRow = this.renderRows(seatMapRow)
    }


    return (
        <Container>
          <Content>
            {spinner}
            {seatMapRow}
          </Content>
        </Container>
    );
  }

  renderRows(seatMapRow) {
    rows = seatMapRow.map((row)=> {
      console.log(row)
      console.log(row.rowNumber)

      let columns = this.renderColumns(row.cabinElement);
      return <Row key={row.rowNumber}><Col key={row.rowNumber}><Text>{row.rowNumber}</Text></Col>{columns}</Row>
    })
    return rows
  }

  renderColumns(cabinElements) {
    columns = cabinElements.map((column)=> {
      let type = column.type;
      if(!type) type = 'null'
      return <Col><Text style={{fontSize:6}}>{type}</Text></Col>
    })
    return columns
  }
}