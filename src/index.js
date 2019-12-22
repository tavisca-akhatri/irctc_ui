import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Admin/Admin';
import {BrowserRouter} from 'react-router-dom';

//ReactDOM.render(<Home/>, document.getElementById('root'));
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
