import React, { useState } from 'react';
import LoginForm from './src/screens/LoginForm';
import UserList from './src/screens/UserList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from './src/screens/ProfileScreen';
import { LogBox } from 'react-native';
import SignupForm from './src/screens/SignupForm';
import { Provider } from 'react-redux';
import store from './src/redux/store';


const stack = createNativeStackNavigator();

function App(): JSX.Element {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <stack.Navigator>
        {/* -------Screen One------ */}
        <stack.Screen
          name="Login"
          component={LoginForm}
          options={
            {
              headerStyle: { backgroundColor: "#0F2C3C" },
              headerTitleStyle: { color: "#4DD8C1" },
              statusBarColor: "#0F2C3C"
            }
          } />

        {/* -------Screen Two------ */}
        <stack.Screen
          name='Users'
          component={UserList}
          options={
            {
              headerStyle: { backgroundColor: "#0F2C3C" },
              headerTitleStyle: { color: "#4DD8C1" },
              headerTintColor: "#4DD8C1",
              statusBarColor: "#0F2C3C"
            }
          } />

        {/* -------Screen Three------ */}
        <stack.Screen
          name='Profile'
          component={ProfileScreen}
          options={({
            headerStyle: { backgroundColor: "#0F2C3C" },
            headerTitleStyle: { color: "#4DD8C1" },
            headerTintColor: "#4DD8C1",
            statusBarColor: "#0F2C3C",
           
          })}
        />

        {/* -------Screen Four------ */}
        <stack.Screen
          name="Signup"
          component={SignupForm}
          options={({
            headerStyle: { backgroundColor: "#0F2C3C" },
            headerTitleStyle: { color: "#4DD8C1" },
            headerTintColor: "#4DD8C1",
            statusBarColor: "#0F2C3C",
          })} />
      </stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
