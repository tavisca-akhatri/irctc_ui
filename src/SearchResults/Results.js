import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import Popup from "reactjs-popup";
import {Link} from 'react-router-dom';
import ShowStops from "../ShowStops/ShowStops";

class Results extends Component {
    state = {
        trainData : [],
        index : 0
    }

    clickHandler(){

    }
    

    trainDetails(){
        return (
            this.props.trainData.map((train,index) => 
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td><Popup trigger={<p> {train[0]} </p>} modal closeOnDocumentClick>
                            <ShowStops trains={train} index={index}></ShowStops>
                        </Popup>
                    </td>
                    <td>{train[1]}</td>
                    <td>{train[2]}</td>
                    <td><Link  to={{pathname: "booking", state: { train: train} }}  >Book</Link></td>
                </tr>
            )
        )
    }


    render() {
        if(this.props.trainData.length > 0){
            return (
                <Table striped bordered hover style={{marginLeft: 0}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Train Id</th>
                            <th>Train Name</th>
                            <th>Availability</th>
                            <th>Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.trainDetails()}
                    </tbody>
                </Table>
            );
        }

        else{
            return(
                <React.Fragment></React.Fragment>
            );
        }
        
    }
}

export default Results;