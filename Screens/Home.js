import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CarList from "./CarList";
import Menu from "./Menu";
import Branches from "./Branches";
import Credit from "./Credit";
import Info from "./Info";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createMaterialBottomTabNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Menu") {
              //   iconName = "bars-sort";
              icon = (
                <Image source={require("../assets/images/image_icon_4.png")} />
              );
              size = focused ? 25 : 20;
              color = focused ? "#CE3327" : "#7C7D7E";
            } else if (route.name === "Credit") {
              //   iconName = "hand-holding-dollar";
              icon = (
                <Image source={require("../assets/images/image_icon_3.png")} />
              );
              size = focused ? 25 : 20;
              color = focused ? "#CE3327" : "#7C7D7E";
            } else if (route.name === "") {
              iconName = "grid-2";
              size = focused ? 25 : 20;
              color = focused ? "#CE3327" : "#3F403F";
            } else if (route.name === "Branches") {
              // iconName = "";
              icon = (
                <Image source={require("../assets/images/image_icon.png")} />
              );
              size = focused ? 25 : 20;
              color = focused ? "#CE3327" : "#7C7D7E";
            } else if (route.name === "Cars List") {
              // iconName = "car-rear";
              icon = (
                <Image source={require("../assets/images/image_icon_2.png")} />
              );
              size = focused ? 25 : 20;
              color = focused ? "#CE3327" : "#7C7D7E";
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          showLabel: true,
          labelStyle: { fontSize: 14 },
          showIcon: true,
        }}
        barStyle={{ backgroundColor: "#694fad" }}
      >
        <Tab.Screen name="Menu" component={Menu} />
        <Tab.Screen name="Credit" component={Credit} />
        <Tab.Screen name="" component={Info} />
        <Tab.Screen name="Branches" component={Branches} />
        <Tab.Screen name="Cars List" component={CarList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Home;
