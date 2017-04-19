import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component{
  componentWillMount() {
    const config = {
        apiKey: "AIzaSyCiHWv3S7q3Us-VRWK6foaKaGdPICpDVBE",
        authDomain: "manager-6fa93.firebaseapp.com",
        databaseURL: "https://manager-6fa93.firebaseio.com",
        projectId: "manager-6fa93",
        storageBucket: "manager-6fa93.appspot.com",
        messagingSenderId: "251149616167"
      };
    firebase.initializeApp(config);
  }




  render(){
    return(
      <Provider store={createStore(reducers)}>

          <LoginForm/>


      </Provider>
      );
  }
}

export default App;
