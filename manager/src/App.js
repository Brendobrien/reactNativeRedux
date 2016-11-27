import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import firebase from 'firebase';    
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCbPiNo9uocupoqPlk-eRYmt6FJabeA3Ec',
      authDomain: 'manager-18993.firebaseapp.com',
      databaseURL: 'https://manager-18993.firebaseio.com',
      storageBucket: 'manager-18993.appspot.com',
      messagingSenderId: '386102119466'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
