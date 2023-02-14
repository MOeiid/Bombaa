import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import Login from "./Login";
const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Login");
  }, 2000);
  return (
    <View>
      {/* <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#465bd8"
      /> */}
      <Image
        style={styles.splash}
        source={require("../assets/images/MaskGroup4.png")}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splash: {
    // flex:1,
    // position: absolute,
    // flexDirection:'column',
    // justifyContent:'center',
    // alignItems:'center',
    // resizeMode: "cover",
    // padding: 10,
    // Width: "100%",
    // Height: "100%",
    // position: 'absolute',
    width: "100%",
    height: "100%",
    // overflow: 'hidden',
  },
});

export default Splash;
