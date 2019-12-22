import React, { Component } from "react";
import "./ShowTrain.css";
import data from "../data";
import Popup from "reactjs-popup";

import ShowStops from "../ShowStops/ShowStops";
import Booking from "../Booking/Booking";
const Trains = data.Trains;

export default class ShowTrains extends Component {
  render() {
    return (
      <div className="showtrain">
        <table className="TFtable">
          <thead>
            <th>Train Id</th>
            <th>Train Name</th>
            <th>Total Seats</th>
            <th>Book</th>
          </thead>
          <tbody>
            {this.props.trains.map((s, index) => {
              return (
                <tr>
                  <td>
                    <Popup trigger={<p> {s.id} </p>} modal closeOnDocumentClick>
                      <ShowStops trains={this.props.trains} index={index}></ShowStops>
                    </Popup>
                  </td>
                  <td>{s.name}</td>
                  <td>{s.totalSeats.FIRST_AC}</td>
                  <td>
                    <Popup
                      trigger={<button>Book</button>}
                      modal
                      closeOnDocumentClick
                    >
                      <Booking train={this.props.trains[index]}></Booking>
                    </Popup>
                  </td>
                </tr>
              );
            })}{" "}
          </tbody>
        </table>
      </div> 
    );
  }
}
