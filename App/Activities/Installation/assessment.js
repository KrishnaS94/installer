import React, { Component } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  Button,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Card, CardItem, Body, Icon } from "native-base";

class assessment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  componentDidMount() {
    this.Request();
  }

  Request = () => {
    //console.warn("inside the submit");
    fetch("http://68.183.86.35:8082/assesser-view", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(result => {
        //console.warn("result",result);
        this.setState({
          result: result.result,
          
        });
      })
      .catch(error => {
        console.warn("data Error", error);
      });
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Assignments",
      
      headerStyle: {
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff",
        borderTopColor: "#ffffff"
      },
      headerTitleStyle: {
        color: "#9b9b9b",
        textAlign: "center",
        flex: 1
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
          <View style={styles.square} />
          <Text style={styles.text1}> Accepted </Text>

          <View style={styles.square1} />
          <Text style={styles.text2}> Pending </Text>
        </View>

        <ScrollView>
          <View style={{ height: 250 }}>
            <FlatList
              data={this.state.result}
              keyExtractor={item => item.status}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <Card>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.text}>{item.buildingname}</Text>

                      <View
                        style={{
                          flex:0,
                          width: 22.5,
                          height: 22.5,
                          borderWidth: 1,
                          marginLeft: 240,
                          margin: 8,
                          backgroundColor:
                            item.status == "accept" ? "green" : "red"
                        }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        padding: 10,
                        justifyContent: "space-around"
                      }}
                    >

                    <View style={{flex:1}}>
                      <Text
                        //onPress={() => this.text("6-1-2019")}
                        style={{
                          marginLeft: 10,
                          fontFamily: "Roboto",
                          fontSize: 18,
                          margin: 1
                        }}
                      >
                       {item.requestdate}
                      </Text>
                      </View>

                      <View>
                      <Text
                        //onPress={() => this.text("6-8 pm")}
                        style={{
                          marginLeft: 70,
                          fontFamily: "Roboto",
                          fontSize: 18
                        }}
                      >
                        {item.schedule_time}
                      </Text>
                      </View>

                    </View>
                  </Card>
                </View>
              )}
            />
          </View>
        </ScrollView>

        <View style={styles.button}>
          <Button
            title="Next"
            color="#bc9e6d"
            height="90"
            onPress={() => {
              //this.submit()
              this.props.navigation.navigate('mapsmodal')
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  container1: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 25
  },
  text: {
    fontSize: 23,
    fontFamily: "Roboto",
    margin: 5,
    marginLeft: 13,
    fontWeight: "bold",
    flexDirection: "row"
  },
  card: {
    flex: 2,
    margin: 10,
    //padding: 10,
    backgroundColor: "white"
    //marginTop: -80,
  },
  text1: {
    fontSize: 22,
    fontFamily: "Roboto",
    justifyContent: "space-around"
  },
  text2: {
    fontSize: 22,
    fontFamily: "Roboto",
    justifyContent: "center"
  },
  button: {
    flex: 1,
    backgroundColor: "white",
    marginLeft: 90,
    marginRight: 90,
    height: 20,
    marginTop: 30
  },
  square: {
    width: 22.5,
    height: 22.5,
    backgroundColor: "green",
    justifyContent: "space-around"
  },
  square1: {
    width: 22.5,
    height: 22.5,
    backgroundColor: "red",
    alignItems: "center",
    marginLeft: 30
  },
  square2: {
    width: 22.5,
    height: 22.5,
    borderWidth: 1,
    marginLeft: 120,
    margin: 10
  }
  // card:{

  //   marginLeft: 60,
  //   // marginRight: 10,
  //   width: 50,
  //   height: 10
  // },

  // card:{
  //        marginTop: 50,
  //        marginLeft: -160,
  //        margin: 10,
  //        marginRight: -200

  // }
});

export default assessment;