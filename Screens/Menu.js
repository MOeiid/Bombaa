import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CarList from "./CarList";
import Credit from "./Credit";
import Branches from "./Branches";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { ImageBackground } from "react-native";
import Credit from "./Credit";

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
              <Image
                source={require("../assets/images/image_icon_2.png")}
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
                name="car-rear"
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
                name="hand-holding-dollar"
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
                name=""
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
