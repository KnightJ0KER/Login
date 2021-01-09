import React, { Component } from "react";
import styles from "./style";
import {Image, Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginScreen extends Component {

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Login</Text>
            <TextInput placeholder="Username" placeholderColor="grey" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="grey" style={styles.loginFormTextInput} secureTextEntry={true}/>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => this.onLoginPress()}
              title="Login"
            />
            <Text style ={styles.forgotPass}> Forgot Password ? </Text>
            <Button
              buttonStyle={styles.signupButton}
              onPress={() => this.onLoginPress()}
              title="Sign Up"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
 
}
