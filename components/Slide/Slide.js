import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import CardBg from '../../assets/card_bg.jpg'
import { AntDesign } from '@expo/vector-icons';

const SliderExample = () => {
  return (
    <View style={{ position: 'absolute', bottom: -70 }}>
      <Swiper>
        <View style={styles.slide}>

          <View style={style.box2}>
            <Image source={CardBg} style={style.image2} />
            <View style={style.box3}>
              <Text style={style.text1}>1 000 000 000$</Text>
            </View>
            <View style={style.box4}>
              <Text style={style.text2}>Zokirov J</Text>
              <Text style={style.text2}>19/08/03</Text>
            </View>
          </View>


        </View>
        <View style={styles.slide}>

          <View style={style.box2}>
            <Image source={CardBg} style={style.image2} />
            <View style={style.box6}>
              <View style={style.add}>
                <Text style={style.text3}>
                  <AntDesign name="plus" size={34} color="white" />
                </Text>
              </View>
            </View>
          </View>

        </View>
      </Swiper>
    </View>
  );
};

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
};


const style = StyleSheet.create({
  container: {
    height: "100%",
  },
  box: {
    height: "30%",
    justifyContent: 'center',
  },
  image1: {
    opacity: 0.9,
  },
  box2: {
    position: "absolute",
    left: "5%",
    width: "90%", height: "30%",
    justifyContent: 'center',
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
export default SliderExample;