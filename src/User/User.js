import React, { Component } from 'react'

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
                <table>
                    <tr>
                        <td>Train No</td>
                        <td>Train Name</td>
                        <td>Date</td>
                    </tr>
                </table>
            </div>

        )
    }
}
