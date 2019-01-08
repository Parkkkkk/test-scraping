import React , { Component } from 'react'
import { Link , withRouter } from 'react-router-dom'
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
                <Link to ="/" className="item">Home</Link>
                <Link to ="/login" className="item">Login</Link>
                <Link to="/join" className="item">Join</Link>     
            </div>
        )
        const login = (
            <div className="header">
                <Link to ="/" className="item">Home</Link>
                <Link to ="/profile" className="item">My</Link>
                <button className="item" onClick={this.logOut.bind(this)}>Logout</button>
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