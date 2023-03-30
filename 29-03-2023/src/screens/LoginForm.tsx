import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginForm(props: { navigation: { navigate: (arg0: string) => void } }) {
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
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#ffffff"
            secureTextEntry
          />
          <View style={styles.button}>
            <Button
              title="Log In"
              color="#4DD8C1"
              onPress={() => props.navigation.navigate("Users")}
            />
          </View>
          <Text style={styles.footer}>
            Forgot Password ?
          </Text>
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
    textAlign: "center",
    marginVertical: 20,
  },
})