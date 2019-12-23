import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class Person extends Component {
  state = {
    name: '',
    age : '',
    gender: 'M'
  }

  setName = (e) =>{
    this.setState({name:e.target.value})
  }

  setAge = (e) =>{
    this.setState({name: e.target.value})
  }


  render() {
    const options = [
        { value: 'Male', label: 'M' },
        { value: 'Female', label: 'F' },
      ]
    
    return (
      <div> 
<table>
<tbody>
<tr>
<td> <input type="text" placeholder= "Enter Name" onChange = {(e) => this.setName(e)}></input></td>
<td> <input type="text" placeholder= "Enter Age" onChange = {(e) => this.setAge(e)}></input></td>
<td> <Dropdown options={options} onChange={this._onSelect} placeholder="M" /></td>
</tr>
</tbody>
</table>

      </div>
    );
  }
}

export default Person;