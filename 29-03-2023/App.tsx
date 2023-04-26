import React, { useLayoutEffect } from 'react';
import LoginForm from './src/screens/LoginForm';
import UserList from './src/screens/UserList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from './src/screens/ProfileScreen';
import { LogBox } from 'react-native';
import SignupForm from './src/screens/SignupForm';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import ThemeButton from './src/components/ThemeButton';
import {LightAction,DarkAction} from './src/redux/actions/DarkThemeAction'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProductFilter from './src/screens/ProductFilter';

const stack = createNativeStackNavigator();

function App(): JSX.Element {

  async function setTheme(){
   const theme = await AsyncStorage.getItem('theme');
   if(theme === 'light'){store.dispatch(LightAction())}
   else{store.dispatch(DarkAction())}
  }

  useLayoutEffect(() => {
    setTheme();
  }, [])
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
              statusBarColor: "#0F2C3C",
              headerRight: () => (<ThemeButton/>),
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

<stack.Screen
          name="Products"
          component={ProductFilter}
          options={
            {
              headerStyle: { backgroundColor: "white" },
              statusBarColor: "white"
            }
          } />
      </stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
