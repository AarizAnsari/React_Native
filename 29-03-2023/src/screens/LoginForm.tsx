// FIRST SCREEN TO BE DISPLAYED WHEN APP STARTS

import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Services from '../services/apiServices';
import Loader from '../components/Loader';



export default function LoginForm(props: { navigation: { navigate: (arg0: string) => void } }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
  async function viewController(username: string, password: string) {
    await Services.userLogin(username, password)
      .then(() => {props.navigation.navigate('Users')})
      .catch(() =>{Alert.alert('Invalid username or Password')});
  }

    return (
      <SafeAreaView>
        <ScrollView style={styles.body}>
          <View>
            <View>
              <Text style={styles.heading1}>smart<Text style={styles.heading2}>Card</Text></Text>
            </View>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#ffffff"
              onChangeText={(val) => setUsername(val)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#ffffff"
              secureTextEntry
              onChangeText={(val) => setPassword(val)}
            />
            <Loader/>
            <View style={styles.button}>
              <Button
                title="Log In"
                color="#4DD8C1"
                onPress={() => viewController(username,password)}
              />
            </View>
            <View style={styles.footerbox}>
              <Text style={styles.footer}>
                Forgot Password ?
              </Text>
              <Text style={styles.footer}
                onPress={() => { props.navigation.navigate('Signup') }}
              >
                New User
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }


  const styles = StyleSheet.create({
    body: {
      backgroundColor: '#1d4a5d',
      height: "100%",
    },
    heading1: {
      color: "#4DD8C1",
      fontSize: 30,
      textAlign: "center",
      marginTop: "40%"
    },
    heading2: {
      fontWeight: "100",
      fontStyle: "italic",
      textDecorationLine: "underline"
    },
    input: {
      height: 40,
      marginLeft: "10%",
      borderWidth: 1,
      padding: 10,
      width: '80%',
      marginVertical: 10,
      backgroundColor: "#0F2C3C",
      borderColor: "#0F2C3C",
      color: "#ffffff",

    },
    button: {
      width: '80%',
      marginLeft: "10%",
      marginVertical: 10
    },
    footer: {
      color: 'white',
      margin: 10
    },
    modal: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    modalView: {
      backgroundColor: "#0F2C3C",
      padding: 15,
      borderRadius: 10
    },
    footerbox: {
      flex: 1,
      flexDirection: "row",
      width: "80%",
      alignSelf: "center",
      justifyContent: "space-between"
    }
  })

