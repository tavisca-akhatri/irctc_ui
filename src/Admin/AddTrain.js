import React, { Component } from 'react'
import AddStops from './AddStops'

export default class AddTrain extends Component {
    state = {
        Stops:1
         }
     
     inputHandle = (event) =>{
         this.setState({
            Stops: event.target.value
         })
     
     }
    render() {

        
      let stops = []
      
      for(var i = 0; i < this.state.Stops; i++) {
        stops.push(<AddStops></AddStops>)
        
      }
        return (
            <div>
                <table class = "TFtable">
                    <tr>
                        <td>Train id</td>
                        <td><input type = "text" /></td>
                    </tr>
                    <tr>
                        <td>Train Name</td>
                        <td><input type = "text" /></td>
                    </tr>
                    <tr>
                        <td>Originating time</td>
                        <td><input type = "text" /></td>
                    </tr>
                    <tr>
                        <td>Stops</td>
                        <td><input type = "number" /></td>
                    </tr>
                    <tr>
                        <td>Fare per Km</td>
                        <td><input type = "text" /></td>
                    </tr>
                    <tr>
                        <td>Total Seats</td>
                        <td><input type = "text" /></td>
                    </tr>
                    <tr>
                    <td>
                    No. of Stops
                    </td>
                    <td>
                    <input type="number" placeholder= "No. of Stops" onChange= {this.inputHandle}/>
                    </td>
                    </tr>
                </table>
              {stops}
            </div>
        )
    }
}
