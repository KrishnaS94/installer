import React, { Component } from "react";
//import { Container, Header, Content, Accordion,View,Text } from "native-base";
// import { Icon } from 'react-native-elements'
import { Image,AppRegistry,StyleSheet,View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

const resetAction = StackActions.reset({
  index:0,
  actions:[
    NavigationActions.navigate({routeName:'assessment'})
  ]
})

 class loadPage extends Component {
    static navigationOptions = ({ navigation }) => {
      return {
        header: null
    };
  };
    componentDidMount(){
      setTimeout(
        () => {
          this.props.navigation.dispatch(resetAction)
        },
        4 * 1000
      );
    }
 
  render() {
    return (
     <View>
      
 <Image source = {require('../img/aman-logo-white.png')} style = {styles.image} > 
 </Image>

      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  
 

  image: {
    width:249.2, 
    height:81.7,
    // flex:1
    marginLeft: 70,
    marginTop: 293,
    marginBottom:292.3,
    marginRight: 50,
    //backgroundColor: ''
  },
  
});

export default loadPage