import { StyleSheet, View, Modal, ActivityIndicator, Text } from 'react-native'
import {useSelector} from 'react-redux'

const Loader = () => {
  const show = useSelector((state:{LoaderReducer:boolean}) => state.LoaderReducer)
  if(!show){return null}
  
  return (
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <ActivityIndicator size={50} color={"#4DD8C1"} />
        </View>
      </View>
  )
}

export default Loader
const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    alignSelf:"center",
    top:"60%"
  },
  modalView: {
    backgroundColor: "#0F2C3C",
    padding: 15,
    borderRadius: 10
  },
})