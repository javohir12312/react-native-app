import React from 'react'
import { Text, View, StyleSheet, Button, Modal } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Profil = () => {
  return (
    <View style={style.box}>
      <View style={style.top}>
        <View style={style.avatar}>
          <Ionicons name="ios-person-outline" size={70} color="white" />
          <View style={style.avatar2Box}>
            <Entypo style={style.avatar2} name="camera" size={15} color="white" />
          </View>
        </View>
        <View style={style.text}>
          <Text style={style.text1}>Jaloliddin Zokirov</Text>
          <Text style={style.text2}>Company: <Text style={style.text3}>Micromania</Text></Text>
        </View>
      </View>
      <View style={style.center}>

        <View style={style.centerTop}>
          <Text style={style.centerText1}>Email:</Text>
          <View style={style.centerEmail}>
            <Text style={style.email}>username@gmail.com</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
          </View>
        </View>

        <View style={style.centerCenter}>
          <Text style={style.centerText1}>Date of birth:</Text>
          <View style={style.centerEmail}>
            <Text style={style.email}>19.08.2003</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
          </View>
        </View>

        <View style={style.centerBottom}>
          <Text style={style.centerText1}>Gander:</Text>
          <View style={style.centerEmail}>
            <Text style={style.email}>Male</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#999" />
          </View>
        </View>

      </View>
      <View style={style.bottom}></View>
    </View>
  )
}

export default Profil

const style = StyleSheet.create({
  box: {
    backgroundColor: "#ccc",
    height: "100%",
    alignItems: "center",
  },
  top: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    position: "relative",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#EB7BC0",
  },
  avatar2Box: {
    position: "absolute",
    bottom: -12,
    right: -7,
    width: 35,
    height: 35,
    backgroundColor: "#EB7BC0",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  avatar2: {

  },
  text: {
    marginTop: 20,
    alignItems: "center",
  },
  text1: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  text2: {
    fontSize: 14,
    fontWeight: "500",
    color: "#727272",
  },
  text3: {
    textAlign: "center",
    fontSize: 18,
    color: "#000",
  },
  center: {
    width: "90%",
    backgroundColor: "white",
    marginTop: 30,
    padding: 20,
    borderRadius: 20,
  },
  centerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  centerCenter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 14,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
  centerBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingTop: 14,
  },
  centerText1: {
    fontWeight: "600",
    fontSize: 16,
  },
  centerEmail: {
    flexDirection: "row",
    alignItems: "center",
  },
  email: {
    fontWeight: "600",
    fontSize: 16,
    color: "#999",
  },
  bottom: {

  }
})