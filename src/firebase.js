import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB1LlSmdpEGO7yWYwFVlu8fV8tDx23a35g",
    authDomain: "excellence-school.firebaseapp.com",
    databaseURL: "https://excellence-school.firebaseio.com",
    projectId: "excellence-school",
    storageBucket: "excellence-school.appspot.com",
    messagingSenderId: "280928472838"
  };

export const firebaseApp = firebase.initializeApp(config);
export const RefGoals = firebase.database().ref('goals');
export const completeGoalRef= firebase.database().ref('completeGoals')
