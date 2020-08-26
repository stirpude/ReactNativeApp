
import React from "react";

import Screen from "./app/components/Screen";
import MyInputImage from "./app/components/MyInputImage";
import * as ImagePicker from "expo-image-picker";
import {useEffect, useState} from "react";
import * as Permissions from "expo-permissions";
import {Button, Image } from "react-native";
import ImageInputList from "./app/components/ImageInputList";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import {Text } from "react-native" ;

import {createStackNavigator}  from "@react-navigation/stack";
import {NavigationContainer,useNavigation} from "@react-navigation/native";
import {creatBottomTabNavigator} from "@react-navigation/bottom-tabs";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";













export default function App() {

  
  

  return (
    
      <NavigationContainer theme = {navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
  );

    
    
}
