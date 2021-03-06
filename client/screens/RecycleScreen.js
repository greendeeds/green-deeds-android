import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { useDispatch } from "react-redux";
import ActivityBanner from "../components/ActivityBanner";
import ScanBanner from "../components/ScanBanner";
import { Entypo } from "@expo/vector-icons";
import { Spacing, Typography } from "../styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { logoutAction } from "../actions/AccountActions";

export default function RecycleScreen({ navigation, route }) {
  const dispatch = useDispatch();
  const [recycled, setRecycled] = useState(0);
  const [redeemableAmount, setRedeemableAmount] = useState("0.00");
  const [confirmed, setConfirmed] = useState(false);

  const photo = () =>
    navigation.navigate("Camera", {
      parentComponent: "RecycleScreen",
    });
  const celo = () =>
    navigation.navigate("Celo", {
      redeemableAmount: redeemableAmount,
    });
  const about = () => navigation.navigate("About");
  const logout = () => dispatch(logoutAction());

  useEffect(() => {
    setRecycled(route.params.recycled);
    setRedeemableAmount(route.params.redeemableAmount);
  }, [route.params]);

  return (
    <SafeAreaView>
      <View style={Spacing.bannerContainer}>
        <View style={Spacing.topLogo}>
          <Image
            source={require("../assets/check-logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={Spacing.sectionOneScan}>
          <View style={{ alignSelf: "flex-start" }}>
            <Text style={Typography.headerText}>Scan Recycle Receipt:</Text>
          </View>
          <ScanBanner
            square={<Entypo name="camera" style={Typography.cameraEntypo} />}
            navigate={photo}
          />
        </View>

        <View style={Spacing.sectionTwoScan}>
          <View style={{ alignSelf: "flex-start" }}>
            <Text style={Typography.headerText}>Results of Scan:</Text>
          </View>

          <View style={Spacing.scanResults}>
            <Text style={Typography.quantityText}>
              Bottles Recycled: {recycled}
            </Text>
            <Text style={Typography.quantityText}>
              Redeemable Amount: ${redeemableAmount}{" "}
            </Text>
          </View>
        </View>

        <View style={Spacing.sectionThreeScan}>
          <View style={{ alignSelf: "flex-start" }}>
            <Text style={Typography.headerText}>Redeem for Celo:</Text>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 115,
    height: 115,
  },
});
