import React , { Component } from 'react';
import Login from './login';
import Logout from './profile';

class Loginhome extends Component {
    componentWillMount () {
        this.state = {
            userId : "",
            userNick : ""
        }
    };
    onLogin () {
        this.setState({
            userId : "",
            userNick : ""
        })
    }

    onLogout () {
        fetch('/auth/logout' , {
            method : 'GET',
            
        })
        this.setState({
            userId : "",
            userNick : ""
        })
    }




    render () {
        return (
            <div></div>
        )
    }
}

export default Loginhome;