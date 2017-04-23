import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent =() => {
  return (
    <Router sceneStyle={{paddingTop:65}}>
      <Scene
      key="login"
      component={LoginForm}
      title="Please Login"/>
       <Scene
      key="employeelist"
      component={EmployeeList}
      title="Employee List"
           />
    </Router>
    );
};

export default RouterComponent;