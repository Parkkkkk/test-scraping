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
                <Link to ="/login">
                    Login
                </Link>
            </li>
            <li>
                <Link to="/join">
                    Join
                </Link>
            </li>
            </ul>

        )
        const userLink = (
            <ul>
            <li>
                <Link to ="/profile">
                    User
                </Link>
            </li>
            <li>
                <button onClick={this.logOut.bind(this)}>
                    Logout
                </button>
            </li>
            </ul>

        )

        return (
            <div>
                {localStorage.email ? userLink : loginLink}
            </div>
        )
    }
}

export default withRouter(Home)