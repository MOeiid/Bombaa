import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Background from "../Components/Background";
import Colors from "../assets/Colors";

export default function App() {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Background>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image_2}
          source={require("../assets/images/GettingStartedscreen.png")}
        >
          {/* <Image
          style={styles.image_3}
          source={require("../assets/images/Group24669.png")}
        /> */}
          <StatusBar style="auto" />
          <Text style={styles.text_1}>LOGIN</Text>
          <Text style={styles.text_2}>Add your details to login</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="User ID"
              placeholderTextColor="#003f5c"
              onChangeText={(id) => setID(id)}
            />
            <View>
              <Feather name="user" size={24} color={"black"} />
            </View>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password."
              placeholderTextColor="#003f5c"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
            <View>
              <Feather name="lock" size={24} color={"black"} />
            </View>
          </View>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
  },
  image_2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  image_3: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // resizeMode: "cover",
    // padding: 10,
    Width: "40%",
    Height: "100%",
  },
  text_1: {
    fontSize: 50,
    color: "black",
  },
  text_2: {
    fontSize: 20,
    paddingTop: 10,
    color: "#777",
  },
  inputView: {
    backgroundColor: Colors.PlaceHolderColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: Colors.PlaceHolderColor,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: Colors.MainColor,
  },
  loginText: {
    color: "white",
  },
});
