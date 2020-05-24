/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
/* eslint-disable no-undef */
/* eslint-disable no-multi-assign */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import Test from './Test';
import Test1 from './Test/test2';
import '../assets/scss/main.scss';

global.$ = global.JQuery = window.$ = window.JQuery = require('jquery');
// import '../assets/js/plugins';


const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/test" component={Test} />
    <Route exact path="/test1" component={Test1} />
  </Switch>
);


export default App;
