import React, { Component } from 'react';
import firebase from '../config/firebase';
import { Button, Alert, StyleSheet, Text, View, TextInput, ActivityIndicator } from 'react-native';


class SigninScreen extends Component {
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  onTextChange = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  signIn = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter correct details.')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        alert('Logged in to app')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="grey"/>
        </View>
      )
    }    
    return (
      <View style={styles.formWrapper}> 
        <TextInput
          style={styles.formField}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.onTextChange(val, 'email')}
        />
        <TextInput
          style={styles.formField}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.onTextChange(val, 'password')}
          maxLength={20}
          secureTextEntry={true}
        />   
        <Button
          color="black"
          title="Login"
          onPress={() => this.signIn()}
        />

        <Text 
          style={styles.redirectText}
          onPress={() => this.props.navigation.navigate('SignupScreen')}>
          Don't have account ? Signup
        </Text>                          
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    padding: 30,
    backgroundColor: '#fff',    
    flexDirection: "column",
  },
  formField: {
    width: '100%',
    alignSelf: "center",
    borderColor: "#444",
    borderBottomWidth: 1,    
    marginBottom: 20,
    paddingBottom: 20,
  },
  redirectText: {
    textAlign: 'center',
    color: 'blue',
    marginTop: 24,    
  },
  loading: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',    
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
});

export default SigninScreen;