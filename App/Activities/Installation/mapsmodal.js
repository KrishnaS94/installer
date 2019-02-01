import React, { Component } from 'react';
import { Dimensions, StyleSheet, View,Text, Button, TouchableOpacity,TextInput,Modal } from 'react-native';
import { Header, Left, Form,  Container,Content, CardItem, Card, Body, Picker, Textarea, Right } from 'native-base';

import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import { Icon } from 'react-native-elements';
import openMap from 'react-native-open-maps';


import { OpenMapDirections } from 'react-native-navigation-directions';


const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
 
const GOOGLE_MAPS_APIKEY = 'AIzaSyBOEK23z8Nk5InY6ZN7uwCSQwEQdoyw69c';

class mapsmodal extends Component {
  constructor(props) {
    super(props);

  this.state = {
    
    // modalVisible:false
    // text :'P.O Box- 26, Tower 400,Sharjah, UAE'
  };
}



setModalVisible(visible) {
  this.setState({modalVisible: visible});
}
  // onMapPress = (e) => {

  //   this.setState({
  //     coordinates: [
  //       ...this.state.coordinates,
  //       e.nativeEvent.coordinate,
  //     ],
  //   });
  // }
//   componentDidMount(){
  
//     this.getLatLan();
//  }
 
//  getLatLan = () =>{
//   fetch('http://192.168.0.134:8082/getBuildings', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       "buildingobject" : "a@mailinator.com",

//     }),
//   }).then((response) => response.json())
//       .then((responseJson) => {
//        let mydata = (JSON.stringify(responseJson.result[0].result[0].address));

      
//       this.setState({
//         mydata : mydata
//           })
//         })
//       .catch((error) => {
//         console.error(error);
//       });
//  }

// showDialog = () => {
//   this.setState({ dialogVisible: true });
// };

// handleCancel = () => {
//   this.setState({ dialogVisible: false });
// };

// handleDelete = () => {
//   // The user has pressed the "Delete" button, so here you can do your own logic.
//   // ...Your logic
//   this.setState({ dialogVisible: false });
// };


_callShowDirections = () => {
  const startPoint = {
    longitude: 25.3518,
    latitude: 55.3855
  } 

  const endPoint = {
    longitude: 24.4512,
    latitude: 54.412
  }

  const transportPlan = 'w';

  OpenMapDirections(startPoint, endPoint, transportPlan).then(res => {
    console.log(res)
  });
}




  render() {
    return (
     


<Container>

  {/* <Header>
       
       <Left>
       
           <Icon style={styles.drawericon} name="menu" onPress={()=>
            this.props.navigation.openDrawer()} />        

       </Left>
     
  </Header> */}

  <View style={[styles.boxContainer, styles.boxOne]}> 
 
      <TextInput style={{height:150,margin:20,width:370,justifyContent:'center',borderWidth:1}}
      multiline={true}
      onChangeText={(text) => 
                    
        this.setState({ text })
           

 
                
             
         }
         value={'P.O Box- 26, Tower 400,Sharjah, UAE'}/>


  </View>

     

  <View style={[styles.boxContainer, styles.boxTwo]}> 

    <View style={styles.mapcontainer}>
        <MapView style={styles.map}
          initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0,
              longitudeDelta: 0.0,
          }}
        >
        <MapView.Marker
            coordinate={{latitude: 37.78825,
            longitude: -122.4324}}
            title={"title"}
            description={"description"}
         />

         
        
      </MapView>
            
</View>
<View>
    
        <Icon
        raised
        name='crosshairs'
        type='font-awesome'
        color='black'
        onPress={() => { this._callShowDirections() }}
        // onPress={() => {
        //   this._callShowDirections()
        //   this.props.navigation.navigate('StatusPage')
        // }}
      />
      </View>
        
  


  </View>


   


  

  <View style={[styles.boxContainer, styles.boxThree]}> 

<View style = {{flex:1, justifyContent: 'space-around', alignItems: 'center'}}>
  <Button
        
         title = "Next"
         color = "#bc9e6d"
         onPress={() => {
           this._callShowDirections()
           this.props.navigation.navigate('StatusPage')
          }}
      />
</View>

<View style = {{flex:1, justifyContent: 'space-between', alignItems: 'center'}}>
<Button
         
         title = "Back"
         color = "#bc9e6d"
         
      />

{/* <Modal
           animationType="slide"
           transparent={true}
           visible={this.state.modalVisibleService}
           onRequestClose={() => {
             // Alert.alert('Modal has been closed.');
           }}
         >
           <View
             style={{
               flex: 1,
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center"
             }}
           >
             <View
               style={{
                 backgroundColor: "black",
                 padding: 15,
                 width: "90%",
                 borderRadius: 10,
                 alignItems: "center"
               }}
             >
             <View>
               <Text style={{fontSize:20, fontWeight:"bold"}}>Add Services</Text>
                
               <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:20}}>
                 <Text  onPress={() => {
               this.modelSelection(!this.state.modalVisibleService);
             }}
             style={{fontSize:20}}
             >Cancel</Text>
                 <Text onPress={ () => {this.addService()}} style={ styles.addService}>Submit</Text>
               </View>
             </View>
             </View>
           </View>
         </Modal> */}
</View>



  
      </View>
</Container>



    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    flexDirection: 'column',
  },

  drawericon:{
    marginLeft:-100
  },

  boxContainer:{
    // flex:3,
    
  },
  boxOne:{
    flex:1
  },
  boxTwo: {
    flex:1
  },
  boxThree:{
    flex:1
  },
  mapcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }
 
})
 
export default mapsmodal;