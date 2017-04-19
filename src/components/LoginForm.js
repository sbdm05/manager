import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import firebase from 'firebase';
import {emailChanged, passwordChanged} from '../actions';
import {Button, Card, CardSection, Input, Spinner} from './common';

class LoginForm extends Component{
  onEmailChange (text){
    this.props.emailChanged(text);
  }
  onPasswordChange(text){
    this.props.passwordChanged(text);
  }



  render(){
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}


const MapStateToProps = state =>{
  return{
    email: state.auth.email,
    password: state.auth.password
  };
}




export default connect (MapStateToProps, {emailChanged, passwordChanged}) (LoginForm);

