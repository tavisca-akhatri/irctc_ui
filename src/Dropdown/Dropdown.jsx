import React, { Component } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
// import this.TrainClassMap from '../Maps/this.TrainClassMap';

class Drowdown extends Component {

    TrainClassMap = {
        "FIRST_AC" : "1st AC",
        "SECOND_AC" : "2nd AC",
        "THIRD_AC" : "3rd AC",
        "1st AC" : "FIRST_AC",
        "2nd AC" : "SECOND_AC",
        "3rd AC" : "THIRD_AC",
    };
    

    state = {
        "trainClass" : this.props.trainClass
    }

    changeClass(trainClass){
        this.props.changeClass(trainClass);
    }


    render() {
        console.log(this.state);
        return (
            <DropdownButton id="dropdown-item-button" title={this.TrainClassMap[this.props.trainClass]}>
                <Dropdown.Item as="button" onClick={() => this.props.changeClass("FIRST_AC")} >{this.TrainClassMap["FIRST_AC"]}</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => this.props.changeClass("SECOND_AC")} >{this.TrainClassMap["SECOND_AC"]}</Dropdown.Item>
                <Dropdown.Item as="button" onClick={() => this.props.changeClass("THIRD_AC")} >{this.TrainClassMap["THIRD_AC"]}</Dropdown.Item>
            </DropdownButton>
        );
    }
}

export default Drowdown;