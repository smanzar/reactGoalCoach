import React, { Component } from 'react';
import {RefGoals} from '../firebase';
import { connect } from 'react-redux'
import { setGoals } from '../action';
import GoalItem from './goalItem';

class GoalList extends Component{
    componentDidMount(){
        RefGoals.on('value',snap => {
            let goals=[];
            snap.forEach(goal =>{
                const { email, title } = goal.val();
                const serverKey =goal.key;
                goals.push({email, title, serverKey });
            })
            console.log('goals',goals);
            this.props.setGoals(goals);
        })
    }
    render(){
        return(
            <div>
               {
          this.props.goals.map((goal, index) => {
            return (
              <GoalItem key={index} goal={goal} />
            )
          })
        }
            </div>
        )
    }
}

function mapStateToProps(state){
    const { goals } =state;
    return{
        goals
    }
}

export default connect(mapStateToProps , { setGoals })(GoalList);