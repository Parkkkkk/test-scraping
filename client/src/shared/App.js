import React , { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home , Join } from '../pages';

class App extends Component {
    render () {
        return (
            <div>
                <Route exact path='/' Component={Home}/>
                <Route path='/join' Component={Join}/>
            </div>
        )
    }
}

export default App;