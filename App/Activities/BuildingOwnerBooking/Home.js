import React, { Component } from "react";
import { Container, Header, Content, Accordion,View,Text, Row } from "native-base";
// import { Icon } from 'react-native-elements'
import { Image,AppRegistry,StyleSheet,TouchableOpacity } from 'react-native';


 class Home extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Booking Service",
      
      
      headerRight:  <TouchableOpacity onPress={()=>{navigation.navigate('mainPage')}}>
      {/* <Button
     
     buttonStyle = {{backgroundColor: 'white',
 
}}
       title="Back"
       onPress={() => this.props.navigation.navigate('mainPage')}
     /> */}
     <Text>Next</Text>
    </TouchableOpacity>,
      // headerLeft: <Icon name="menu" color="white" />,
      headerStyle: {
        backgroundColor: "white",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        borderTopColor: "gray"
      },
      headerTitleStyle: {
        color: "#c3ad7e",
        textAlign: 'center', flex:1
      }
    };
  };

  

  render() {
    return (
     <View>
      
 <Image source = {require('../img/amanlogo.png')} style = {styles.image} > 
 </Image>


      <View style = {styles.container}>
        
      
        <Text style={{ color: '#9b9b9b', fontSize: 24,marginTop:47.3}}>
       WHAT IS AMAN?
        </Text>
        <View style = {styles.box}>
        <Text style={{color: '#9b9b9b', fontSize: 18, marginTop:20}}>
        Aman is a smart fire  alert  system,
        </Text>
        <Text style={{color: '#9b9b9b', fontSize: 18}}>
         aiming to  establish an  affordable,
         </Text>
         <Text style={{color: '#9b9b9b', fontSize: 18}}>
             safe     and    reliable     connection 
         </Text>
         <Text style={{color: '#9b9b9b', fontSize: 18}}>
         between  any   type  of   fire  Alarm 
         </Text>
         <Text style={{color: '#9b9b9b', fontSize: 18}}>
         Control  Panels   at  every  type   of  
        </Text>
         <Text style={{color: '#9b9b9b', fontSize: 18}}>
         property   located  in  Sharjah, with 
         </Text>
         <Text style={{color: '#9b9b9b', fontSize: 18}}>
         the  Central Station and Command 
         </Text>
         <Text style={{color: '#9b9b9b', fontSize: 18}}>
         &amp;  Control Centre  of  Civil Defense
         </Text>
          <Text style={{color: '#9b9b9b', fontSize: 18}}>
         in real time. 
         </Text>
           
      </View>
        </View>
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    paddingTop: 50,
    
    alignItems: 'center',
   
  },

  image: {
    flex:1,
    flexDirection: 'row',
    width:350, 
    height:50,
    marginLeft: 30,
    marginTop:30,
     paddingTop: 96
  },
  box:{
    flex:1,
    width:292,
    height: 227,
    textAlign: 'justify'

  }
});

export default Home