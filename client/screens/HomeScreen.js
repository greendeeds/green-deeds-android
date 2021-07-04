import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/AccountActions";
import { SafeAreaView, Text, View, Button } from "react-native";

import { withNavigation } from "@react-navigation/native";
import firebase from "firebase";

const HomeScreen = ({ navigation }) => {
  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn);
  const dispatch = useDispatch();

  const logout = () => dispatch(logoutAction());
  const compost = () =>
    navigation.navigate("Compost", {
      redeemableAmount: "0.00",
      composted: 0,
    });
  const recycle = () => navigation.navigate("Recycle");
  const celo = () => navigation.navigate("Celo");

  const onLogoutPress = () => {
    firebase.auth().signOut().then(logout);
  };

  return (
    <SafeAreaView>
      <View>
        <Button title="Compost" onPress={compost} />
        <Button title="Recycle" onPress={recycle} />
        <Text></Text>
        <Button title="Celo" onPress={celo} />
        <Text></Text>
        <Button title="Logout" onPress={onLogoutPress} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
