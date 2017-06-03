import { combineReducers } from 'redux';
import user from './reducer_user';
import goals from './reducer_goal';
import completeGoals from './reducer_complete_goals';

export default combineReducers({
    user,
    goals,
    completeGoals
})