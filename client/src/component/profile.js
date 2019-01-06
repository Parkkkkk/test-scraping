import React ,{ Component } from 'react';
import {Logout_user, user_profile} from './function'

class Profile extends Component {
    constructor () {
        super();
        this.state = {
            user : []
        }
    }

    componentDidMount () {
        user_profile()
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
                    <input type="button" className="userlogout" value="Logout" onClick={()=>{Logout_user()}}></input>
                </div>
            </div>
        );
    }
}



export default Profile;