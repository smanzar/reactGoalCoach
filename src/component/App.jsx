import React , { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddGoal from './addGoal';
import GoalList from './goalList';
import CompleteGoalList from './CompleteGoal';

class App extends Component{

    signOut(){
        firebaseApp.auth().signOut();
    }

    render(){
        return(
            <div className="container">
                <h3>Goals</h3>
               <AddGoal />
               <hr />
               <h4>Goals</h4>
                <GoalList />
                <hr />
                <h4>Completed Goals</h4>
                <CompleteGoalList />
                <hr />
                <div className="row text-right">
                    <button className="btn btn-danger" onClick={() => this.signOut()}>
                       sign Out 
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log('state',state);
    return {}
}

export default connect(mapStateToProps,null)( App);