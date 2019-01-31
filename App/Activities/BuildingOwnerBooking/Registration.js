import React, { Component } from "react";
//import react in our code.
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  ScrollView
} from "react-native";
import { Form, FormItem } from 'react-native-form-validation';

//import all the components we are going to use.

import ImagePicker from "react-native-image-picker";
import { loadReCaptcha } from "react-recaptcha-google";
import { ReCaptcha } from "react-recaptcha-google";
import { WebView } from "react-native-gesture-handler";
//import { ScrollView } from 'react-native-gesture-handler';
// import Step from './Step'


function validate(Name,Nationality,Email,phone_number,Password,ConfirmPassword,Address){

    return{
        Name: Name.length === 0,

        
    }
}


class registerpage extends Component {
  // static Step = props => <Step {...props} />
  constructor(props, context) {
    super(props, context);
    this.state = {
      avatarSource: null,
      index: 0,
      Name: '',
       Company:'',
        Nationality:'',
        phone_number:'',
       Address:'',
       pobox:'',
       mobile:'',
       Email:'',
       Password:'',
      ConfirmPassword:''
    };
    // if (!Name && !Nationality && !Address && !mobile && !Email && !Password) {
    //     alert('Details are valid!')
    //   }

    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
  

  componentDidMount() {
    if (this.captchaDemo) {
      console.log("started, just a second...");
      this.captchaDemo.reset();
    }
  }
  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
    }
  }
  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!
    console.log(recaptchaToken, "<= your recaptcha token");
  }

  getWebviewContent(){
    var originalForm = '<!DOCTYPE html><html><head><script src="https://www.google.com/recaptcha/api.js"></script></head><body><form action="[POST_URL]" method="post"><input type="hidden" value="[TITLE]"><input type="hidden" value="[DESCRIPTION]"><input type="hidden" value="[URL]"><div class="g-recaptcha" data-sitekey="6Lfi340UAAAAABu-sFRpLaz6pqhQDPPhYaNqBfqL"></div></form></body></html>'
    var tmp =  originalForm
        .replace("[POST_URL]", "http://192.168.0.134:8082/v1/video")
        //.replace("[TITLE]", this.state.form.title)
        //.replace("[DESCRIPTION]", this.state.form.description)
        //.replace("[URL]", this.state.form.url); 

    return tmp; 
}

  static navigationOptions = ({ navigation }) => {
    return {
      title: "Register",

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

  // =============Register form ajax call start================
  register() {
    return fetch("http://192.168.0.134:8082/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: this.state.Name,
        company: this.state.Company,
        nationality: this.state.Nationality,
        phone_number: this.state.phone_number,
        address: this.state.Address,
        pobox: this.state.pobox,
        mobile: this.state.mobile,
        email: this.state.Email,
        password: this.state.Password,
        confirmpassword: this.state.ConfirmPassword
      })
    })
      .then(response => response.json())

      .then(responseJson => {
        return responseJson;
        console.warn("responseJson",responseJson)
      })
      .catch(error => {
        console.error(error);
      });
  }
  // ========================register ajax end===================
  render() {
    const { navigate } = this.props.navigation;
    return (
      //View to hold our multiple components
      <ScrollView>
        <View style={styles.textinput}>
          <View style={{ flex: 1, flexDirection: "row", marginBottom: 25 }}>
            <View style={{ flex: 3, alignItems: "flex-start", margin: 1 }}>
              <Text
                style={{ fontSize: 17, fontFamily: "Roboto", color: "black" }}
              >
                Welcome to service portal, please enter your information to be
                able to use the portal and add your property details
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Image
                source={require("../img/upimg.png")}
                style={{
                  height: 40,
                  width: 40,
                  marginRight: 30,
                  marginTop: 20
                }}
              />
            </View>
          </View>

          <FormItem
            isRequired={true}
            regExp={/^\d+$/}>
          <Text style={styles.addr1text}>Name *</Text>
          <TextInput
            ref="Name"
            isRequired={true}
            value={this.state.Name}
            onChangeText={Name => this.setState({ Name })}
            placeholder={"Enter the Name"}
            style={styles.addr1}
          />
         </FormItem>
         <FormItem
            isRequired={true}>
          <Text style={styles.addr1text}>Company</Text>
          <TextInput
            ref="Company_Category"
            value={this.state.Company}
            onChangeText={Company => this.setState({ Company })}
            placeholder={"Enter the Company"}
            style={styles.InputSelector}
          />
          </FormItem>
          <Text style={styles.addr1text}>Nationality *</Text>
          <TextInput
           isRequired={true}
            value={this.state.Nationality}
            onChangeText={Nationality => this.setState({ Nationality })}
            placeholder={"Enter the Nationality"}
            style={styles.InputSelector}
          />
          <Text style={styles.addr1text}>Phone Number</Text>
          <TextInput
            ref="phone_number"
            value={this.state.phone_number}
            onChangeText={phone_number => this.setState({ phone_number })}
            placeholder={"Enter the phone_number"}
            style={styles.InputSelector}
          />
          <Text style={styles.addr1text}>Address *</Text>
          <TextInput
           isRequired={true}
            value={this.state.Address}
            onChangeText={Address => this.setState({ Address })}
            placeholder={"Enter the Address"}
            style={styles.InputSelector}
          />
          <Text style={styles.addr1text}>PO Box</Text>
          <TextInput
            value={this.state.pobox}
            onChangeText={pobox => this.setState({ pobox })}
            placeholder={"Enter the pobox"}
            style={styles.InputSelector}
          />
          <Text style={styles.addr1text}>Mobile *</Text>
          <TextInput
           isRequired={true}
            value={this.state.mobile}
            onChangeText={mobile => this.setState({ mobile })}
            placeholder={"Enter the mobile"}
            style={styles.InputSelector}
          />
          <Text style={styles.addr1text}>Email *</Text>
          <TextInput
           isRequired={true}
            value={this.state.Email}
            onChangeText={Email => this.setState({ Email })}
            placeholder={"Enter the Email"}
            style={styles.InputSelector}
          />

          <Text style={styles.addr1text}>Password *</Text>
          <TextInput
           isRequired={true}
            value={this.state.Password}
            onChangeText={Password => this.setState({ Password })}
            placeholder={"Enter the Password"}
            style={styles.InputSelector}
          />
          <Text style={styles.addr1text}>Confirm Password *</Text>
          <TextInput
           isRequired={true}
            value={this.state.ConfirmPassword}
            onChangeText={ConfirmPassword => this.setState({ ConfirmPassword })}
            placeholder={"Enter the ConfirmPassword"}
            style={styles.InputSelector}
          />
          <WebView
            javaScriptEnabled={true}
            mixedContentMode={"always"}
            style={{ height: 500 }}
            source={{
              html: this.getWebviewContent(),
              baseUrl: "http://192.168.0.94:8082" // <-- SET YOUR DOMAIN HERE
            }}
          />

          <Button disabled={!this.state.Name || !this.state.Nationality || !this.state.Email || !this.state.Password || !this.state.mobile}
            title="Create Account"
            color="#bc9e6d"
            onPress={() => { 
              this.register();
              this.props.navigation.navigate("Login");
            }}

           
            style={styles.next}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#F5FCFF"
  },
  textinput: {
    flex: 1,
    margin: 20
    // justifyContent: 'center',
    // alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 23,
    textAlign: "center",
    margin: 10,
    color: "black"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  Name: {
    width: 200,
    height: 26,
    fontFamily: "Roboto",
    fontSize: 18,

    color: "black"
  },
  InputSelector: {
    width: 300,
    height: 36,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderWidth: 0.5
  },
  addr1: {
    width: 300,
    height: 36,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: "#ffffff",
    borderWidth: 0.5
  },
  addr2: {
    width: 300,
    height: 50,
    borderRadius: 4,
    marginBottom: 20,
    backgroundColor: "#ffffff"
  },
  Company: {
    width: 200,
    height: 26,
    fontFamily: "Roboto",
    fontSize: 18,

    color: "black"
  },
  companyemail: {
    width: 200,
    height: 26,
    fontFamily: "Roboto",
    fontSize: 18,

    color: "black"
  },
  addr1text: {
    width: 200,
    height: 26,
    fontFamily: "Roboto",
    fontSize: 18,
    color: "black"
  },
  next: {
    marginTop: 10,
    width: 50,
    flex: 1
  },
  buttonstyle: {
    width: 150,
    height: 50,
    flex: 1,
    flexDirection: "row"
  },
  prev: {
    width: 50
  }
});

export default registerpage;