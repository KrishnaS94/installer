import React, { Component } from "react";
import { Container, Header, Content, Accordion,View,Text } from "native-base";
import { Image,AppRegistry,StyleSheet,TextInput,TouchableOpacity,Picker,LayoutAnimation,NativeModules,ListView,TouchableHighlight,TouchableNativeFeedback } from 'react-native';
import Textarea from 'react-native-textarea';
import { Button } from 'react-native-elements';


 class StatusPage extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
         availability:'Not Available',
         Done: 'Done'
    }
}

  
      static navigationOptions = ({ navigation }) => {
    return {
      title: "Installation Status",
      headerLeft:  
      <TouchableOpacity>
        {/* <Button
       
       buttonStyle = {{backgroundColor: 'white',
   
 }}
         title="Back"
         onPress={() => this.props.navigation.navigate('mainPage')}
       /> */}
       <Text style={{paddingLeft: 20}}>Back</Text>
      </TouchableOpacity>,
      headerStyle: {
        backgroundColor: "white",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "black",
        borderTopColor: "gray"
      },
      headerTitleStyle: {
        color: "#9b9b9b",
        textAlign: 'center',
        paddingLeft: 55
      }
    };
  };

  
  chkBoxCondition = (chkName) =>{

    //console.warn("inside the condition ",chkName);
    
    this.setState({
     availability:"",
     
    })

    if(chkName === "img1"){

        this.setState({
           Img1Border:0.5,
           rating: '3'
           
        }) 
    }
    else if(chkName === "img2"){
        
        this.setState({
            Img2Border:0.5,
            rating: '2'
            
        })
    }
    if(chkName === "img3"){
        this.setState({
          Img3Border:0.5,
          rating:"1"
          
        })
    }
}


// abcfn = () => {
//   //console.warn("inside the abcfn");
// }

submit = () => {
 
//console.warn("inside the submit"+this.state.availability);
//console.warn("done"+"done")
//console.warn(this.state.description)
  fetch("http://68.183.86.35:8082/Assessment", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
            "id":"1",
           "status": "done",
           //"notdone" : this.state.availability
      
    })
  })
  
    .then(r => r.json())
    .then(result => {
     //console.warn("result of data:", result);

      this.setState({
        dataSource: result
      });
    })
    .catch(error => {
      //console.warn("data Error", error);
    });
}
submit2 = () => {
 
    //console.warn("inside the submit"+this.state.availability);
    //console.warn("done"+"_done")
    //console.warn(this.state.description)
      fetch("http://192.168.0.134:8082/Assessment", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
                "id":"1",
               //"status": "done",
               "status" : this.state.availability
          
        })
      })
      
        .then(r => r.json())
        .then(result => {
         console.warn("result of data:", result);
    
          this.setState({
            dataSource: result
          });
        })
        .catch(error => {
          console.warn("data Error", error);
        });
    }
    


  render() {
    return (
     <View>
      
      
       <View style = {styles.container}>
{/*         
       <ListView
       
         style={styles.separator} />}
       
      /> */}
      <Text style={styles.name}>
       Radisson Sharjah
       </Text>
      
       <Text style={{paddingTop:20}}>27-01-2019 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3:00PM to 5:00 PM</Text>
       
      <Image source={require('../img/line.png')}
        style={{width:320,marginTop:20}}
        />
        <Text style={styles.FACP}>
       INSTALLER
       
        </Text>
       
        <Text style={styles.content}>
        Preyank Solar Optical wireless smoke 
        </Text>
        <Text style={styles.content}>
        detector/sensor/alarm unit
        </Text>
        <Text style={styles.content}>
        9V Battery Included
        </Text>
        <Text style={styles.content}>
        85 db alarm signal Loud Output
        </Text>
        <Text style={styles.price}>
      PRICE: AED 500
       
        </Text>
        <Image source={require('../img/line.png')}
        style={{width:320,marginTop:20}}
        />
   
    <View style={styles.but}>
       <TouchableOpacity
         //style={styles.button}
         //onPress={this.props.navigation.navigate("mainPage")}
       >
       <Button
        //style = {{color: '#bc9e6d'}}
        //style={styles.but}
        buttonStyle = {{backgroundColor: '#bc9e6d',
        width: 248,
        height: 44.3,marginLeft: -30,}}
          title="Done"
          //onPress={() => this.props.navigation.navigate('FeedbackTQ')}
          onPress={() => {
            this.submit()
            this.props.navigation.navigate('statusTQ')
          }}
        />
        
       </TouchableOpacity>
      </View>
        
      <Picker
    selectedValue={this.state.availability}
    style={{height: 50, width: 265, paddingTop:91,marginLeft:20,borderRadius: 50, flex: 1, color: '#bea171' }}
    onValueChange={(itemValue,itemIndex) =>
        this.setState({availability: itemValue})
    }>
    {/* <Picker.Item label="Status" value="" /> */}
    <Picker.Item label="Building Owner not available" value="not available" />
    <Picker.Item label="Available" value="available" />
    <Picker.Item label="Other reason" value="other reason" />
    </Picker>

      <View style={styles.but1}>
       <TouchableOpacity
         //style={styles.button}
         //onPress={this.props.navigation.navigate("mainPage")}
       >
       <Button disabled={!this.state.availability}
        //style = {{color: '#bc9e6d'}}
        //style={styles.but}
        buttonStyle = {{backgroundColor: '#9b9b9b',
        width: 248,
        height: 44.3,marginLeft: -30,}}
          title="Not Done"
          //onPress={() => this.props.navigation.navigate('FeedbackTQ')}
          onPress={() => {
            this.submit2()
            this.props.navigation.navigate('statusTQ')
          }}
        />
        
       </TouchableOpacity>
      </View>
      
     
        </View>
      </View>
     
    );
  }
}



