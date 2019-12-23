import React, { Component } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "react-dropdown/style.css";
import Person from "../PersonDetails/Person";
import "./Booking.css";
import axios from "axios";
import Button from 'react-bootstrap/Button'

class Booking extends Component {

  TrainClassMap = {
    "FIRST_AC": "1st AC",
    "SECOND_AC": "2nd AC",
    "THIRD_AC": "3rd AC",
    "1st AC": "FIRST_AC",
    "2nd AC": "SECOND_AC",
    "3rd AC": "THIRD_AC"
  };

  state = {
    personNum: 1,
    train: {},
    options: [
      { value: "First AC", label: "First AC" },
      { value: "Second AC", label: "Second AC" },
      { value: "Third AC", label: "Third AC" },
      { value: "Sleeper ", label: "Sleeper " }
    ],
    optionSelected: 0,
    trainClass: "FIRST_AC"
  };

  inputHandle = event => {
    this.setState({
      personNum: event.target.value
    });
  };

  setTrainData(trainData) {
    this.setState({ train: trainData });
  }

  fetchTrainDetail() {
    axios
      .get(`http://localhost:8080/trains/${this.props.location.state.train[0]}`)
      .then(response => {
        console.log(response);
        this.setTrainData(response.data);
      });
  }

  confirmBooking() {
    let res = axios.post(`http://localhost:8080/bookTicket`);
    console.log(`Status code: ${res.status}`);
  }

  _onSelect(a) {
    console.log(a);
  }

  confirm() {
    this.confirmBooking();
    alert("Ticket successfully booked");
  }

  changeClass(trainClass) {
    console.log(this.state);
    this.setState({
      trainClass: trainClass
    });
  }

  render(props) {
    this.changeClass = this.changeClass.bind(this);
    this.fetchTrainDetail();

    console.log(this.state.train.id == undefined);
    if (this.state.train.id == undefined) {
      return <h1> loading ....</h1>;
    }
    const train = this.state.train;
    console.log(train);

    let person = [];

    for (var i = 0; i < this.state.personNum; i++) {
      person.push(<Person></Person>);
    }
    // let price = (this.state.personNum * train.farePerKM.FIRST_AC * (train.stops[ train.stops.length-1].distanceTravelled - train.stops[0].distanceTravelled))
    let price = 100;
    // console.log(train.stops[0].distanceTravelled);
    // console.log(train.stops[train.stops.length-1].distanceTravelled)

    return (
      <div>
        {" "}
        <table className="TFtable">
          <tbody>
            <tr>
              <td>Train No.</td>
              <td> {train.id}</td>
            </tr>
            <tr>
              <td>Train Name</td>
              <td> {this.state.train.name}</td>
            </tr>
            <tr>
              <td>Source</td>
              <td> {train.stops[0].stationName}</td>
            </tr>
            <tr>
              <td>Destination </td>
              <td> {train.stops[train.stops.length - 1].stationName}</td>
            </tr>
            <tr>
              <td>Class</td>
              <td>
                <Dropdown
                  trainClass={this.state.trainClass}
                  changeClass={this.changeClass}
                  options={this.state.options}
                  onChange={a => this._onSelect(a)}
                  value={this.state.options[this.state.optionSelected]}
                  placeholder="Select an option"
                />
              </td>
            </tr>
            <tr>
              <td>No. of Passenger</td>{" "}
              <input
                type="number"
                placeholder="Enter No"
                onChange={this.inputHandle}
              ></input>
            </tr>
            <tr>
              <td>Fare</td>
              <td>{price}</td>
            </tr>
          </tbody>
          <tr>
          </tr>
        </table>
        <h2 class = "header">Please Enter Details below</h2>
        {person}
        <Button className="booking" onClick={this.confirm}>
          Confirm
        </Button>
      </div>
    );
  }
}

export default Booking;
