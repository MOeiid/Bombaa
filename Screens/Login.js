import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Link } from '@react-navigation/native';
import { FontAwesome } from "@expo/vector-icons";
import Background from "../Components/Background";
import Colors from "../assets/Colors";

export default function Login({ navigation }) {
  const [username, onChangeUsername] = useState("");
  const [password, onChangePassword] = useState("");
  const [isFill, setIsFill] = useState(true);
  useEffect(() => {
    if (username && password) {
      setIsFill(false)
    } else {
      setIsFill(true)
    }
  }, [username, password])
  return (
    <Background>
      <ImageBackground
        style={Styles.background}
        source={require("../assets/images/GettingStartedscreen.png")}
      >
        <View style={Styles.container}>
          <StatusBar style="auto" />
          <View style={Styles.logo_view}>
            <Image
              style={Styles.logo}
              source={require("../assets/images/Group24669.png")}
            />
            <Image
              style={Styles.logo_background}
              source={require("../assets/images/logo-background.png")}
            />
          </View>
          <View style={Styles.login_form}>
            <Text style={Styles.text_1}>LOGIN</Text>
            <Text style={Styles.text_2}>Add your details to login</Text>
            <View style={Styles.inputView}>
              <TextInput
                style={Styles.TextInput}
                placeholder="Username"
                placeholderTextColor={Colors.PlaceHolderColor}
                value={username}
                onChangeText={onChangeUsername}
                cursorColor='#ce2733'
              />
              <View>
                <FontAwesome name="user" size={24} color={"black"} />
              </View>
            </View>
            <View style={Styles.inputView}>
              <TextInput
                style={Styles.TextInput}
                placeholder="Password..."
                placeholderTextColor={Colors.PlaceHolderColor}
                secureTextEntry={true}
                value={password}
                cursorColor='#ce2733'
                onChangeText={onChangePassword}
              />
              <View>
                <FontAwesome name="lock" size={24} color={"black"} />
              </View>
            </View>
            <Text>Forget your <Text style={{color: 'blue'}} onPress={() => navigation.replace("HomeScreen")}>password</Text>?</Text>
            <TouchableOpacity
              style={{
                backgroundColor: isFill ? "#ccc" : Colors.MainColor,
                ...Styles.loginBtn
              }}
              disabled={isFill}
              onPress={() => navigation.replace("HomeScreen")}>
              <Text style={Styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </Background >
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    marginTop: 120
  },
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  login_form: {
    justifyContent: "center",
    alignItems: "center",
    width: 339,
    height: 338,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingTop: 50,
  },
  text_1: {
    fontSize: 25,
    color: "#313131",
    fontWeight: 'bold'
  },
  text_2: {
    fontSize: 14,
    paddingBottom: 30,
    color: "#7C7D7E",
    fontWeight: '400'
  },
  inputView: {
    backgroundColor: '#f2f2f2',
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    width: 307,
    height: 56,
    marginBottom: 20,
    paddingRight: 20
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: 307,
    borderRadius: 25,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    // backgroundColor: Colors.MainColor,
  },
  loginText: {
    color: "white",
  },
  logo_view: {
    marginBottom: 40,
    paddingTop: 60
  },
  logo: {
    width: 178.71,
    height: 55.76,
    zIndex: 99
  },
  logo_background: {
    width: 79,
    height: 79,
    position: 'absolute',
    top: 45,
    left: 13
  }
});
