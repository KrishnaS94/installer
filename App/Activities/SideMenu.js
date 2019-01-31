import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import { ScrollView, Text, View, StyleSheet,Image } from "react-native";

class SideMenu extends Component {

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View >
        <View >
        
        </View>
        <ScrollView>
          <View >
          <Image source={require('../img/menu1.png')}
    style={{width: 75, height: 70, borderRadius: 2 , marginLeft: 325, margin:10}}/>
            <Text  onPress={this.navigateToScreen("Home")}> Home </Text>
          </View>
          <View>
          <Image source={require('../img/menu1.png')}
    style={{width: 75, height: 70, borderRadius: 2 , marginLeft: 325, margin:10}}/>
            <Text  onPress={this.navigateToScreen("Profile")}> Profile </Text>
          </View>
        </ScrollView>
        <View>
          <Text style={{ color: "white" }}>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}
export default SideMenu;