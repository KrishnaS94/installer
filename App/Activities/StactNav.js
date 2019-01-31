import React, { Component } from "react";
import { createStackNavigator, createAppContainer,DrawerNavigator } from "react-navigation";


// import Home from './App/Activities/Home';
// import Feedback from './App/Activities/Feedback';
import mainPage from './App/Activities/mainPage';
// import FeedbackTQ from './App/Activities/FeedbackTQ';
// import loadPage from './App/Activities/loadPage';
 import Menu from './App/Activities/Menu';



export default StackHome = createStackNavigator({
  
  Menu:{
    screen:Menu,
    navigationOptions: () => ({
        title:'Home'
    })
  },
  
    mainPage:{
      screen:mainPage,
      navigationOptions: () => ({
          title:'Next'
      })
    }
    
});
 

