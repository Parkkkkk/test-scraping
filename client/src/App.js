import React , { Component }from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Home , Join , Login } from '../src/component'

class App extends Component {


    render () {
    return (
        <Router>
            <div className ="container" >
            <Route path="/" Component={Home}/>
            <Login />
            <Route path="/join" Component={Join}/>
            </div>
        </Router>
        );
    }
}


export default App;