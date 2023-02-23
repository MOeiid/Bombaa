import react from "react";
import { View, Text, StyleSheet } from "react-native";
import Background from "../Components/Background";

const BranchesList = () => {
    return (
        <Background>
            <View style={Styles.container}>
                <Text>Branches List!</Text>
            </View>
        </Background>
    );
};
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default BranchesList;