import React , { Component } from 'react'
import { Login_user } from './function'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email : "",
            password : ""
        }
        // 메서드를 다른 메서드에서 사용할때
        // bind를 하지않으면 this가 정확히 무엇을 가르키는지 모르게된다 
        this.Change = this.Change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    Change(e) {
        this.setState({[e.target.name] : e.target.value})
    }

    
    onSubmit (e) {
        e.preventDefault();

        const UserInfo = {
            email : this.state.email,
            password : this.state.password,
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
                            <input type="email" name ="email" placeholder ="EMAIL" value={this.state.email} onChange={this.Change}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Passwrod</label>
                            <input type="password" name ="password" placeholder ="PASSWORD" value={this.state.password} onChange={this.Change}></input>
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