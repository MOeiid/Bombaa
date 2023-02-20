import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import CarList from "./CarList";
import credit from "./Credit";
import Branches from "./Branches";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ImageBackground } from "react-native";

const Drawer = createDrawerNavigator();

function Menu() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition="left"
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        drawerStyle={{
          ImageBackground: (
            <Image source={require("../assets/images/menuBackgroumd.png")} />
          ),
        }}
        screenOptions={{
          swipeEnabled: true,
          gestureEnabled: true,
        }}
      >
        <Drawer.Screen
          name="Branches"
          component={Branches}
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? "#0080ff" : "#999999"}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="CarList"
          component={CarList}
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 20}
                color={focused ? "#0080ff" : "#999999"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Credit"
          component={Credit}
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? "#0080ff" : "#999999"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Gas Station"
          component={GasStation}
          options={{
            drawerIcon: ({ focused }) => (
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 20}
                color={focused ? "#0080ff" : "#999999"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Menu;
