import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router'
import Search from './Search/Search';
import SearchPage from './SearchPage/SearchPage';
import Booking from './Booking/Booking';

function Main() {
    return (
        <div>
            <main>
                <Switch>
                    <Route exact path="/" component={SearchPage}></Route>
                    <Route exact path="/booking" component = {Booking}></Route>
                </Switch>
            </main>
        </div>
    )
}

export default Main
