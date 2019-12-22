import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Person from '../PersonDetails/Person';
import './Booking.css'


class Booking extends Component {


    state = {
     personNum:1
      }
  
  inputHandle = (event) =>{
      this.setState({
          personNum : event.target.value
      })
  
  }
  
  render(props) {
      const train =  this.props.train;
      const options = [
        { value: 'First AC', label: 'First AC' },
        { value: 'Second AC', label: 'Second AC' },
        { value: 'Third AC', label: 'Third AC' },
        { value: 'Sleeper ', label: 'Sleeper ' }
      ]
      const defaultOption = options[0]

      let person = []
      
      for(var i = 0; i < this.state.personNum; i++) {
        person.push(<Person></Person>)
        
      }
      let price = (this.state.personNum * train.farePerKM.FIRST_AC * (train.stops[ train.stops.length-1].distanceTravelled - train.stops[0].distanceTravelled))
      console.log(train.stops[0].distanceTravelled);
      console.log(train.stops[train.stops.length-1].distanceTravelled)

    return (
      <div > <table className="TFtable">
        <tbody>
        <tr><td>Train No.</td><td> { train.id}</td></tr>
        <tr><td>Train Name</td><td> { train.name}</td></tr>
        <tr><td>Source</td><td> { train.stops[0].station.name}</td></tr>
        <tr><td>Destination </td><td> { train.stops[ train.stops.length-1].station.name}</td></tr>
        <tr><td>Class</td>
        <td><Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" /></td></tr>
        <tr><td>No. of Passenger</td> <input type="number" placeholder= "Enter No" onChange= {this.inputHandle}></input>
        </tr>
        <tr><td>Fare</td><td>{price}</td></tr>
        </tbody>
      <tr>
      <td></td>
      </tr>
      </table>
     
{ person }
<button className="booking">Confirm</button>
     </div>
    );
  }
}

export default Booking;