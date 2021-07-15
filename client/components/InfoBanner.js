import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Image,
  StyleSheet,
} from "react-native";
import { withNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "../Styles";

const InfoBanner = (props) => {
  return (
    <TouchableOpacity style={styles.bannerContainer}>
      <View style={styles.contentRectangle}>
        <View style={styles.alignText}>
          <Text style={styles.styleText}>{props.title}</Text>
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
    backgroundColor: Colors.WHITE,
    elevation: 4,
  },

  alignText: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 15,
  },

  styleText: {
    color: Colors.BLACK,
    fontSize: 15,
    fontFamily: "sans-serif",
    textAlign: "left",
  },
});

export default InfoBanner;
