import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router'
import Search from './Search/Search';

function Main() {
    return (
        <div>
            <main>
                <Switch>
                    <Route exact path="/" component={Search}></Route>
                </Switch>
            </main>
        </div>
    )
}

export default Main
