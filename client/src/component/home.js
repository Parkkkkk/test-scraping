import React , { Component } from 'react'
import { Login , Profile }from './index';


class Home extends Component {

    state = {
        userId : 'dk@dk.dk'
    }

    render() {
        return (
            <div>
                {this.state.userId ? <Profile /> : <Login />}
            </div>
        )
    }
}

export default Home;
