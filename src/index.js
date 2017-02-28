import React, {Component} from 'react'
import {render} from 'react-dom'
import MainLayout from './components/app'
import Home from './components/home'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path='/' component={Home} />
    </Route>
  </Router>
),document.getElementById('root'));
