import React, { Component } from "react";
import { Container, Header, Content, Accordion,View,Text } from "native-base";
// import { Icon } from 'react-native-elements'
import { Image,AppRegistry,StyleSheet,TextInput,TouchableOpacity,LayoutAnimation,NativeModules,TouchableHighlight,TouchableNativeFeedback } from 'react-native';
// import Textarea from 'react-native-textarea';
// import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Button,Card } from 'react-native-elements';
// import {CheckBox} from 'native-base';
//import { Rating} from 'react-native-ratings';


 class Payment extends Component {
    
 
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Payment",
      headerLeft:  
      <TouchableOpacity>
        {/* <Button
       
       buttonStyle = {{backgroundColor: 'white',
   
 }}
         title="Back"
         onPress={() => this.props.navigation.navigate('mainPage')}
       /> */}
       <Text>Back</Text>
      </TouchableOpacity>,
      headerStyle: {
        backgroundColor: "white",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        borderTopColor: "gray"
      },
      headerTitleStyle: {
        color: "#c3ad7e",
        textAlign: 'center',
        marginLeft: 110
      }
    };
  };

  
  render() {
    return (
     <View>
      <Card style={styles.card}>
      
       <View style = {styles.container}>
        
        <Text style={styles.content}>
      
        </Text>
        <Image source = {require('../img/pay.png')} style = {styles.image} > 
        </Image>
        
       <Button
        buttonStyle = {{backgroundColor: '#bc9e6d',
        width: 248,
        height: 44.3,marginTop:150}}
        title="Payment"
        onPress={() => this.props.navigation.navigate('mainPage')}>
        </Button>
       
        </View>
        </Card>
      </View>
     
    );
  }
}



const styles = StyleSheet.create({
   
  
  container: {
   
    alignItems: 'center',
    
   
  },
//   card:{
//     width:300,
//     height:200,
//     padding: 12
// },
  FACP:{
    
    height: 30,
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    marginTop: 100,
    color: 'black'
  },
  content1:{
    width: 350,
    height: 39,
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop:65,
    marginLeft: 80,
  },
  images: {
    flex:1,
    flexDirection: 'row',
    width:44, 
    height:44,
    marginRight: 130,
    marginTop:18,
    //marginBottom: 50
  },
//   button: {
//     borderWidth: 1,
//     padding: 12,
//     borderColor: 'black',
//     marginTop: 63,
//     width:248,
//     height:44.3,
//     borderRadius: 1.5,
//     backgroundColor: '#bc9e6d', 
//  },
 but: {
  
    justifyContent: 'center',
    borderWidth: 1,
    padding: 12,
    //borderColor: 'black',
    marginTop: 23,
    width:208,
    height:44.3,
    borderRadius: 1.5,
    backgroundColor: '#bc9e6d', 
  },
  img: {
    width:54, height:54, marginRight: 21
  },
  image: {
    width:449.2, 
    height:281.7,
    // flex:1
    // marginLeft: 70,
    // marginTop: 293,
    // marginBottom:292.3,
    // marginRight: 50,
    //backgroundColor: ''
  },

  button: {
    alignItems: 'center',
    //backgroundColor: '#DDDDDD',
    //padding: 10
    //marginBottom:50
  },
 
});

export default Payment