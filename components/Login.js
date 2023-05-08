import React from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const App = () => {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <View style={style.box1} />
        <View style={style.box2} />
        <View style={style.box3} />
        <View style={style.box4} />
        <View style={style.box5} />
      </View>

    </View>

  )
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '100%'
  }, box: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 5,
    borderRadius: 5
  },
  box1: {
    width: 60, height: 60, backgroundColor: 'powderblue',
    borderRadius:50
  },
  box2: {
    width: 60, height: 60, backgroundColor: 'skyblue',
    borderRadius:50
  },
  box3: {
    width: 60, height: 60, backgroundColor: 'steelblue',
    borderRadius:50
  },
  box4: {
    width: 60, height: 60, backgroundColor: 'steelblue',
    borderRadius:50
  },
  box5: {
    width: 60, height: 60, backgroundColor: 'steelblue',
    borderRadius:50
  },

})
export default App