import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/AccountActions";
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Alert,
  Image,
  ScrollView,
} from "react-native";

import { withNavigation } from "@react-navigation/native";
import firebase from "firebase";
import { Buttons, Spacing, Typography } from "../styles";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ActivityBanner from "../components/ActivityBanner";
import InfoBanner from "../components/InfoBanner";
import KivaScreen from "./KivaScreen";

const KivaPortfolioScreen = ({ navigation, route }) => {
  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn);
  const dispatch = useDispatch();

  const logout = () => dispatch(logoutAction());
  const compost = () => navigation.navigate("Compost");
  const recycle = () => navigation.navigate("Recycle");
  const celo = () => navigation.navigate("Celo");
  const about = () => navigation.navigate("About");
  const kiva = () => navigation.navigate("Kiva");
  const home = () => navigation.navigate("Home");
  const kivaInvest = () => navigation.navigate("Invest");

  const onLogoutPress = () => {
    firebase.auth().signOut().then(logout);
  };

  return (
    <SafeAreaView style={Spacing.backgroundContainer}>
      <View style={Spacing.bannerContainer}>
        <View style={Spacing.sectionOne}>
          <View style={{ alignSelf: "flex-start" }}>
            <Text style={Typography.headerText}>Categories to invest in:</Text>
          </View>
          <View>
            <Text>Categories go here.</Text>
          </View>
        </View>
        <Button title="Invest" onPress={kivaInvest} />
        <Button title="Kiva Home" onPress={kiva} />

        <View style={Spacing.bottomNavContainer}>
          <View style={Spacing.bottomTextContainer}>
            <TouchableOpacity onPress={home}>
              <Text style={Typography.linkText}>Homepage</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KivaPortfolioScreen;
