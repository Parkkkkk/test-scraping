import React , { Component } from 'react';
import PropTypes from 'prop-types';

class Join extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            email : '',
            password : '',
            nick : ''
        }
        this.ChangeEmail = this.ChangeEmail.bind(this);
        this.ChangePassword = this.ChangePassword.bind(this);
        this.ChangeNick = this.ChangeNick.bind(this);
    }


    ChangeEmail(event) {
        this.setState({ email : event.target.value});
    }

    ChangePassword (event) {
        this.setState({ password : event.target.value});
    }

    ChangeNick (event) {
        this.setState({ nick : event.target.value});
    }

    submit_info () {
        var join_info = {
            email : this.state.email,
            password : this.state.password,
            nick : this.state.nick
        }

        console.log(join_info);

        fetch ('/auth/join', {
            method : 'POST',
            headers : { 'Content-type' : 'application/json'},
            body : JSON.stringify(join_info)
            })
            .then(res => {
                if(res) {
                    this.props.history.push(`/`);
                }
            })
                
    }


    render () {
        return (
            <div className ="Join_form">
                <ul>
                    <li className="Join_title">Join Form</li>
                    <li><input type="text" name ="email" placeholder="ID" value={this.state.email} onChange={this.ChangeEmail}></input></li>
                    <li><input type="password" name = "password" placeholder="PASSWORD" value={this.state.password} onChange={this.ChangePassword} ></input></li>
                    <li><input type="text" name = "nick" placeholder ="Nick name" value={this.state.nick} onChange={this.ChangeNick} ></input></li> 
                    <li><button className="Joinbutton" onClick={this.submit_info.bind(this)}> 회원가입 </button></li>   
                </ul>
            </div>
        );
    }
}

Join.PropTypes = {
    email : PropTypes.string.isRequired,
    password : PropTypes.string.isRequired,
    nick : PropTypes.string.isRequired
}

export default Join;