import React ,{ Component } from 'react';

class Profile extends Component {
    constructor () {
        super(...arguments),
        this.state = {
            user = []
        }
    }

    componentDidMount () {
        fetch('/auth/profile' ,{
            method : 'get',
            type : 'json',
            headers : {
                'Accept' : 'application/json',
                'Content-type' : 'application/json'}
        })
        .then(res => res.json())
    }



    render() {
        return (
            <div></div>
        );
    }
}

export default Profile;