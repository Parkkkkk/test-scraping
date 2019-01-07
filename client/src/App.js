import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {  Join , Login , Profile} from '../src/component'
import Home from '../src/component/home';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" compoenet={Home} />
                    <div className="container">
                        <Route exact path="/join" compoenet={Join} />
                        <Route exact path="/login" compoenet={Login} />
                        <Route exact path="/profile" compoenet={Profile} />
                    </div> 
                </div>
            </Router>

        )
    }
}


export default App;