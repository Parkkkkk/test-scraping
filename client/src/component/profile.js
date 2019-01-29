import React ,{ Component } from 'react';

class Profile extends Component {
        state = {
            email : '',
            nick : ''
        }

    componentDidMount () {
        const email = localStorage.email
        const nick = localStorage.nick
        this.setState({
            email : email,
            nick : nick
        })
    }

    render() {
        return (
            <div className ="constainer">
            <div className="profile_title">
                <h1 className="text-center">PROFILE</h1>
            </div>
            <table className="table">
                <tbody>
                    <tr>
                        <td>Email</td>
                        <td>{this.state.email}</td>
                    </tr>
                    <tr>
                        <td>Nick</td>
                        <td>{this.state.nick}</td>
                    </tr>
                </tbody>
            </table>
            </div>

        );
    }
}



export default Profile;