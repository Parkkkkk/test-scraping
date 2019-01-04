import React , { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            requestId : "",
            requestPw : ""
        }
        // 메서드를 다른 메서드에서 사용할때
        // bind를 하지않으면 this가 정확히 무엇을 가르키는지 모르게된다 
        this.ChangeId = this.ChangeId.bind(this);
        this.ChangePw = this.ChangePw.bind(this);
    }


    ChangeId (event) {
        this.setState({requestId : event.target.value});
    }

    ChangePw (event) {
        this.setState({requestPw : event.target.value});
    }

    
    onSubmit () {
        var UserInfo = {
            userid : this.state.requestId,
            userpw : this.state.requestPw,
        };
        
        fetch('/auth/login' , {
            method : 'POST',
            headers : { 'Content-type' : 'application/json'},
            body : JSON.stringify(UserInfo) 
        })
        }

    
    render () {
        return (
            <div className="User_info">
                    <h2 className="Login_title"> Parkkkkk </h2>
                    <ul>
                        <li><input type="text" name ="requestId" placeholder ="EMAIL" value={this.state.requestId} onChange={this.ChangeId}></input></li>
                        <li><input type="password" name ="requestPw" placeholder ="PASSWORD" value={this.state.requestPw} onChange={this.ChangePw}></input></li>
                        <li><button className="Loginbutton" onClick={this.onSubmit.bind(this)}> Login </button>
                            <button><Link to="/join">Singup</Link></button></li>
                    </ul>
               
            </div>
        );
    }
}
Login.PropTypes = {
    onSuccess : PropTypes.function
}

export default Login;