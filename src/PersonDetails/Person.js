import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class Person extends Component {
  render() {
    const options = [
        { value: 'Male', label: 'M' },
        { value: 'Female AC', label: 'F' },
      ]
    
    return (
      <div> 
<table>
<tbody>
<tr>
<td> <input type="text" placeholder= "Enter Name"></input></td>
<td> <input type="text" placeholder= "Enter Age"></input></td>
<td> <Dropdown options={options} onChange={this._onSelect} placeholder="Select Gender" /></td>
</tr>
</tbody>
</table>

      </div>
    );
  }
}

export default Person;