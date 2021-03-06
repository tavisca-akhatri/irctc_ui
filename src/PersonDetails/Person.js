import React, { Component } from 'react';
import 'react-dropdown/style.css';
import Dropdowngender from "../Dropdown/Dropdowngender";

class Person extends Component {
  state = {
    name: '',
    age : '',
    gender: 'Male',
    options: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
      
    ],
    optionSelected: 0,
  }

  setName = (e) =>{
    this.setState({name:e.target.value})
  }

  setAge = (e) =>{
    this.setState({name: e.target.value})
  }

  changeClass(gender){
    this.setState({
      gender : gender
    })
  }

  render() {
    this.changeClass = this.changeClass.bind(this);
    const options = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
      ]
    
    return (
      <div> 
<table class = "TFtable">
<tbody>
<tr>
<td> <input type="text" placeholder= "Enter Name" onChange = {(e) => this.setName(e)}></input></td>
<td> <input type="text" placeholder= "Enter Age" onChange = {(e) => this.setAge(e)}></input></td>
<td> <Dropdowngender
 dropdownClass = {this.state.gender} 
 changeClass = {this.changeClass} 
 value={this.state.options[this.state.optionSelected]}
 onChange={this._onSelect} placeholder="Male" /></td>
</tr>
</tbody>
</table>

      </div>
    );
  }
}

export default Person;