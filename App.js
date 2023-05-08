import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import Login from './components/Login'
const App = () => {
  return (
    <View style={style.container}>
      <Login/>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'gray'
  }
})

export default App