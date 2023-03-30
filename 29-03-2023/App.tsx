
import React from 'react';
import LoginForm from './src/screens/LoginForm';
import UserList from './src/screens/UserList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <stack.Navigator>
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
      </stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
