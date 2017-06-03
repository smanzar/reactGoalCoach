import React , { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../action';
import { completeGoalRef } from '../firebase';

class CompleteGoalList extends Component{
    componentDidMount(){
        completeGoalRef.on('value' , snap => {
            let completeGoals = [];
            snap.forEach(completeGoal => {
                const { email ,title } = completeGoal.val();
                completeGoals.push({email , title})
            })
            this.props.setCompleted(completeGoals);
        })
    }

    clearCompleted(){
        completeGoalRef.set([]);
    }

    render(){
        return(
             <div className="container">
                {
                this.props.completeGoals.map((completeGoal, index) => {
                    const { title, email } = completeGoal;
                    return (
                    <div key={index}>
                        <div className="col-md-2 text-left">
                            <strong>{title} .</strong> 
                        </div>
                        <div className="col-md-10 text-left">
                            Completed by <em>{email}</em>
                        </div>
                    </div>
                    )
                })
                }
                <div className="row text-center">
                    <button className="btn btn-primary" onClick={() => this.clearCompleted()}>
                        Clear All
                    </button>
                </div>
             </div>
        )
    }
}

function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  }
}

export default connect(mapStateToProps, { setCompleted })(CompleteGoalList);;
