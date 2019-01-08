import React , { Component } from 'react'
import { NavLink , withRouter } from 'react-router-dom'
import './header.css'

class Header extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('email')
        localStorage.removeItem('nick')
        this.props.history.push('/')
    }

    render () {
        const  Notlogin= (
            <div className="header">
                <NavLink exact to ="/" className="item" activeClassName="active">Home</NavLink>
                <NavLink to ="/login" className="item" activeClassName="active">Login</NavLink>
                <NavLink to="/join" className="item" activeClassName="active">Join</NavLink>     
            </div>
        )
        const login = (
            <div className="header">
                <NavLink exact to ="/" className="item" activeClassName="active">Home</NavLink>
                <NavLink to ="/profile" className="item" activeClassName="active">My</NavLink>
                <NavLink to ="/" className="item" activeClassName="active" onClick={this.logOut.bind(this)}>Logout</NavLink>
            </div>
        )

        return (
            <div className="container">
                {localStorage.email ? login : Notlogin}
            </div>
        )
    }
}

export default withRouter(Header)