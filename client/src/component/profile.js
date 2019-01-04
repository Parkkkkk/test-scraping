import React ,{ Component } from 'react';

class Profile extends Component {
    constructor () {
        super(...arguments);
        this.state = {
            user : []
        }
    }

    componentDidMount () {
        fetch('/auth/profile' ,{
            method : 'GET',
            type : 'json',
            headers : {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'}
        })
        .then(res => res.json())
        .then(user => this.setState({ user }))
    }



    render() {
        return (
            <div className ="User_profile">
                {this.state.user.map(users => 
                <ul>
                    <li>{users.email}</li>
                    <li>{users.nick} 님 안녕하세요!</li>
                </ul>
                )}
                <div className="logout_button">
                    <input type="button" className="userlogout" value="Logout" onClick={()=>{this.props.onLogout()}}></input>
                </div>
            </div>
        );
    }
}



export default Profile;