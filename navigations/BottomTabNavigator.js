import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BranchesList from '../Screens/BranchesList';
import CarsList from '../Screens/CarsList';
import CreditScreen from '../Screens/CreditScreen';
import Home from '../Screens/Home';
import DrawerNavigation from './DrawerNavigation';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                // headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    // position: 'absolute',
                    // bottom: 20,
                    // left: 10,
                    // right: 10,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    height: 80,
                    // borderRadius: 15,
                }
            }}
        >
            <Tab.Screen name="Menu" component={DrawerNavigation}
                listeners={({ navigation }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.openDrawer();
                    }
                })}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TouchableOpacity style={Styles.tapScreenView} onPress={() => navigation.openDrawer()}>
                            <View
                                style={Styles.iconView}>
                                <Image
                                    source={require('../assets/images/solid-align-right.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: focused ? '#ce3327' : '#656565',
                                    }} />
                            </View>
                            <Text style={{ color: focused ? '#ce3327' : '#656565', fontSize: 11 }} onPress={() => navigation.openDrawer()}>Menu</Text>
                        </TouchableOpacity>
                    )
                }} />
            <Tab.Screen name="Credit" component={CreditScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={Styles.tapScreenView}>
                            <View style={Styles.iconView}>
                                <Image
                                    source={require('../assets/images/income.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: focused ? '#ce2733' : '#656565'
                                    }} />
                            </View>
                            <Text style={{ color: focused ? '#ce3327' : '#656565', fontSize: 11 }}>Credit</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,

                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image
                                source={require('../assets/images/home.png')}
                                resizeMode='contain'
                                style={{
                                    top: -50,
                                    width: 80,
                                    height: 80,
                                    zIndex: 20,
                                    tintColor: focused ? '#ce2733' : 'none',
                                }}
                            />
                            <Image
                                source={require('../assets/images/circle-bg.jpeg')}
                                resizeMode='cover'
                                style={{
                                    position: 'absolute',
                                    bottom: 21,
                                    right: -13,
                                    width: 105,
                                    height: 60,
                                    zIndex: 8
                                }}
                            />
                            <Image
                                source={require('../assets/images/home-inner.png')}
                                resizeMode='contain'
                                style={{
                                    position: 'absolute',
                                    top: -25,
                                    left: 25,
                                    width: 30,
                                    height: 30,
                                    zIndex: 22,
                                }} />
                        </View>
                    )
                }} />
            <Tab.Screen name="Branches" component={BranchesList}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={Styles.tapScreenView}>
                            <View
                                style={Styles.iconView}>
                                <Image
                                    source={require('../assets/images/solid-map-marked-alt.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 20,
                                        height: 20,
                                        tintColor: focused ? '#ce2733' : '#656565'
                                    }} />
                            </View>
                            <Text style={{ color: focused ? '#ce3327' : '#656565', fontSize: 11 }}>Branches</Text>
                        </View>
                    )
                }} />
            <Tab.Screen name="Cars List" component={CarsList}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={Styles.tapScreenView} >
                            <View
                                style={Styles.iconView}>
                                <Image
                                    source={require('../assets/images/car.png')}
                                    resizeMode='contain'
                                    style={{
                                        width: 30,
                                        height: 30,
                                        tintColor: focused ? '#ce2733' : '#656565'
                                    }} />
                            </View>
                            <Text style={{ color: focused ? '#ce2733' : '#656565', fontSize: 11 }}>Cars List</Text>
                        </View>
                    )
                }} />
        </Tab.Navigator>
    );
}
const Styles = StyleSheet.create({
    shadow: {
        shadowColor: '#ce2733', //#7F5DF0
        shadowOffset: {
            width: 30,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    tapScreenView: {
        alignItems: 'center',
        justifyContent: 'center',
        // top: 10
    },
    iconView: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#F2F2F2',
        width: 45,
        height: 45
    },
    svgGapFiller: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
})
export default Tabs