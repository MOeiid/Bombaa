import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const MyHeader = (props) => {
    return (
        <View style={Styles.headerStyle}>
            {props.imageRightPath ? <TouchableOpacity style={Styles.imageRight} onPress={() => props.imageRightOnPress}>
                <Image
                    source={props.imageRightPath}
                    resizeMode='contain'
                    style={{
                        width: 31.05,
                        height: 20.3,
                    }} />
            </TouchableOpacity> : null}
            <Text style={Styles.headerName}>{props.title}</Text>
            {props.imageLeftPath ? <TouchableOpacity style={Styles.imageLeft} onPress={() => props.imageLeftOnPress}>
                <Image
                    source={props.imageLeftPath}
                    resizeMode='contain'
                    style={{
                        width: 19.28,
                        height: 17.67,
                    }} />
            </TouchableOpacity> : null}
        </View>
    );
};
const Styles = StyleSheet.create({
    headerStyle: {
        height: 42,
        backgroundColor: '#3F403F',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    imageRight: {
        width: 45, 
        height: '100%',
        position: 'absolute',
        right: 0,
        backgroundColor: '#333030',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageLeft: {
        width: 45, 
        height: '100%',
        position: 'absolute',
        left: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
export default MyHeader;
