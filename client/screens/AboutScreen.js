import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Buttons, Spacing, Typography } from "../Styles";
import { Entypo } from "@expo/vector-icons";

const AboutScreen = ({ navigation }) => {
  const register = () => navigation.navigate("Register");

  return (
    <SafeAreaView style={Spacing.backgroundContainer}>
      <View style={Spacing.topTextContainer}>
        <Text style={Typography.topText}>Do a Green Deed.</Text>
        <Text style={Typography.topText}>Get Celo.</Text>
        <Text style={Typography.topText}>Make a Difference.</Text>
        <Text></Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={Typography.generalText}>Learn more at </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://www.greendeeds.co/")}
          >
            <Text style={Typography.blackLinkText}>
              https://www.greendeeds.co/
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Spacing.midContainer}>
        <Image
          source={require("../assets/check-logo.png")}
          style={styles.logo}
        />
      </View>

      <View style={Spacing.bottomNavContainer}>
        <View style={Spacing.bottomTextContainer}>
          <Text style={Typography.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={register}>
            <Text style={Typography.linkText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 250,
    height: 250,
  },
});

export default AboutScreen;
