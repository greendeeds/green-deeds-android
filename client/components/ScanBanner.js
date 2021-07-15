import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
  StyleSheet,
} from "react-native";
import { withNavigation } from "@react-navigation/native";
import { Buttons, Spacing, Typography } from "../Styles";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../Styles";
import { NavigationEvents } from "react-navigation";

const ScanBanner = (props) => {
  return (
    <TouchableOpacity style={styles.bannerContainer} onPress={props.navigate}>
      <View style={styles.contentRectangle}>
        <View style={styles.alignText}>
          <Text style={styles.styleText}>{props.title}</Text>
          <View style={styles.alignIcons}>{props.square}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    borderWidth: 5.6,
    borderColor: Colors.WHITE,
    borderRadius: 2.5,
  },

  contentRectangle: {
    width: 375,
    height: 75,
    justifyContent: "center",
    borderRadius: 2.5,
    marginVertical: 2,
    backgroundColor: Colors.SECONDARYlite,
    elevation: 4,
  },

  alignIcons: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: "6%",
  },

  alignText: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },

  styleText: {
    color: Colors.BLACK,
    fontSize: 18,
    fontFamily: "sans-serif-medium",
    textAlign: "center",
  },
});

export default ScanBanner;
