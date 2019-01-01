import React , { Component } from 'react';
import PropTypes from 'prop-types';

//

class Login extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            requsetId : '',
            requestPw : ''
        }
        // 메서드를 다른 메서드에서 사용할때
        // bind를 하지않으면 this가 정확히 무엇을 가르키는지 모르게된다 
        this.ChangeId = this.ChangeId.bind();
        this.ChangePw = this.ChangePw.bind();
    }


    ChangeId (event) {
        this.setState({requestId : event.target.value});
    }

    ChangePw (event) {
        this.setState({requestPw : event.target.value});
    }

    
    onSubmit () {
        var UserInfo = {
            'userid' : this.state.requsetId,
            'userpw' : this.state.requestPw
        };
        fetch('/auth/login' , {
            method : 'POST',
            headers : { 'Content-type' : 'application/json'},
            body : JSON.stringify(UserInfo) 
        })
        .then(response => response.json())
        .then((responseData)=>{
	    	if(responseData.nick){
	    		this.props.onSuccess(this.state.requestID);
            }});
        }

    
    render () {
        return (
            <div className="Login_column">
                <ul>
                    <li className = "Login_title"> Parkkkkk </li>
                    <li><input type="text" name ="requestId" placeholder ="ID" value={this.state.requestId} onChange={this.ChangeId}></input></li>
                    <li><input type="text" name ="requestPw" placeholder ="PASSWORD" value={this.state.requestPw} onChange={this.ChangePw}></input></li>
                    <li><button className="Loginbutton" onClick={this.onSubmit.bind(this)}로그인></button></li>
                </ul>
            </div>
        );
    }
}
Login.PropTypes = {
    onSuccess : PropTypes.function
}

export default Login;