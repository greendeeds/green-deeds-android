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
import { Buttons, Spacing, Typography } from "../Styles";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ActivityBanner from "../components/ActivityBanner";
import InfoBanner from "../components/InfoBanner";

const KivaScreen = ({ navigation, route }) => {
  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn);
  const dispatch = useDispatch();
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

  useEffect(() => {
    // if (route && route.params && route.params.disclaimerAccepted)
    //   setDisclaimerAccepted(route.params.disclaimerAccepted);

    if (disclaimerAccepted === false) {
      Alert.alert("Disclaimer", "*** DISCLAIMER GOES HERE", [
        {
          text: "Cancel",
          onPress: about,
          style: "cancel",
        },
        {
          text: "Accept",
        },
      ]);
      setDisclaimerAccepted(true);
    }
  }, [route]);

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
    <SafeAreaView style={Spacing.backgroundContainer}>
      <View style={Spacing.bannerContainer}>
        <View style={Spacing.sectionOne}>
          <View style={{ alignSelf: "flex-start" }}>
            <Text style={Typography.headerText}>Invest on Kiva:</Text>
          </View>
          <View>
            <Text>
              The 1.7 billion adults worldwide who are financially excluded may
              have years of exceptional credit history outside traditional
              financial institutions. Because this history is disconnected from
              the bank down the street, large populations overpay for credit and
              are denied access to the formal financial sector, keeping them
              vulnerable to financial shocks. Kiva is a social impact
              organization with a mission to expand financial access to help
              underserved individuals and communities thrive. In partnership
              with local lending institutions over the past 15 years, we've
              crowdfunded microloans to over 3.5 million borrowers in more than
              90 countries around the world
            </Text>
          </View>

          <Button title="Invest" onPress={kivaInvest} />
          <Button title="Portfolio" onPress={kivaPortfolio} />
        </View>
      </View>

      <View style={Spacing.bottomNavContainer}>
        <View style={Spacing.bottomTextContainer}>
          <TouchableOpacity onPress={home}>
            <Text style={Typography.linkText}>Homepage</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KivaScreen;
