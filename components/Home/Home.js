import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Slide from '../Slide/Slide'

const Home = () => {

  return (
    <View style={style.container}>
     <Slide/>
      <View style={style.box5}></View>
    </View>
  )
}

export default Home

const style = StyleSheet.create({
  container: {
    height: "100%",
  },
  box: {
    position: "relative",
    height: "30%",
  },
  image1: {
    width: "100%",
    height: "100%",
    opacity: 0.9,
  },
  box2: {
    position: "absolute",
    bottom: -70,
    left: "5%",
    width: "90%",
    height: 180,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#0E89CB",
  },
  box21: {
    position: "absolute",
    bottom: -70,
    left: "5%",
    width: "90%",
    height: 180,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#0E89CB",
  },
  image2: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  box3: {
    height: "70%",
    display: "flex",
    justifyContent: "center",
    marginLeft: 35,
  },
  text1: {
    fontSize: 30,
    fontWeight: 600,
    color: "#fff",
  },
  box4: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "30%",
    backgroundColor: "#00000088",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  add: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#0E89CB",
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 0,
  },
  text2: {
    fontSize: 16,
    fontWeight: 600,
    color: "#fff",
  },
  text3: {
    fontSize: 30,
    fontWeight: 600,
    color: "#fff",
  },
  box5: {
    height: "60%"
  },
  box6: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  }
})