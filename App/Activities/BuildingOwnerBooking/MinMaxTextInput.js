import React from 'react';
import {StyleSheet, Text, View, TextInput } from 'react-native';



export default class MinMaxTextInput extends React.Component {
    static defaultProps = {
        minLength:0,
        maxLength:900,
    }

    getCharacter = (numCharacters) => {
        return (numCharacters == 1)
        ? "character"
        : "characters";
    }

    
    

    //x char needed
    getCharacterMessage = (numCharacters) => {
        return `${numCharacters} ${this.getCharacter(numCharacters)} needed`;
    }

    //x more char needed
    getMoreCharacterMessage = (numCharacters) => {
        return `${numCharacters} more ${this.getCharacter(numCharacters)} needed`;

    }

    //x char remaining
    getCharacterRemainingMessage = (numCharacters) => {
        return `${numCharacters} ${this.getCharacter(numCharacters)} remaining`;
    }


    renderMessage() {
        var len= (this.props.value) ? this.props.value.length : 0;
        var msg= "";

        //User has max # of Characters...
        if(len == this.props.maxLength) {return <View/>;}


        //User has more than min # of Characters...
        if(len >= this.props.minLength) {
            msg= this.getCharacterRemainingMessage(this.props.maxLength - len);
            return <Text style={styles.neutralText}>{msg}</Text>
        }
       
        //User dosent have enough Char, but hasn't typing yet... 
        if(len < this.props.minLength && len == 0) {
            msg=this.getCharacterMessage(this.props.minLength);            
            return <Text style={styles.neutralText}>{msg}</Text>
        }

        //User dosent have enough Char, has started typing ... 
        if(len < this.props.minLength && len > 0) {
            msg=this.getMoreCharacterMessage(this.props.minLength - len);            
            return <Text style={styles.invalidText}>{msg}</Text>
        }
        return <View/>;

       
    }
    
    render() {

        return(
        <View style={StyleSheet}>

        <TextInput {...this.props}/>
 
        {this.renderMessage()}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  




        </View>
        );
    }                                                                                                                                                   
}                                                                                                                                                               

const styles = StyleSheet.create({
    neutralText: {color: "red"},
    invalidText: { color: "blue"}
})