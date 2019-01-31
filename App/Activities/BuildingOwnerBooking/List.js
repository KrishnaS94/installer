import React, {Component} from 'react';
import { StyleSheet,Text, TextInput,View,Button,Image, TouchableOpacity} from 'react-native';
import { Header, Left, Form, Content, CardItem, Card,Icon, Body, Container, Picker, Textarea, Right } from 'native-base';


// import ImagePicker from 'react-native-image-picker';
// import { TextField } from 'react-native-material-textfield';

import Fetchlocation from './Fetchlocation';
import UserMap from './Usermap';
import Geocoder from 'react-native-geocoding';

import MinMaxTextInput from './MinMaxTextInput.js';
// import { Icon } from 'react-native-elements'

var lat;
var lon;


Geocoder.init('AIzaSyBOEK23z8Nk5InY6ZN7uwCSQwEQdoyw69c');
const queryString = require('query-string');

const options={
    title: 'my image',
    takePhotoButtonTitle: 'take pic with camera',
    chooseFromLibraryButtonTitle: 'choose pic from library'
}

// let params = {
//     key: 'AIzaSyBOEK23z8Nk5InY6ZN7uwCSQwEQdoyw69c',
//     latlng: `${25.3463},${55.4209}`, 
//   };
//   let qs = queryString.stringify(params);


