import { ProposalStage } from "@celo/contractkit/lib/wrappers/Governance";
import React, { useCallback } from "react";
import { Alert, Text, Button, Linking, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Buttons, Typography } from "../styles";
import { Entypo } from "@expo/vector-icons";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity
      style={Buttons.logInOutButton}
      title={children}
      onPress={handlePress}
    >
      <Text style={Typography.logInOutButtonText}>Get one here! </Text>
      <Entypo name="wallet" style={Typography.logInOutEntypo} />
    </TouchableOpacity>
  );
};

export default OpenURLButton;

//   <Button title={children} onPress={handlePress} />;
