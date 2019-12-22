import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './Search.css'
import axios from 'axios';
import ShowTrains from '../ShowTrain/ShowTrain';

export default class Search extends Component {
  constructor(){
    super();
    this.state = {
      startDate: new Date(),
      source: '',
      destination: '',
      trainData: [[]]
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.changeSource = this.changeSource.bind(this);
    // this.changeDestination = this.changeDestination.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
     
  handleChange = date => {
    this.setState({
      startDate: date
    });
    console.log(this.state.startDate);
  };
    
  changeSource = (e) =>{
    console.log(e.target.value)
    let s = e.target.value;
    //var s = document.getElementById("source").value;
    console.log(s);
    this.setState({
      source: e.target.value
    });
    console.log("Inside source state");
    console.log(this.state.source)
  };    

  changeDestination= (e) => {
    console.log(e.target.value)
    var s = e.target.value;
    console.log(s);
    this.setState({
      destination: s
    });
    console.log("Inside destination state",this.state.destination);
  };

  handleClick(){
    axios.get(`http://localhost:8080/searchTrains/${this.state.source}/${this.state.destination}`)
    .then(response =>{
      this.setState({trainData: response.data})
      console.log(this.state.trainData)
      this.props.updateTrainData(this.state.trainData);
     });
    // fetch(`http://localhost:8080/searchTrains/${this.state.source}/${this.state.destination}`)
    // //.then(response => response.json)
    // .then(data => this.setState({trainData:data}));
    console.log(this.state.trainData)
  };

  render() {
    
    var showTrain = <ShowTrains trains = {this.state.trainData}></ShowTrains>
    return (
        <div className="Search">
        
        <input type="text" placeholder="Source" id = "source" onBlur = {this.changeSource}/>
        <input type="text" placeholder="Destination" id = "dest" onBlur = {this.changeDestination}/>
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />    
       <button className = "mybutton" onClick = {this.handleClick} >Search</button>
        
        </div>
    );
  }
}
