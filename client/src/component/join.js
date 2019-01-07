import React , { Component } from 'react';
import { register } from './function';

class Join extends Component {
    constructor() {
        super();
        this.state = {
            email : '',
            password : '',
            nick : ''
        }
        this.ChangeId = this.ChangeId.bind(this);
        this.ChangePW = this.ChangePW.bind(this);
        this.ChangeNick = this.ChangeNick.bind(this);
    }


    ChangeId(e) {
        this.setState({ email : e.target.value});
    }

    ChangePw (e) {
        this.setState({ password : e.target.value});
    }

    ChangeNick (e) {
        this.setState({ nick : e.target.value});
    }

    Onsubmit_join (e) {
        e.preventDefault()

        var join_info = {
            email : this.state.email,
            password : this.state.password,
            nick : this.state.nick
        }

        register (join_info)
            .then(res => {
                    this.props.history.push('/login');
            })
                
    }


    
    render () {
        return (
            <div className="User_info">
                <form noValidate onSubmit={this.Onsubmit_join}>
                    <h2 className="Join_title"> Parkkkkk </h2>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" 
                            name ="email" 
                            placeholder ="EMAIL" 
                            value={this.state.email} 
                            onChange={this.ChangeId}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Passwrod</label>
                            <input type="password" 
                            name ="password" 
                            placeholder ="PASSWORD" 
                            value={this.state.password} 
                            onChange={this.ChangePw}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nick">Nick</label>
                            <input type="text" 
                            name ="nick" 
                            placeholder ="Nick name" 
                            value={this.state.nick} 
                            onChange={this.ChangeId}></input>
                        </div>
                        <button type="submit" 
                        className="Joinbutton" >
                             Join 
                        </button>
                </form>
            </div>
        );
    }
}



export default Join;