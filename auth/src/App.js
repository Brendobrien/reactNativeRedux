import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA5SRye6xr3DJuTw0abDzlYV9Cahs6xkDs',
      authDomain: 'authentication-e2676.firebaseapp.com',
      databaseURL: 'https://authentication-e2676.firebaseio.com',
      storageBucket: '',
      messagingSenderId: '626538201406'
    });
  }

  render() {
    return (
      <View>
          <Header headerText="Authentication" />
          <LoginForm />
      </View>
    );
  }
}

export default App;
