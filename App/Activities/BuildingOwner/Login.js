import React, {Component} from 'react';
import {Platform, StyleSheet, Text, TextInput,View, Image} from 'react-native';

import { Header, Left, Content, CardItem, Card, Body, Icon, Container, Button } from 'native-base';
import { TextField } from 'react-native-material-textfield';
import { CheckBox } from 'react-native-elements'

export default class Login extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Login",
   
      headerStyle: {
        backgroundColor: "white",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        borderTopColor: "gray"
      },
      headerTitleStyle: {
        color: "black",
        textAlign: 'center',
        paddingLeft: 160
        
      }
    };
  };


   
  constructor(props) {
    super(props);

    this.state = {
      Company_Email:'',
     Password:'',
      checkBoxChecked: false
    };
  }
  
onChangeEmail = (Company_Email) => {
  this.setState({ Company_Email: Company_Email })
  //console.warn("email",Company_Email)
}
onChangePassword = (Password) => {
  this.setState({ Password: Password })
  //console.warn("paswd",Password)
}



onCheckBoxPress(id) {
  //console.warn( "Checked!" );
  //console.warn( id );
  this.setState({
    checkBoxChecked: !this.state.checkBoxChecked
  });
}

login(){
  return fetch('http://192.168.0.134:8082/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "email_id": this.state.Company_Email,
      "password": this.state.Password,
      
    }),
  }).then((response) => response.json())
  
      .then((response) => {

        //console.warn(response);

      })

}


    render() {
        return (
          <Container>
              
            {/* <Header  style={{backgroundColor:'white',color:'black',}} >
            <Left>
                <Icon style={styles.drawericon} name="menu" onPress={()=>
                 this.props.navigation.openDrawer()} />
            </Left>
         
            </Header> */}
            <Content padder style={{marginTop: 50, }}>
              <Card style={{marginBottom: 30,height:400 }}>
                
                <CardItem >
                  <Body>
                  <Text style={{ fontSize: 25,color:'black' }}>Welcome To Services</Text>
                  <Text style={{ fontSize: 25,color:'red' }}> Login</Text>
                  </Body>
                </CardItem>
              
                
                <TextField type="text"
                                    label="Email Id"
                                    onChangeText = {this.onChangeEmail}
                                />

                <TextField 
                                    label="Enter password"
                                    onChangeText = {this.onChangePassword}

                                    secureTextEntry={true}
                                   
                                />
                           <Container>
                           <View style={{flexDirection :'row'}}>
<CheckBox checked={this.state.checkBoxChecked} onPress={()=>this.onCheckBoxPress()} title="Remember Me" />
 <Text onPress={() => this.props.navigation.navigate('')} style={{color:'black',marginTop:17}}>Forgot password?</Text></View>
</Container>
<Button onPress={()=> this.login()} style={{backgroundColor: 'red', marginBottom:40,
                                            width: 248,
                                            marginLeft: 70,
                                            height: 40,
                                            borderRadius: 5,
                                            fontSize: 20,
                                        } }>
      <Text onPress={() => this.props.navigation.navigate('Home')} style={{borderRadius: 5,fontSize: 20,marginLeft: 85,color:'white'  } }>
                              SIGN IN
                              </Text>
          </Button>
          <View style={{flexDirection :'row'}}>
          <Text style={{color:'black',marginBottom:17,marginLeft:17, fontSize:15}}>New User? </Text>
          <Text style={{color: 'red',fontSize:15}}
           onPress={() => 
            this.props.navigation.navigate('Registration')}         
            >
            Register Here
          </Text>
          </View>
              </Card>
            </Content>
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
// headerWelcome:{
//     fontSize:24,
//     textAlign:'center',
//     borderColor: 'black',
//     backgroundColor: 'white',
//     borderRadius: 899,
//   borderTopWidth: 1,

// },
lineStyle:{
  borderBottomWidth: 1,
  borderBottomColor: "red",
  borderColor:'black',
  margin: 5,
  width: 500,
  paddingTop: 10
},

});