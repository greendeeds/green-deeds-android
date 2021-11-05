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

import { NativeBaseProvider, Center, Container } from "native-base";

import { withNavigation } from "@react-navigation/native";
import firebase from "firebase";
import { Buttons, Spacing, Typography } from "../Styles";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ActivityBanner from "../components/ActivityBanner";
import InfoBanner from "../components/InfoBanner";

const HomeScreen = ({ navigation, route }) => {
  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn);
  const dispatch = useDispatch();
  const [exchanged, setExchanged] = useState(false);

  useEffect(() => {
    if (route && route.params && route.params.exchanged)
      setExchanged(route.params.exchanged);

    if (exchanged === true) {
      Alert.alert(
        "Congratulations!",
        "You just earned carbon credits for your business and helped Green Deeds in the process!  Good job, Deeder!"
      );
      // setExchanged(false);
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

  const onLogoutPress = () => {
    firebase.auth().signOut().then(logout);
  };

  return (
    <NativeBaseProvider style={Spacing.backgroundContainer}>
      <ScrollView>
        <View style={Spacing.bannerContainer}>
          <View style={Spacing.sectionOne}>
            <View style={{ alignSelf: "flex-start" }}>
              <Text style={Typography.headerText}>Do a Green Deed:</Text>
            </View>

            <ActivityBanner
              title="Recycle"
              square={
                <Entypo name="leaf" style={Typography.roundButtonEntypo} />
              }
              navigate={recycle}
            />

            <ActivityBanner
              title="Compost"
              square={
                <Entypo name="flower" style={Typography.roundButtonEntypo} />
              }
              navigate={compost}
            />

            <ActivityBanner
              title="More Green Deeds coming soon!"
              square={
                <Image
                  style={Spacing.greenDeedLogo}
                  source={require("../assets/check-logo.png")}
                />
              }
              navigate={about}
            />
          </View>

          <View style={Spacing.sectionTwo}>
            <View style={{ alignSelf: "flex-start" }}>
              <Text style={Typography.headerText}>
                Learn the Facts; Make a Difference:
              </Text>
            </View>

            <ScrollView horizontal={true}>
              <InfoBanner title="In the US, 21.5 Million tons of food is wasted each and every year. Compost with Green Deeds and turn your trash into gold!" />
              <InfoBanner title="Even though it does not have the largest population, the US produces the most municipal solid waste (aka garbage) in the world: 258 Million Tons." />
              <InfoBanner title="The EPA estimates that 75% of the US waste stream is recyclable, but only 30% of that is recycled. Recycle with Green Deeds and turn your trash into gold!" />
            </ScrollView>
          </View>

          <View style={Spacing.sectionThree}>
            <View style={{ alignSelf: "flex-start" }}>
              <Text style={Typography.headerText}>Earn Celo:</Text>
            </View>

            <ActivityBanner
              title="My Celo Wallet"
              square={
                <Image
                  style={Spacing.celoLogo}
                  source={require("../assets/celo-logo-colored-rings.png")}
                />
              }
              navigate={celo}
            />
          </View>

          <View style={Spacing.sectionThreeScan}>
            <View style={{ alignSelf: "flex-start" }}>
              <Text style={Typography.headerText}>Lend with Kiva:</Text>
            </View>

            <ActivityBanner
              title="Kiva"
              square={
                <Image
                  style={Spacing.kivaLogo}
                  source={require("../assets/KivaLogo.jpg")}
                />
              }
              navigate={kiva}
            />
          </View>
        </View>

        <View style={Spacing.bottomNavContainer}>
          <View style={Spacing.bottomTextContainer}>
            <TouchableOpacity onPress={logout}>
              <Text style={Typography.linkText}>Click here to Log Out</Text>
            </TouchableOpacity>
          </View>

          <View style={Spacing.bottomTextContainer}>
            <Text style={Typography.footerText}>
              Learn more about Green Deeds{" "}
            </Text>
            <TouchableOpacity onPress={about}>
              <Text style={Typography.linkText}>here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default HomeScreen;
