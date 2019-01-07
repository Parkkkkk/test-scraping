import React , { Component } from 'react'
import { Login_user } from './function'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            requestId : "",
            requestPw : ""
        }
        // 메서드를 다른 메서드에서 사용할때
        // bind를 하지않으면 this가 정확히 무엇을 가르키는지 모르게된다 
        this.ChangeId = this.ChangeId.bind(this);
        this.ChangePw = this.ChangePw.bind(this);
    }


    ChangeId (e) {
        this.setState({requestId : e.target.value});
    }

    ChangePw (e) {
        this.setState({requestPw : e.target.value});
    }

    
    onSubmit (e) {
        e.preventDefault();

        const UserInfo = {
            requestId : this.state.requestId,
            requestPw : this.state.requestPw,
        };
        
        Login_user (UserInfo)
        .then(res => {
            if(res){
            this.props.history.push('/profile')
        }})
        }

    
    render () {
        return (
            <div className="User_info">
                <form noValidate onSubmit={this.onSubmit}>
                    <h2 className="Login_title"> Parkkkkk </h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name ="requestId" placeholder ="EMAIL" value={this.state.requestId} onChange={this.ChangeId}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Passwrod</label>
                            <input type="password" name ="requestPw" placeholder ="PASSWORD" value={this.state.requestPw} onChange={this.ChangePw}></input>
                        </div>
                        <button type="submit" 
                        className="Loginbutton" >
                             Login 
                        </button>
                </form>
            </div>
        );
    }
}
export default Login