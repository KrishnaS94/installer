import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput,View, Image} from 'react-native';
// import {DrawerNavigator} from 'react-navigation'
import { Header, Left, Form, Content, CardItem, Card, Body, Icon, Container, Button, Picker, Textarea } from 'native-base';
//import { TextField } from 'react-native-material-textfield';
import { CheckBox } from 'react-native-elements'

export default class logout extends Component {
    
  static navigationOptions = { 
    drawerLabel: '',
    drawerIcon: () => (  
   <View>         
  <Image
    source={require('../img/menu5.png')}
    style={{width: 30, height: 30, borderRadius: 2 , marginLeft: 315, margin:10,marginTop:5}}
  />
  
  <View style={styles.lineStyle} />
  <Text>Menu</Text>
  </View>
) 
}

    render() {
        return (
          <Container>
            <Header style={{backgroundColor:'white',color:'black'}} >
            <Left>
                <Icon style={styles.drawericon} name="menu" onPress={()=>
                 this.props.navigation.openDrawer()} />
            </Left>
          
            </Header>
            <Button  style = {styles.image} > 
            <Text style={{color:"white",marginLeft:100}}>Logout</Text>
            </Button>
           
                    </Container>
        );
      }
}
const styles =StyleSheet.create({
container:{
    alignItems:'center',
    backgroundColor: "white",
    flex:1,
    justifyContent: 'center'
},
welcome:{
    fontSize:24,
    // textAlign:'center'
    marginTop:10,
  
},
drawericon:{
   marginLeft:-100
},
headerWelcome:{
    fontSize:24,
    textAlign:'center',
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 899,
  borderTopWidth: 1,
//   borderColor: 'white',
},
lineStyle:{
  borderBottomWidth: 1,
  borderColor:'#979797',
  margin: 5,
  width: 600,
  marginTop:40,
  marginLeft:-80,
  marginBottom:-35
},
bottom:{
    justifyContent:'flex-end',
    backgroundColor: '#bc9e6d',
    marginBottom:60,
    width: '80%',
    marginLeft: 40,
    height: 44,
    // borderRadius: 5,
    fontSize: 20,
},
image: {
  width:249.2, 
  height:81.7,
  marginLeft: 70,
  marginTop: 213,
  marginBottom:292.3,
  marginRight: 50,
  //color:"red"
  //backgroundColor: ''
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

});