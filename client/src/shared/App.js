import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home , Join } from '../pages/index';

const App = () => {
    return (
        <Router>
            <div>
            <Join />
            <Home />
            <Route path='/join' Component={Join} />
            </div>
        </Router>
        );
}

export default App;