import React, { Component } from "react";
import Popup from "reactjs-popup";
import "./Admin.css";
import AddTrain from "./AddTrain";
import ShowStops from "../ShowStops/ShowStops";
import ShowTrains from "../ShowTrain/ShowTrain";
import UpdateTrain from "./UpdateTrain";
export default class Admin extends Component {

    state ={
        index: 0
    }

    getIndex = (index) =>{
        this.setState({
            index:index
        });
    }
  render() {
    return (
      <div>
        <h2 class="heading">Admin DashBoard</h2>
        <br></br>
        <div class="table">
          <Popup
            trigger={<button class="button">Add Train</button>}
            modal
            closeOnDocumentClick
          >
            <AddTrain></AddTrain>
          </Popup>
          <br></br>
          <Popup
            trigger={<button class="button">Show Trains</button>}
            modal
            closeOnDocumentClick
          >
            <ShowTrains class="showtrain"></ShowTrains>
          </Popup>
          <br></br>
          <Popup
            trigger={<button class="button">Search Train</button>}
            modal
            closeOnDocumentClick
          >
            <input type = "text" placeholder="Enter Train No" onChange = {this.getIndex}/>
            <Popup trigger={<button onClick = {this.getIndex}>Search</button>} 
            modal closeOnDocumentClick>
              
              <ShowStops index={this.state.index}></ShowStops>
            </Popup>
          </Popup>
          <br></br>
          <Popup
            trigger={<button class="button">Update Train</button>}
            modal
            closeOnDocumentClick
          >
            <UpdateTrain/>
          </Popup>
          <br></br>
          <Popup
            trigger={<button class="button">Delete Train</button>}
            modal
            closeOnDocumentClick
          >
            <h2>Hello</h2>
          </Popup>
        </div>
      </div>
    );
  }
}
