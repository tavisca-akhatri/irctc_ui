import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
class Results extends Component {
    state = {
        trainData : []
    }


    trainDetails(){
        return (
            this.props.trainData.map((train,index) => 
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{train[0]}</td>
                    <td>{train[1]}</td>
                    <td>{train[2]}</td>
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