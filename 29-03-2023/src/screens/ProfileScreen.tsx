import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ProfileScreen(props: {
  route: any; navigation: {
    pop: any; navigate: (arg0: string) => any
  };
}) {

  const userData = props.route.params;

  return (
    <View style={styles.body}>
      <View style={styles.card}>
        <Text style={styles.name}>{userData.name}</Text>
        <View style={styles.divider}></View>
        <Text style={styles.id}>{userData.name.toLowerCase()}@sample.com</Text>
        <View style={styles.divider}></View>
        <Text style={styles.id}>id: {userData.id}</Text>
        <View style={styles.emo}>
          <View style={styles.emojibox}>
            <Text style={styles.emoji}>📞</Text>
            <Text style={styles.emoji}>Call</Text>
          </View>
          <View style={styles.emojibox}>
            <Text style={styles.emoji}>📧</Text>
            <Text style={styles.emoji}>Email</Text>
          </View>
          <View style={styles.emojibox}>
            <Text style={styles.emoji}>📱</Text>
            <Text style={styles.emoji}>Chat</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.avatar}
        source={
          { uri: userData.image }
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#B6B6B6"
  },
  avatar: {
    height: 150,
    width: 150,
    borderRadius: 100,
    margin: 3,
    borderColor: "white",
    borderWidth: 5,
    marginTop: 30,
    marginBottom: 20,
    position: "absolute"
  },
  card: {
    backgroundColor: "#0F2C3C",
    width: "95%",
    borderRadius: 20,
    paddingTop: 80,
    flex: 1,
    alignItems: "center",
    margin: 10,
    marginTop: 130,
  },
  name: {
    color: "white",
    fontSize: 36
  },
  divider: {
    width: "85%",
    height: 2,
    backgroundColor: "black",
    marginVertical: 20
  },
  id: {
    color: 'white',
    fontSize: 18
  },
  emo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  emojibox: {
    margin: 30,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#1d4a5d",
    maxHeight: 80,
    borderRadius: 5
  },
  emoji: {
    fontSize: 28,
    color: "white"
  }
})