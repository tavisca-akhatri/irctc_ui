import React, { Component } from 'react'
import ShowTrains from '../ShowTrain/ShowTrain'

export default class User extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <tr>
                        <td>Name</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>User ID</td>
                        <td></td>
                    </tr>
                </table>
                <h2>User Details</h2>
                <table style = "margin:0px">
                    <tr>
                        <td>Train No</td>
                        <td>Train Name</td>
                        <td>Date</td>
                    </tr>
                    <tr>
                        <td></td>
                        {/* <td><Popup trigger={<p> {s.id} </p>} modal closeOnDocumentClick>
                                <ShowTrains trains={this.props.trains} index={index}></ShowStops>
                            </Popup>
                        </td>   */}
                        <td></td>
                    </tr>
                </table>
            </div>

        )
    }
}
