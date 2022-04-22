import React from 'react';
import Login from './pages/account/login';
import Demo from './components/Demo';
import Userinfo from './pages/account/userinfo';
import Tabbar from './tab';
import {inject, observer} from 'mobx-react';

import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Demo" component={Demo} />
      <Stack.Screen name="Tabbar" component={Tabbar} />
      <Stack.Screen name="Userinfo" component={Userinfo} />
    </Stack.Navigator>
  );
}
export default Navigator;
