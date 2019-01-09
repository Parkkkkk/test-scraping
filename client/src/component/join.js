import React , { Component } from 'react';
import { register } from './function';
import './form.css';

class Join extends Component {
    constructor() {
        super();
        this.state = {
            email : '',
            password : '',
            nick : ''
        }
        this.Change = this.Change.bind(this);
        this.Onsubmit_join = this.Onsubmit_join.bind(this);
    }


    Change (e) {
        this.setState({[e.target.name] : e.target.value})
    }
   
    Onsubmit_join (event) {
        event.preventDefault()

        var join_info = {
            email : this.state.email,
            password : this.state.password,
            nick : this.state.nick
        }

        register (join_info)
            .then(res => {this.props.history.push('/login');})
                
    }

    render () {
        return (
            <div className="User_singup">
                <form className="form-sign" noValidate onSubmit={this.Onsubmit_join}>
                    <div className="text-center mb-4">
                        <h2 className="h3 mb-3 font-weight-normal"> Parkkkkk </h2>
                    </div>

                    <div className="form-label-group">
                            <input
                            className="form-control" 
                            type="email" 
                            name ="email" 
                            placeholder ="EMAIL" 
                            value={this.state.email} 
                            onChange={this.Change}></input>
                            <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-label-group">
                            <input 
                            className="form-control"
                            type="password" 
                            name ="password" 
                            placeholder ="PASSWORD" 
                            value={this.state.password} 
                            onChange={this.Change}></input>
                            <label htmlFor="password">Passwrod</label>
                    </div>
                    <div className="form-label-group">
                            <input
                            className="form-control" 
                            type="text" 
                            name ="nick" 
                            placeholder ="Nick name" 
                            value={this.state.nick} 
                            onChange={this.Change}></input>
                            <label htmlFor="nick">Nick</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
                    <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
  
                </form>
            </div>
        );
    }
}



export default Join;