/**
 * @flow
 * main.js
 * Entry point for the entire application
 * Browserify will watch this file and this file only
 * unless you call/import other files in here
 */

import React, {Component} from "react"
import ReactDOM, {render} from 'react-dom'
import Router, {Link, DefaultRoute, RouteHandler, Route} from "react-router"
import createBrowserHistory from 'history/lib/createBrowserHistory'

import {MainSection} from './components/body/MainSection'
import {TitleSection} from './components/body/TitleSection'

class App extends Component {
  render() {
    return (
      <div>
        {/*<MainSection/>*/}
        {/*{this.props.children}//loads children values for routing*/}
      <TitleSection />
      </div>
    )
  }
}

/**
 * Routes are defined here
 */

let history = createBrowserHistory()

render((
  <Router history={history}>
    <Route path="/" component={App}>

    </Route>
  </Router>
), document.getElementById("main"))
