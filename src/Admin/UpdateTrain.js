import React, { Component } from 'react'
import Popup from "reactjs-popup";
import ShowTrains from '../ShowTrain/ShowTrain';

export default class UpdateTrain extends Component {
    render() {
        return (
            <div>
                <input type = "text" placeholder="Enter train no to update"/>
                <Popup
                    trigger={<button>Update Train</button>}
                    modal closeOnDocumentClick
                >
                <ShowTrains/>
                </Popup>
            </div>
        )
    }
}
