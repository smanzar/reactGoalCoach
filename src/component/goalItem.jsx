import React , { Component } from 'react';
import {completeGoalRef ,RefGoals } from '../firebase';
import { connect } from 'react-redux';

class GoalItem extends Component{
    completeGoal(){
        const {email} = this.props.user;
        const {title , serverKey} = this.props.goal;
        RefGoals.child(serverKey).remove();
        completeGoalRef.push({email,title});
    }

    render(){
        const {email , title } = this.props.goal;
        return(
            <div className="container">
                <div className="row" style={{lineHeight: '3em'}}>
                    <div className="col-md-8">
                        <div className="col-md-4 text-left">
                            <strong>{title} .</strong>
                        </div>
                        <div className="col-md-4 text-center">
                            <span> Submitted by <em> {email}</em> </span>
                        </div>
                        
                    </div>
                    <div className="col-md-4 text-left">
                         <button className="btn-primary btn btn-sm" onClick={() => this.completeGoal()}>Completed</button>
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

export default connect(mapStateToProps,null)(GoalItem);