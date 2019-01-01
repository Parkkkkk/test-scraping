import React , { Component } from 'react';


class Join extends Component {
    constructor() {
        this.state = {
            email : "",
            password : "",
            nick : ""
        }
    }


    ChangeEmail() {
        this.setState({ email : event.target.value});
    }

    ChangePassword () {
        this.setState({ password : event.target.value});
    }

    ChangeNick () {
        this.setState({ nick : event.target.value});
    }

    submit_info () {
        var join_info = {
            email : this.state.email,
            password : this.state.password,
            nick : this.state.nick
        }

        fetch ('/auth/join', {
            method : 'POST',
            headers : { 'Content-type' : 'application/json'},
            body : JSON.stringify(join_info)
            })

    }


    render () {
        return (
            <div className ="Join_form">
                <ul>
                    <li className="Join_title">Join Form</li>
                    <li><input type="text" name ="user_email" placeholder="ID" value={this.state.email} onChange={this.ChangeEmail}></input></li>
                    <li><input type="text" name = "user_password" placeholder="PASSWORD" value={this.state.password} onChange={this.ChangePassword} ></input></li>
                    <li><input type="text" name = "user_nick" placeholder ="Nick name" value={this.state.nick} onChange={this.ChangeNick} ></input></li> 
                    <li><button className="Joinbutton" onClick={this.submit_info.bind(this)}></button></li>   
                </ul>
            </div>
        );
    }
}

export default Join;