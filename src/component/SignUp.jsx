import React , { Component } from 'react';
import {Link} from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            error:{
                message:''
            }
        }
    }
    SignUp(){
        console.log('this.state', this.state);
    const { email, password } = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
    }
    render(){
        return(
            <div className="container text-center" style={{
                marginTop: '3em'
            }}>
                <div className="form-group"  style={{
                    border: '1px solid black',
                    padding: '2em 9em 5em 9em',
                    backgroundColor: 'rgba(0, 0, 0, 0.09)',
                    boxShadow: '20px 10px 6em 2px rgba(0,0,0,.5)'
                }}>
                <h2>Sign up</h2>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email" onChange={event => this.setState({email: event.target.value})}/>
                     <br/>
                    <input type="password" className="form-control" placeholder="Password" onChange={event => this.setState({password: event.target.value})}/>
                    <div className="bg-danger">{this.state.error.message}</div>
                    <br /> <button className="btn btn-primary" type="button" onClick={() => this.SignUp()}>Submit</button>
                    
                    <div className="row">
                        <Link to={'signin'}>
                        <br/> Already have a Account
                    </Link>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}


export default SignUp;