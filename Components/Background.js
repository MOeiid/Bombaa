import { ImageBackground, StyleSheet } from "react-native";

const Background = ({ children }) => {
  return (
    <ImageBackground
      source={require("../assets/images/close-up-woman-gas-station.png")}
      resizeMode="cover"
      style={Styles.backgroundImage}
      imageStyle={{ opacity: 0.05 }}
    >
      {children}
    </ImageBackground>
  );
};
const Styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
});
export default Background;
