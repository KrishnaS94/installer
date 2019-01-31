import React, { Component } from "react";
import { createStackNavigator,StackNavigator,createDrawerNavigator, createAppContainer,DrawerNavigator } from "react-navigation";
import { ScrollView, Text, View, StyleSheet,Image,TouchableOpacity } from "react-native";

import Home from './App/Activities/BuildingOwnerBooking/Home';
import Feedback from './App/Activities/Feedback/Feedback';
import mainPage from './App/Activities/BuildingOwnerBooking/mainPage';
import FeedbackTQ from './App/Activities/Feedback/FeedbackTQ';
import loadPage from './App/Activities/BuildingOwner/loadPage';
 import Menu from './App/Activities/BuildingOwner/Menu';
 import Profile from './App/Activities/BuildingOwnerBooking/Profile';
 import Service from './App/Activities/BuildingOwnerBooking/Service';
 import settings from './App/Activities/BuildingOwnerBooking/settings';
 import logout from './App/Activities/BuildingOwnerBooking/logout';
 import StatusPage from "./App/Activities/Installation/StatusPage";
 import statusTQ from "./App/Activities/Installation/statusTQ"
 import Consentform from "./App/Activities/BuildingOwnerBooking/Consentform";
 import calender from "./App/Activities/BuildingOwnerBooking/calender";
 import Payment from "./App/Activities/BuildingOwnerBooking/Payment";
 import Login from "./App/Activities/BuildingOwner/Login";
 import Forgotpassword from "./App/Activities/BuildingOwner/Forgotpassword";
 import LoadingCal from "./App/Activities/BuildingOwnerBooking/LoadingCal";
 import List from "./App/Activities/BuildingOwnerBooking/List";
 import Appeal from "./App/Activities/UserHomepage/Appeal";
 import Selectservice from "./App/Activities/UserHomepage/Selectservice";
 import AddBuilding from "./App/Activities/BuildingOwnerBooking/AddBuilding";
 import assessment from "./App/Activities/Installation/assessment";
 import Registration from "./App/Activities/BuildingOwnerBooking/Registration";
 import mapsmodal from "./App/Activities/Installation/mapsmodal";
 import acceptmodal from "./App/Activities/Installation/acceptmodal";
 console.disableYellowBox = true;
// const cunstomeDrawerContentComponent = (props) => (
//   <View style={{flex: 1, color: 'red',
//       textAlign: 'center',
//       fontSize: 30,
//       fontFamily: 'cochin',
//       letterSpacing: 4}} >
//       <DrawerItems {...this.props} />
//   </View>
// );

const Drawer= createDrawerNavigator({
  
  // Appeal:{
  //   screen:Appeal
  // },
  
  
//    Home:{
//      screen:Home
//    } ,
//   StatusPage:{
//     screen:StatusPage
//   },
Login:{
screen:Login
},
  
  Menu:{
    screen:Menu
},
   
  Profile:{
    screen:Profile
  },
  Service:{
    screen:Service
  },
  settings:{
    screen:settings
  },
  logout:{
    screen:logout
  },
},
{
  

  drawerWidth: 150,
  drawerType: 'back',
 // headerMode:'null'
//   contentComponent: props =>
//   <TouchableOpacity onPress={() => {props.navigation.navigate('Menu'),props.navigation.openDrawer(),console.warn("Menu",props)}}  >
//    <Image
//     source={require('./img/amanlogo.png')}
//     style={{width: 60, height: 60, borderRadius: 10 , marginLeft: 30, margin:20}}
//     />
//  </TouchableOpacity>
  

  
});

const Stack= createStackNavigator({
//   Registration:{
// screen:Registration
//   },
// Registration:{
//   screen:Registration
//     },
// Home:{
//   screen:Home
// },

//   Selectservice:{
//     screen:Selectservice
//   }, 
//   Appeal:{
//     screen:Appeal
//     },

//   assessment:{
//   screen:assessment
//   },
//   loadPage:{
//     screen:loadPage
//       },
//   Menu:{
//     screen:Drawer
//     },


//   AddBuilding:{                                   
//     screen:AddBuilding
//   },
//   Selectservice:{
//     screen:Selectservice
//   },
//   calender:{
//     screen:calender
//   },
  
//   Home:{
//  screen:Home
//   },
    
//   mainPage:{
//     screen: mainPage
//   },
  
//    Login:{
//     screen:Login
//     },
  
  
//   mainPage:{
//     screen:mainPage
//   },
//   List:{
//     screen:List
//   },

//   Menu:{
//         screen:Drawer
//     },
//   LoadingCal:{
//     screen:LoadingCal
//   },  
  
//   Forgotpassword:{
//     screen:Forgotpassword
//   },
//   Registration:{
// screen:Registration
//   },
//   calender:{
//     screen:calender
//   },
//   Payment:{
//     screen:Payment
//   },
  
//   Consentform:{
//     screen:Consentform
//   },

//   Profile:{
//     screen:Profile
// },
//   Payment:{
//     screen:Payment
//   },
//   Feedback:{
// screen:Feedback
//   },
//   FeedbackTQ:{
// screen:FeedbackTQ
//   },
// Home:{
//     screen:Home
//   },
// acceptmodal:{
//   screen:acceptmodal
// },
loadPage:{
    screen:loadPage
    },
assessment:{
  screen:assessment
},
mapsmodal:{
screen:mapsmodal
},
// Login:{
//   screen:Login
//   },
// Registration:{
//   screen:Registration
//     },
// acceptmodal:{
//   screen:acceptmodal
// },
// Forgotpassword:{
//       screen:Forgotpassword
//    },
StatusPage:{
  screen:StatusPage
  },

statusTQ:{
  screen:statusTQ
}

})


const App = createAppContainer(Stack);

export default App;

// const Styles = StyleSheet.create({ 
//   })

{/* <Drawer
  screenProps={{height:80}}
/>
const styles = StyleSheet.create({
  container: {
    //textSelf:"center",
    // height:50
    // iconContainerStyle: {
    //   opacity: 1,
    //   textSelf:"center"
    // }

  },
}); */}