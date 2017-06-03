import React, { Component } from 'react';
import{ connect } from 'react-redux'
import {RefGoals } from '../firebase';

class AddGoal extends Component{
    constructor(props){
        super(props)
        this.state={
            title:''
        }
    }

    addGoal(){
        //console.log('state',this.state);
        const {title} = this.state;
        const {email } =this.props.user;
        RefGoals.push({email,title})
    }

    render(){
        return(
            <div className="container form-group">
                <div className="row">
                    <div className="form-group">
                    <div className="col-md-8 text-center">
                        <input type="text" placeholder="Add Goals Here ..." className="form-control" onChange={event => this.setState({title:event.target.value})}/>
                    </div>
                    <div className="col-md-4 text-left">
                        <button className="btn-primary btn" onClick={() => this.addGoal()}>
                            Add Goal
                        </button>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    const {user} =state;
    return{
        user
    }
}

export default connect(mapStateToProps,null) (AddGoal);