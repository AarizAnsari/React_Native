import { StyleSheet, Text, View, TextInput, Button, ScrollView, Alert} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Services from '../services/apiServices';
import Loader from '../components/Loader';

export default function SignupForm(props: { navigation: { navigate: (arg0: string) => void } }) {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [warning,setWarning] = useState('');

  async function viewController(username: string, password: string) {
    await Services.userLogin(username, password)
      .then(() => {props.navigation.navigate('Users') })
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
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#ffffff"
            secureTextEntry
            onChangeText={(val) => {
                if(val == password){setWarning('')}
                else{setWarning('Passwords dont match')}
            }}
          />
          <View style = {styles.warnbox}>
            <Text style = {styles.warn}>{warning}</Text>
          </View>
          <Loader/>
          <View style={styles.button}>
            <Button
              title="Sign Up"
              color="#4DD8C1"
              onPress={() => {
                viewController(username,password)
              }}
            />
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
    marginBottom:40,
    marginTop:"30%"
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
    margin:10
  },
  modal:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  modalView:{
    backgroundColor:"#0F2C3C",
    padding:15,
    borderRadius:10
  },
  warnbox:{
    width:"80%",
    alignSelf:"center"
  },
  warn:{
    color:"red"
  }
})