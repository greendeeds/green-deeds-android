import "react-native-gesture-handler";
import React from "react";

//Redux
import { useSelector } from "react-redux";
import AccountReducer from "./reducers/AccountReducer";

//Navigation
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import RecycleScreen from "./screens/RecycleScreen";
import CompostScreen from "./screens/CompostScreen";
import CameraScreen from "./screens/CameraScreen";
import CeloScreen from "./screens/CeloScreen";

import { StackRouter } from "react-navigation";
import { NavigationContainer } from "@react-navigation/native";

import { StyleSheet, Image } from "react-native";

import { Colors } from "./Styles/index";

const Stack = createStackNavigator();

const Navigator = () => {
  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <>
            <Stack.Screen
              options={{
                animationTypeForReplace: "push",
              }}
              name="Home"
              component={HomeScreen}
              options={{ exchanged: false }}
            />
            <Stack.Screen name="Recycle" component={RecycleScreen} />
            <Stack.Screen name="Compost" component={CompostScreen} />
            <Stack.Screen name="Camera" component={CameraScreen} />
            <Stack.Screen name="Celo" component={CeloScreen} />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: "Log In",
                animationTypeForReplace: "pop",
                headerStyle: { backgroundColor: Colors.PRIMARY }, //"#50ED0D" "#0FA429"
              }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
