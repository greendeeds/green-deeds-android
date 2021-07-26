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
import { Buttons, Spacing, Typography, Colors } from "../styles";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationEvents } from "react-navigation";

const ActivityBanner = (props) => {
  return (
    <TouchableOpacity style={styles.bannerContainer} onPress={props.navigate}>
      <View style={styles.contentSquare}>
        <View style={styles.alignIcons}>{props.square}</View>
      </View>

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
    width: 300,
    height: 75,
    justifyContent: "center",
    borderBottomRightRadius: 2.5,
    borderTopRightRadius: 2.5,
    marginVertical: 2,
    backgroundColor: Colors.PRIMARYlite,
    elevation: 4,
  },

  contentSquare: {
    width: 75,
    height: 75,
    justifyContent: "center",
    borderBottomLeftRadius: 2.5,
    borderTopLeftRadius: 2.5,
    marginVertical: 2,
    backgroundColor: Colors.SECONDARYlite,
    elevation: 4,
  },

  alignIcons: {
    alignItems: "center",
  },

  alignText: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingLeft: 10,
  },

  styleText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontFamily: "sans-serif-medium",
    textAlign: "left",
  },
});

export default ActivityBanner;
