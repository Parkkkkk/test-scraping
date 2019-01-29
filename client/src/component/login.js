import React , { Component } from 'react'
import { Login_user } from './function'
import './form.css'

class Login extends Component {
        state = {
            email : "",
            password : ""
        }
   

    Change = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    
    onSubmit = (e) => {
        e.preventDefault();

        let UserInfo = {
            email : this.state.email,
            password : this.state.password,
        };
        
        Login_user (UserInfo)
        .then(res => {this.props.history.push('/')})
        }

    
    render () {
        return (
            <div className="User_info">
                <form className="form-sign" onSubmit={this.onSubmit}>
                    <div className="text-center mb-4">
                    <h2 className="h3 mb-3 font-weight-normal"> Parkkkkk </h2>
                    </div>

                        <div className="form-label-group">
                            
                            <input className="form-control"
                            type="email" 
                            name ="email" 
                            placeholder ="EMAIL" 
                            value={this.state.email} 
                            onChange={this.Change}></input>
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-label-group">
                            <input className="form-control" 
                            type="password" 
                            name ="password" 
                            placeholder ="PASSWORD" 
                            value={this.state.password} 
                            onChange={this.Change}></input>
                            <label htmlFor="password">Passwrod</label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
                </form>
            </div>
        );
    }
}

export default Login;