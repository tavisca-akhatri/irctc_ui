import React, { Component } from 'react';
import data from '../data'
const Trains = data.Trains;
export default class ShowStops extends Component {
    
  render(props) {
    return (
      <div className="Stops">
      <h3>Train Number : {Trains[this.props.index].id} Train Name : {Trains[this.props.index].name}</h3>
        <table className="TFtable">
          <thead><th>S.No. </th><th>Station Name</th><th>Arrival Time</th><th>Departure Time</th><th>Distance</th></thead>
          <tbody>
            {
              Trains[this.props.index].stops.map((s) => {
                return (<tr>
                  <td>{s.id}</td><td>{s.station.name}</td><td>{s.arrivalTime}</td>
                  <td>{s.departureTime}</td><td>{s.distanceTravelled}</td>
                </tr>)
              })
            }</tbody> </table>
      </div>
    );
  }
}