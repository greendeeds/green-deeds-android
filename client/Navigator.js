import "react-native-gesture-handler";
import React from "react";

//Redux
import { useSelector } from "react-redux";
import AccountReducer from "./reducers/AccountReducer";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";
import AboutScreen from "./screens/AboutScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import RecycleScreen from "./screens/RecycleScreen";
import CompostScreen from "./screens/CompostScreen";
import CameraScreen from "./screens/CameraScreen";
import CeloScreen from "./screens/CeloScreen";

import { StackRouter } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Image, ColorPropType, Button, Alert } from "react-native";

import { Buttons, Colors } from "./Styles/index";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const Navigator = () => {
  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn);
  const logout = () => dispatch(logoutAction());

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <>
            <Stack.Screen
              options={{
                animationTypeForReplace: "push",
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,                
              }}
              name="Home"
              component={HomeScreen}
             
            />
            <Stack.Screen name="Camera" component={CameraScreen}
              options={{ headerStyle: {backgroundColor: Colors.PRIMARY}, 
                headerTintColor: Colors.WHITE,
              }}
              />

            <Stack.Screen name="Celo" component={CeloScreen} 
              options={{ headerStyle: {backgroundColor: Colors.PRIMARY}, 
                headerTintColor: Colors.WHITE,
                title: "Celo Log In",
              }} 
              />

            <Stack.Screen name="Compost" component={CompostScreen} 
              options={{ headerStyle: {backgroundColor: Colors.PRIMARY},
                headerTintColor: Colors.WHITE,
               }} 
              />

            <Stack.Screen name="Recycle" component={RecycleScreen} 
              options={{ headerStyle: {backgroundColor: Colors.PRIMARY},
              headerTintColor: Colors.WHITE,
              }} 
              />

            <Stack.Screen name="About" component={AboutScreen} 
              options={{ headerStyle: {backgroundColor: Colors.PRIMARY}, 
              headerTintColor: Colors.WHITE,
              }} 
              />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: "Log In",
                animationTypeForReplace: "pop",
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
              }}
            />
            <Stack.Screen name="Register" component={RegisterScreen}
              options={{ headerStyle: {backgroundColor: Colors.PRIMARY},
                headerTintColor: Colors.WHITE,
               }} 
              />

            <Stack.Screen name="About" component={AboutScreen} 
              options={{ headerStyle: {backgroundColor: Colors.PRIMARY},
                headerTintColor: Colors.WHITE,
              }} 
              />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
