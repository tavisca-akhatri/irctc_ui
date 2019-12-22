import React, { Component } from 'react';
import TimeField from 'react-simple-timefield';

class AddStops extends Component {

    constructor(...args) {
        super(...args);
    
        this.state = {
          time: '12:34'
        };
    
        this.onTimeChange = this.onTimeChange.bind(this);
      }
    
      onTimeChange(time) {
        this.setState({time});
      }

      
    state = {
        personNum:1
         }
     
     inputHandle = (event) =>{
         this.setState({
             personNum : event.target.value
         })
     
     }
    
  render() {
    const {time} = this.state;
    return (
      <div> 
      <h3>Add No. of Stops</h3>
      <table class = "TFtable">
      <thead><th>Sr. No.</th><th>Station Name</th><th>Arrival Time</th><th>Departure Time</th><th>Distance</th><th>No. of Seats</th></thead>
      <tbody>
      <tr>
      <td> <input type="number" ></input></td>
      <td> <input type="text"></input></td>
      <td>  <TimeField value={time} onChange={this.onTimeChange} /> </td>
      <td>  <TimeField value={time} onChange={this.onTimeChange} /> </td>
      <td> <input type="number" ></input></td>
     <td> <input type="number" placeholder= "No. of Stops" onChange= {this.inputHandle}></input>
</td>      </tr>
      </tbody>
      </table> </div>
    );
  }
}

export default AddStops;