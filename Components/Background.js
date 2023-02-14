import react from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";

const Background = ({ children }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/close-up-woman-gas-station.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        {children}
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    // flexDirection:'column',
    justifyContent: "center",
    // alignItems:'center',
    resizeMode: "cover",
    // padding: 10,
    width: "100%",
    height: "100%",
  },
});
export default Background;
