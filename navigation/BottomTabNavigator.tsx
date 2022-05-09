import * as React from "react";

import { Entypo, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { HomeParamList, TabSettingParamList, UploadParamList } from "../types";

import UploadScreen from "../screens/UploadScreen";
import SettingScreen from "../screens/SettingScreen";
import HomeScreen from "../screens/HomeScreen";
import EventDetailScreen from "../screens/EventDetailScreen";
import UpdateScreen from "../screens/UpdateScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerShown: false,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Upload"
        component={UploadNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircle" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Setting"
        component={TabSettingNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="setting" size={24} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const HomeStack = createStackNavigator<HomeParamList>();

function HomeNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="EventDetailScreen"
        component={EventDetailScreen}
      />
      <HomeStack.Screen name="UpdateEventScreen" component={UpdateScreen} />
    </HomeStack.Navigator>
  );
}

const UploadStack = createStackNavigator<UploadParamList>();

function UploadNavigator() {
  return (
    <UploadStack.Navigator screenOptions={{ headerShown: false }}>
      <UploadStack.Screen name="UploadScreen" component={UploadScreen} />
    </UploadStack.Navigator>
  );
}
const TabSettingStack = createStackNavigator<TabSettingParamList>();

function TabSettingNavigator() {
  return (
    <TabSettingStack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabSettingStack.Screen name="SettingScreen" component={SettingScreen} />
    </TabSettingStack.Navigator>
  );
}
