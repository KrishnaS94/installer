import React, { Component } from "react";
import { Container, Header, Content, Accordion,View,Text,Link } from "native-base";
// import { Icon } from 'react-native-elements'
import { Image,AppRegistry,StyleSheet,TextInput,TouchableOpacity,Animated,Icon } from 'react-native';
import { Button } from "react-native-elements";
//import Textarea from 'react-native-textarea';
//import Feedback from './App/Activities/Feedback';
//import { HeaderBackButton } from 'react-navigation';

 class mainPage extends Component {
    
   
      
     static navigationOptions = ({ navigation }) => {
    return {
      title: "Book Service",
       headerLeft:  
       <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
         {/* <Button
        //style = {{color: '#bc9e6d'}}
        //style={styles.but}
        buttonStyle = {{backgroundColor: '#bc9e6d',
    //width: 248,
    //height: 44.3,
  }}
          title="Back"
          onPress={() => this.props.navigation.navigate('Home')}
        /> */}
        <Text>Back</Text>
       </TouchableOpacity>,
      //  headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
      
      headerStyle: {
        backgroundColor: "white",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        borderTopColor: "gray"
      },
      headerTitleStyle: {
        color: "#c3ad7e",
        marginRight:80,
        textAlign: 'center', flex:1
      }
    };
  };


  
  render() {
    return (
     <View>
      
       <View style = {styles.container}>
    
    <View style={styles.images} >
        <TouchableOpacity onPress={() => this.props.navigation.navigate('AddBuilding')}  >
        <Image source = {require('../img/main1.png')}  style = {{width:118, height:118}}  > 
        </Image>
        <Text  style={{fontSize: 12, marginLeft:18}}>My Building List</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('')}  > */}
        <Image source = {require('../img/main3.png')}  style = {{width:118, height:118,marginTop:30}}   > 
        </Image>
        <Text  style={{fontSize: 12, marginLeft:24}}>Buil Booking</Text>
        {/* </TouchableOpacity> */}
        <Image source = {require('../img/main5.png')}  style = {{width:118, height:118,marginTop:30}}  > 
         </Image>
         <Text style={{fontSize: 12, marginLeft:18}}>Booking History</Text>   
    </View>
    
     <View style={{flexDirection: 'column', marginLeft:250,marginTop:-460,}} >
     <TouchableOpacity onPress={() => this.props.navigation.navigate('AddBuilding')}  >
         <Image source = {require('../img/main2.png')}  style = {{width:118, height:118}}   > 
         </Image>
         <Text style={{fontSize: 12, marginLeft:18}}>Single Booking</Text>
         </TouchableOpacity>
         <Image source = {require('../img/main4.png')}  style = {{width:118, height:118,marginTop:30}}  > 
         </Image>
         <Text style={{fontSize: 12, marginLeft:28}}>Assessment</Text>
         <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback')}  >
         <Image source = {require('../img/main6.png')}  style = {{width:118, height:118,marginTop:30}} > 
         </Image>
         <Text style={{fontSize: 12, marginLeft:33}}>Feedback</Text>
         </TouchableOpacity>
         
     </View>
   
        </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  
//   container: {
//     flex: 1,
    
//     alignItems: 'center',
    
   
//   },

  
  images: {
    
    flexDirection: 'column',
    //justifyContent: 'space-around',
    marginLeft: 50,
    marginTop:50,
    //marginBottom: 50
  },
  images1: {
   
    
    //justifyContent: 'space-around',
    //marginRight: 500,
    marginLeft:250,
    marginTop:0,
    //marginBottom: 50
  }
  
});

export default mainPage