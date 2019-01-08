import React, { Component } from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Header from '../src/component/header';
import Item from '../src/component/item';
import Join from '../src/component/join';
import Login from '../src/component/login';
import Profile from '../src/component/profile';




class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" component={Item} />
                        <Route exact path="/join" component={Join} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                    </div> 
                </div>
            </Router>

        )
    }
}


export default App;