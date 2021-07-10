import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { loginAction } from "../actions/AccountActions";
import { firebase } from "../firebase/config";

import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { Buttons, Spacing, Typography } from "../Styles";

// import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const RegisterScreen = ({ navigation }) => {
  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn);
  const dispatch = useDispatch();
  const login = () => dispatch(loginAction());

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onFooterLinkPress = () => {
    navigation.navigate("Login");
  };

  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          fullName,
        };
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            login();
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView style={Spacing.backgroundContainer}>
      <View style={Spacing.headingContainer}>
        <Text style={Typography.greenDeedsText}>Green Deeds</Text>
      </View>

      <View style={Spacing.regLogoContainer}>
        <Image
            source={require("../assets/check-logo.png")}
            style={styles.logo}
          />
      </View>
      
      <View style={Spacing.registerContainer}>
        <Text style={Typography.registerHeaderText}>Enter your information, below, then click "Create Account" to complete registration!</Text>
        <TextInput
          style={Spacing.textInputContainer}
          placeholder="Full Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={Spacing.textInputContainer}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={Spacing.textInputContainer}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <TextInput
          style={Spacing.textInputContainer}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={Buttons.logInOutButton}
          onPress={() => onRegisterPress()}
        >
          <Text style={Typography.logInOutButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>


      <View style={Spacing.bottomNavContainer}>
        <View style={Spacing.bottomTextContainer}>
          <Text style={Typography.footerText}>
            Already have an account?{" "}
            <Text onPress={onFooterLinkPress} style={Typography.linkText}>
              Log in
            </Text>
          </Text>
        </View>
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width:200,
    height: 200,
  },
 
});

export default RegisterScreen;
