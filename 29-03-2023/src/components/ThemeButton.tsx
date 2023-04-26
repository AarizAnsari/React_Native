import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import store from '../redux/store';
import {LightAction,DarkAction} from '../redux/actions/DarkThemeAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeButton = () => {

  let defaultIcon ='🌙';
  let defaultTheme=dark;

 const [style, setStyle] = useState({icon:defaultIcon,theme:defaultTheme})

 async function toggleIcon(icon:string){
      if(icon === '🌙'){
        setStyle({icon:'☀',theme:light})
        store.dispatch(LightAction())
        AsyncStorage.setItem('theme','light');
      }
      else {
        setStyle({icon:'🌙',theme:dark})
        store.dispatch(DarkAction())
        AsyncStorage.setItem('theme','dark')
      }
  }

  return (
    <TouchableOpacity
    onPress={()=>{toggleIcon(style.icon)}}
    >
    <View style = {[styles.box,style.theme.box]}>
      <Text style = {styles.icon}>{style.icon}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default ThemeButton

const styles = StyleSheet.create({
  icon:{
    fontSize:16,
    color:'yellow'
  },
  box:{
    padding:3,
    borderRadius:5
  }
})

const light = StyleSheet.create({
  box:{
    backgroundColor:'grey'
  }
})

const dark = StyleSheet.create({
  box:{
    backgroundColor:'white'
  }
})