import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import React from 'react'

type visiblity = {
  hidden:boolean
}

const FlatListLoader = (props:visiblity) => {

  if(props.hidden == true){
    return null;
  }   
  return (
    <View style = {styles.card}>
      <ActivityIndicator/>
    </View>
  )
}

export default FlatListLoader

const styles = StyleSheet.create({
    card :{
        width:'90%',
        backgroundColor:"white",
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        alignSelf:"center"
    }
})