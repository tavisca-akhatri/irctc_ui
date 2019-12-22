import React from 'react'
import './App.css';
import {Switch, Route} from 'react-router'
// import Search from './Search/Search';
import SearchPage from './SearchPage/SearchPage';

function Main() {
    return (
        <div>
            <main>
                <Switch>
                    <Route exact path="/" component={SearchPage}></Route>
                </Switch>
            </main>
        </div>
    )
}

export default Main
