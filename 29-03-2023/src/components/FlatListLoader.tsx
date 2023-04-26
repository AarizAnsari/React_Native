import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'



const FlatListLoader = () => {

const show = useSelector((state:{LoaderReducer:boolean}) => state.LoaderReducer)

  if(!show){
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