export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            textInputValue:'',
            userLocation: null,
            mydata:'',
            Buildingname:''
            // avatarSource:null
            
        }
        // state = {
        //     userLocation: null
        // }
    }

    // imageUpload =() => {
    //     ImagePicker.showImagePicker(options, (response) => {
    //         console.log('Response = ', response);
          
    //         if (response.didCancel) {
    //           console.log('User cancelled image picker');
    //         } else if (response.error) {
    //           console.log('ImagePicker Error: ', response.error);
        
    //         } else {
    //           const source = { uri: response.uri };
          
    //           // You can also display the image using data:
    //           // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
    //           this.setState({/home/vijaybaskar/Downloads/drawerNavbar (2)/src/images/gps.png
    //             avatarSource:/home/vijaybaskar/Downloads/drawerNavbar (2)/src/images/gps.png
    //           });
    //         }
    //       });
    // }
      

      getUserLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(position => {
           

            this.setState({
                userLocation: {
                    latitude: position.coords.latitude,
                    longitude:position.coords.longitude,
                    latitudeDelta:0.1,
                    longitudeDelta:0.1
                }
            })
             fetch(
                 `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyBOEK23z8Nk5InY6ZN7uwCSQwEQdoyw69c`)
    
                  .then((res) => res.json())
                  .then((json) => {

                //     this.setState({data: json.plus_code.compound_code});

                //   })

                //         .catch((error) => {
                //             console.log(error);
                //         });

                    
                 lat = position.coords.latitude;
                 lon = position.coords.longitude;


                    if (json.status !== 'OK') {
                        throw new Error(`Geocode error: ${json.status}`);
                    }
               
                var mydata = JSON.stringify(json.results[0].formatted_address);
             var mydata = mydata.substr(1,mydata.length-2)


               
                this.setState({
                    mydata:mydata
                });
                
                
                  });

                }, err => console.log(err));

       

    }

    submitData = () => {
    fetch('http://192.168.0.134:8082/AddsingleBuilding', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "owner_id":"a@mailinator.com",
          "Buildingname": this.state.buildingname,
            "lat":lat,
            "lon":lon,
         "address": this.state.mydata,
       
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            return responseJson;
          })
          .catch((error) => {
            // console.error(error);
          });
    }

  
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //       title: "Consent Form",
    //        //headerLeft: <Icon name="ios-arrow-back" color="white" />,
    //       headerStyle: {
    //         backgroundColor: "#ffffff",
    //         borderTopWidth: 1,
    //         borderBottomWidth: 1,
    //         borderBottomColor: "#ffffff",
    //         borderTopColor: "#ffffff",
            
    //       },
    //       headerTitleStyle: {
    //         color: "#9b9b9b",
    //         textAlign: 'center', flex:1,
            
    //       }
    //     };
    //   };


    render() {


        return ( 



            <Container>
    {/* <Header style={{backgroundColor: 'white'}}>
       
       <Left>
       
           <Icon style={styles.drawericon} name="menu" onPress={()=>
            this.props.navigation.openDrawer()} />        

       </Left>
     
   </Header> */}
            

            {/* <View style={styles.container}> */}





                {/* <View style={[styles.boxContainer, styles.boxOne]}> */}
           

              
            {/* <Content padder style={{marginTop: 1, }}></Content> */}
<View><View style={{margin: 20}}>
                       <Button style = {styles.button}
                        // onPress={this.imageUpload}
                        title="Select from my Building list"
                        color="#bc9e6d"
                        accessibilityLabel="Learn more about this purple button"
                        /></View>

                        

   
   <View style={{padding: 20}}>
   <View >
                    <Text > Building Name: </Text>  
                        <TextInput style={{
                            height:40,
                            
                            width:300,
                           // marginLeft:20,
                            // borderColor:grey,
                            borderBottomWidth:1
                        }}
                        onChangeText = {(txt) =>{
                            this.setState({
                                buildingname:txt
                            })
                          }}
                          value={this.state.buildingname}
                            />
                                             
                    </View>



                {/* </View> */}



                {/* <View style={[styles.boxContainer, styles.boxTwo]}> */}
                   <View style={{marginTop:20}}>
                    <View style={{marginBottom:20}}>
                      <Text style={styles.Text2}>
                             Address
                      </Text>
                    </View> 



                    <View style={styles.searchSection}>
                    {/* <Icon 
raised
name='heartbeat'
type='font-awesome'
color='#f50'

/>  */}
                      {/* <MinMaxTextInput */}
                      <TextInput
                      
                           style={{borderWidth:1,flex:1}} 
                           multiline={true}
                           numberOfLines={4}
                           onChangeText={(text) => {
                    
                           this.setState({
                               mydata:text,
                               textInputValue: text

                    
                                    })
                                }
                            }
                            value={this.state.mydata}
                            // minLength={0}
                            // maxLength={300}
                        /> 
{/* 
                    </View> */}


                    

                  <Fetchlocation onGetLocation={this.getUserLocationHandler}/>
                  
                </View>

   </View>
   </View>
                    
{/* 
                <View style={[styles.boxContainer, styles.boxThree]}> */}

               
                   <UserMap userLocation={this.state.userLocation}/>

            
<View style={styles.button1}>
                 
                    <Button
                        //onPress={this.submitData}
                        onPress={() => {
                            this.submitData()
                            this.props.navigation.navigate('AddBuilding')
                          }}
                        title="Next"
                        color="#bc9e6d"
                        accessibilityLabel="Learn more about this purple button"
                        style={styles.button}
                        /> 
                  </View>
                
                    
{/* 
                // </View> */}
                </View>




            {/* </View> */}
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        padding:20
        // alignItems:'center',
       
 
       
    },

    boxContainer: {
        
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxOne:{
        flex:2,
        // backgroundColor: '#FFEEE4'
    },
    boxTwo:{
        
        // backgroundColor: '#F17F42'
    },
    boxThree:{
        // flex:3,
        // backgroundColor: '#CE6D39'
    },


    Text:{
        fontSize: 15,
        // fontWeight: 'bold',
        fontFamily:'Roboto',
        marginRight:300,
        marginTop:30,
        //textDecorationLine: 'underline'

    },
    Text2:{
        fontSize: 15,
        // fontWeight: 'bold',

        fontFamily:'Roboto',
        marginRight:250,
        // marginTop:5,
        marginBottom:5,
      //  textDecorationLine: 'underline'

    },
    searchSection:{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    drawericon:{
         marginLeft:-100,
    },
    button1:{
        marginLeft:50,
        marginRight:50,
        marginTop:5
        
    },
    button:{
        
        paddingLeft:40
        // marginTop:5
    },
   
});


{/* -----------------------------------------------Container-Box1------------------------------------------------- */}
{/* -----------------------------------------------Container-Box3------------------------------------------------- */}
{/* -----------------------------------------------Container-Box2------------------------------------------------- */}

 // `https://maps.googleapis.com/maps/api/geocode/json?${position.coords.latitude},${position.coords.longitude}&key=AIzaSyCQ9FZY2vf4va84xLRjh3_9HRnVdK6Asrg`)

//  autofocus: true