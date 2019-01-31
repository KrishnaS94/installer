import React, { Component } from "react";
import { Container, Header, Content, Accordion,View,Text } from "native-base";
// import { Icon } from 'react-native-elements'
import { Image,AppRegistry,StyleSheet,TextInput,TouchableOpacity,LayoutAnimation,NativeModules,TouchableHighlight,TouchableNativeFeedback } from 'react-native';
// import Textarea from 'react-native-textarea';
// import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Button,Card } from 'react-native-elements';
import Modal from "react-native-modal";
// import {CheckBox} from 'native-base';
//import { Rating} from 'react-native-ratings';


 class Feedback extends Component {
    
 
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Feedback",
      
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
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  render() {
    return (
     <View>
      <Card style={styles.card}>
      
        
       <Button
        buttonStyle = {{backgroundColor: '#bc9e6d',
        width: 248,
        height: 44.3,marginTop:150}}
        title="Home"
        onPress={() => {
          this.setModalVisible(true);
        }}>
        </Button>
        
        
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            //alert('Modal has been closed.');
          }}>
          <View style={{ flex: 1 }}>
            <Text>I am the modal content!</Text>
          </View>
        </Modal>
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

  button: {
    alignItems: 'center',
    //backgroundColor: '#DDDDDD',
    //padding: 10
    //marginBottom:50
  },
 
});

export default Feedback