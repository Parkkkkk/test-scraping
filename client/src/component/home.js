import React , { Component } from 'react'
import { Link , withRouter } from 'react-router-dom'

class Home extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('user_info')
        this.props.history.push('/')
    }

    render () {
        const loginLink = (
            <ul>
            <li>
                <Link to ="/login" className = "nav-link">
                    Login
                </Link>
            </li>
            <li>
                <Link to="/join" className = "nav-link">
                    Join
                </Link>
            </li>
            </ul>

        )
        const userLink = (
            <ul>
            <li>
                <Link to ="/profile" className = "nav-link">
                    User
                </Link>
            </li>
            <li>
                <button onClick={this.logOut.bind(this)} className="nav-link">
                    Logout
                </button>
            </li>
            </ul>

        )

        return (
            <div>
                {localStorage.user_info ? userLink : loginLink}
            </div>
        )
    }
}

export default withRouter(Home)