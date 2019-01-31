import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput,View, Image} from 'react-native';
// import {DrawerNavigator} from 'react-navigation'
import { Header, Left, Form, Content, CardItem, Card, Body, Icon, Container, Button, Picker, Textarea } from 'native-base';
import { TextField } from 'react-native-material-textfield';
import { CheckBox } from 'react-native-elements'
import Toast from 'react-native-simple-toast';


export default class Appeal extends Component {
  static navigationOptions = {
    header: null
   };
  constructor() {
        super();
        this.state = {
            service: '',
            description:''
        }
      }
   
   
    // state = {service: ''}


    updateService = (service) => {
      //console.warn("dfjldj",service)
       this.setState({ service: service })
    }

    
  static navigationOptions = { 
    drawerLabel: '',
    drawerIcon: () => (  
   <View>         
  <Image
    source={require('../img/download.png')}
    style={{width: 60, height: 60, borderRadius: 10 , marginLeft: 230, margin:20}}
  />
  <View style={styles.lineStyle} />

  </View>
) 
}

appeal(){
  
   fetch('http://192.168.0.134:8082/Appeal', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "service": this.state.service,
         // "service":"Aman",
           "Description": this.state.description,
         // "Description":"Done",
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            return responseJson;
          })
          .catch((error) => {
            console.error(error);
          });
}

    render() {
        return (
          <Container>
            {/* <Header style={{backgroundColor:'white',color:'black'}} >
            <Left>
                <Icon style={styles.drawericon} name="menu" onPress={()=>
                 this.props.navigation.openDrawer()} />
            </Left>
          
            </Header> */}
            <Content>
           
            <View style={{flex:1,paddingTop:120}} >
              
            <Picker style={styles.b} selectedValue = {this.state.service} onValueChange = {this.updateService}>
               <Picker.Item label = "Select Service" value = "" />
               <Picker.Item label = "Salama" value = "Salama" />
               <Picker.Item label = "Aman" value = "Aman" />
            
            </Picker>
         
            
         </View>
         <View style={{paddingTop:50}}>
         <Form>
            <Textarea rowSpan={5} bordered placeholder="Text here" 
            onChangeText = {(txt) =>{
              this.setState({
                description:txt
              })
            }}/>
          </Form>
          </View>
          
            </Content>
            <Button style={styles.bottom} 
            disabled={!this.state.service || !this.state.description}
            onPress={() => {
              this.appeal()
              this.props.navigation.navigate('loadPage')
            }}
            >
            <Text style={  {  borderRadius: 5, fontSize: 20, color:'white', paddingRight:140  } }>Send</Text>
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
  borderColor:'black',
  margin: 5,
  width: 500,
},
bottom:{
    justifyContent:'flex-end',
    backgroundColor: '#bc9e6d',
    marginBottom:60,
    width: '80%',
    //align: "center",
    height: 44,
    marginLeft:37,
    // borderRadius: 5,
    fontSize: 20,
},
  // TA:{
  //   borderColor: "#bc9e6d",
  //   borderWidth: 1,
  
  // }

});