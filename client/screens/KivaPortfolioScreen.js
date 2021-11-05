import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/AccountActions";
import {
  SafeAreaView,
  Text,
  View,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { withNavigation } from "@react-navigation/native";
import firebase from "firebase";
import { Buttons, Spacing, Typography } from "../Styles";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ActivityBanner from "../components/ActivityBanner";
import InfoBanner from "../components/InfoBanner";

import PortfolioExample from "../assets/PortfolioExample.jpg";

import {
  NativeBaseProvider,
  Center,
  Container,
  Heading,
  Button,
} from "native-base";

const KivaScreen = ({ navigation, route }) => {
  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn);
  const dispatch = useDispatch();

  const logout = () => dispatch(logoutAction());
  const compost = () =>
    navigation.navigate("Compost", {
      redeemableAmount: "0.00",
      composted: 0,
    });
  const recycle = () =>
    navigation.navigate("Recycle", {
      redeemableAmount: "0.00",
      recycled: 0,
    });
  const celo = () => navigation.navigate("Celo");
  const about = () => navigation.navigate("About");
  const kiva = () => navigation.navigate("Kiva");
  const home = () => navigation.navigate("Home");
  const kivaPortfolio = () => navigation.navigate("Portfolio");
  const kivaInvest = () => navigation.navigate("Invest");

  const onLogoutPress = () => {
    firebase.auth().signOut().then(logout);
  };

  return (
    <NativeBaseProvider>
      <Center style={Spacing.kivaContainer}>
        <Container style={{ marginTop: 0, marginBottom: 55 }}>
          <Heading>
            <Heading color="emerald.500"> Kiva</Heading> Portfolio
          </Heading>
        </Container>

        <View></View>

        <View>
          <Center>
            <Text>$175 Available</Text>
          </Center>
          <Button
            size="sm"
            marginTop="8"
            marginBottom="8"
            px="130"
            backgroundColor="#086ae9"
            onPress={kivaInvest}
          >
            Invest More
          </Button>
        </View>

        <View>
          <Image
            source={PortfolioExample}
            style={{ width: 315, height: 190 }}
          />
        </View>

        <View style={Spacing.bottomNavKiva}>
          <View style={Spacing.bottomTextContainer}>
            <TouchableOpacity onPress={home}>
              <Text style={Typography.linkText}>Homepage</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Center>
    </NativeBaseProvider>
  );
};

export default KivaScreen;
