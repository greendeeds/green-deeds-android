import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/AccountActions";
import { SafeAreaView, Text, View, Button, Alert } from "react-native";

import { withNavigation } from "@react-navigation/native";
import firebase from "firebase";

const HomeScreen = ({ navigation, route }) => {
  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn);
  const dispatch = useDispatch();
  const [exchanged, setExchanged] = useState(false);
  console.log(exchanged);

  useEffect(() => {
    if (route && route.params && route.params.exchanged)
      setExchanged(route.params.exchanged);

    if (exchanged === true) {
      Alert.alert(
        "Congratulations!",
        "You just earned carbon credits for your business and helped Green Deeds in the process!  Good job, Deeder!"
      );
      setExchanged(false);
    }
  }, [route]);

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
