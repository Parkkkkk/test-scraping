import React, { Component } from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Home from '../src/component/home';
import Join from '../src/component/join';
import Login from '../src/component/login';
import Profile from '../src/component/profile';




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