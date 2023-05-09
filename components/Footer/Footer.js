import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons'; import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { openHome } from '../../slice';


const Footer = () => {
  
  const selector = useSelector((state) => state.home)
  const dispatch = useDispatch()

  const navigation = useNavigation();

  const GoToProfile = () => {
    navigation.navigate('Profile');
  };

  const GoToHome = () => {
    dispatch(openHome)
    navigation.navigate('Home');
  };

  const GoToHistory = () => {
    navigation.navigate('Info');
  };


  const GoToInput = () => {
    navigation.navigate('Input');
  };

  const GoToOutput = () => {
    navigation.navigate('Output');

  };

  return (
    <View style={style.container}>
      <View style={style.box}>
        <View style={style.box1} >
          <Icon name="heart" size={30} color="red" onPress={GoToOutput} />
        </View>
        <View style={style.box2} >
          <Icon name="heart" size={30} color="red" onPress={GoToInput} />
        </View>
        <View style={style.box3}>
          <MaterialCommunityIcons name="home-outline" size={50} color={"black"} onPress={GoToHome} />
          <Text>
            {selector}
          </Text>
        </View>
        <View style={style.box4} >
          <Icon name="heart" size={30} color="red" onPress={GoToHistory} />
        </View>
        <View style={style.box5} >
          <Ionicons name="ios-person-outline" size={30} color="gray" onPress={GoToProfile} />
        </View>
      </View>
    </View>
  );
};


const style = StyleSheet.create({

  container: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'white',
    width: '100%'
  },
  box: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 5,
    borderRadius: 5
  },
  box1: {
    width: 60, height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box2: {
    width: 60, height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box3: {
    width: 60,
    height: 60,
    backgroundColor: "white",
  },
  box4: {
    width: 60, height: 60,
    borderRadius: 50,
    marginBottom:-10
  },
  box5: {
    width: 60, height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },

})
export default Footer;