import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
// import this.TrainClassMap from '../Maps/this.TrainClassMap';

class Dropdowngender extends Component {

    DropdownClassMap = {
        "Male" : "M",
        "Female" : "F",
    };
    

    state = {
        "dropdownClass" : this.props.dropdownClass
    }

    changeClass(dropdownClass){
        this.props.changeClass(dropdownClass);
    }


    render() {
        console.log(this.state);
        return (
            <DropdownButton id="dropdown-item-button" title={this.DropdownClassMap[this.props.dropdownClass]}>
                <Dropdown.Item as="button" onClick={() => this.props.changeClass("Male")} >{this.DropdownClassMap["M"]}</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => this.props.changeClass("Female")} >{this.DropdownClassMap["F"]}</Dropdown.Item>
                
            </DropdownButton>
        );
    }
}

export default Dropdowngender;