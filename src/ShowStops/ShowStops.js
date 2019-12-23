import React, { Component } from "react";
import data from "../data";
import axios from "axios";
import { Table } from "react-bootstrap";

const Trains = data.Trains;
export default class ShowStops extends Component {
  state = {
    stops: []
  };

  fetchTrainData(){
    axios
      .get(`http://localhost:8080/trains/${this.props.trains[0]}`)
      .then(response => {
        console.log(response);
        this.setStops(response.data.stops);
      });
  }

  setStops(stops){
    this.setState({stops});
  }

  render(props) {
    
    this.fetchTrainData();


    if (this.state.stops.length > 0) {
      return (
        <div className="Stops">
          <h3>
            Train Number : {this.props.trains[0]} Train Name :{this.props.trains[1]}
            {/* {this.props.trains[this.props.index + 1]} */}
          </h3>
          <Table className="TFtable" style={{marginLeft: 0}}>
            <thead>
              <th>S.No. </th>
              <th>Station Name</th>
              <th>Arrival Time</th>
              <th>Departure Time</th>
              <th>Distance</th>
            </thead>
            <tbody>
              {this.state.stops.map(s => {
                return (
                  <tr>
                    <td>{s.id}</td>
                    <td>{s.stationName}</td>
                    <td>{s.arrivalTime}</td>
                    <td>{s.departureTime}</td>
                    <td>{s.distanceTravelled}</td>
                  </tr>
                );
              })}
            </tbody>{" "}
          </Table>
        </div>
      );
    }
    else{
      return (
        <h1>loading ..... </h1>
      )
    }
  }
}
