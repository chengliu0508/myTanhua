// In App.js in a new project

import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './pages/account/login';
import Demo from './components/Demo';
import Userinfo from './pages/account/userinfo';
import Tabbar from './tab';
import {inject, observer} from 'mobx-react';

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    getMoviesFromApiAsync();
  }, []);

  function getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        console.log('responseJson', responseJson);
        return responseJson.movies;
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <NavigationContainer
      onStateChange={state => console.log('-----Navigation change----', state)}>
      <Stack.Navigator>
        <Stack.Screen name="Tabbar" component={Tabbar} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Demo" component={Demo} />

        <Stack.Screen name="Userinfo" component={Userinfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
