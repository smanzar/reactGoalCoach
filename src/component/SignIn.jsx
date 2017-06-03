import React , { Component } from 'react';
import {Link} from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            error:{
                message:''
            }
        }
    }

    signIn(){
        const {email,password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email,password).catch(error =>{
            this.setState({error})
        })
    }

    render(){
        return(
            <div className="container text-center" style={{
                marginTop: '3em'
            }}>
                <div className="form-group" style={{
                    border: '1px solid black',
                    padding: '2em 9em 5em 9em',
                    backgroundColor: 'rgba(0, 0, 0, 0.09)',
                    boxShadow: '20px 10px 6em 2px rgba(0,0,0,.5)'
                }}>
                <h2>SignIn</h2>
                <div className="form-group">
                    <input type="text" placeholder="Email" className="form-control" onChange={event => this.setState({email:event.target.value})} />
                    <br />
                    <input type="password" placeholder="Password" className="form-control" onChange={event => this.setState({password: event.target.value})}  />
                    <br />
                    <div className="row">
                        <div className="text-center bg-danger">
                            {this.state.error.message}
                        </div>
                    </div>
                    <div className="row">
                        <div className="text-center">
                            <button className="btn btn-primary" onClick={()=> this.signIn()} >Sign In</button>
                        </div>
                    </div> <br/>
                    <div className="row">
                        <div className="text-center">
                            <Link to={'signup'}>New User ? <br/> Sign Up Now For Free</Link>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        )
    }
}


export default SignIn;