import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import Login from './components/Footer/Footer'
const App = () => {
  return (
    <View style={style.container}>
      <View style={style.boxBig}>

      </View>
      <Login/>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1, 
  },
  boxBig:{
    flex:11,
    backgroundColor:'gray'
  }
})

export default App