const styles = StyleSheet.create({
    check:
{
    opacity:0.5,
	color:'#996'
	
},
  
  container: {
   
    alignItems: 'center',
    
   
  },

  FACP:{
    
    height: 24,
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 30,
    marginTop: 24,
    color: 'black',
    marginRight: 185,
  },
  name:{ 
        height: 24,
        fontFamily: 'Roboto',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 30,
        marginTop: 44,
        color: 'black',
        paddingRight:140
  },
  price:{
    height: 25,
    fontFamily: 'Roboto-Regular',
    fontSize: 18,
    marginTop: 10,
    marginRight: 158,
    color: 'black',
    height: 24,
    fontWeight: 'bold'
  },
  content:{
    width:224,
    height: 20,
    fontFamily: 'Roboto',
    fontSize: 12,
    marginTop: 7,
    lineHeight: 26,
    marginRight: 65,
    color: 'black'
  },
  area: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:70,
  },
  textareaContainer: {
    height: 103,
    width:309,
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    //backgroundColor: '#F5FCFF',
  },
  textarea: {
    textAlignVertical: 'top',  
    height: 170,
    fontSize: 14,
    color: '#333',

  },
  content1:{
    width: 250,
    height: 19,
    fontFamily: 'Roboto',
    fontSize: 14,
    color: 'black',
    marginTop:45,
    marginLeft: 50,
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
  but1: {
  
    justifyContent: 'center',
    borderWidth: 1,
    padding: 12,
    //borderColor: 'black',
    marginTop: 23,
    width:208,
    height:44.3,
    borderRadius: 1.5,
    backgroundColor: '#9b9b9b', 
    marginTop:-20
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
//   lineStyle:{
//     borderBottomWidth: 2,
//     borderBottomHeight:50,
//     borderColor:'#979797',
//     height: 25,
//     fontFamily: 'Roboto-Regular',
//     fontSize: 14,
//     marginTop: 7,
//     marginRight: 195,
//     color: 'black'

//   },
});

export default StatusPage