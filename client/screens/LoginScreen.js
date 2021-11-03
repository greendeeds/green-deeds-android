import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { loginAction } from "../actions/AccountActions";
import { firebase } from "../firebase/config";
import { Buttons, Spacing, Typography } from "../Styles";
import { Entypo } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
  Platform,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import logo from "../assets/check-logo.png";
const logoUri = Image.resolveAssetSource(logo).uri;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn);
  const dispatch = useDispatch();
  const login = () => dispatch(loginAction());
  const register = () => navigation.navigate("Register");
  const about = () => navigation.navigate("About");

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection("users");
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert("User does not exist anymore.");
              return;
            }
            const user = firestoreDocument.data();
            login();
          })
          .catch((error) => {
            console.log("err: ", error);
            alert(error);
          });
      })
      .catch((error) => {
        console.log("ERROR:: ", email, password, err);
        alert(error);
      });
  };

  return (
    <SafeAreaView style={Spacing.backgroundContainer}>
      <View style={Spacing.logoContainer}>
        <View>
          <Text style={Typography.greenDeedsText}>Green Deeds</Text>
        </View>

        <View>
          <Text style={Typography.catchPhraseText}>Turn trash into gold!</Text>
        </View>

        <View style={{ paddingTop: "4%" }}>
          <TouchableOpacity>
            <Image source={{ uri: logoUri }} style={styles.logo} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={Spacing.loginContainer}>
        <View style={Spacing.textInputContainer}>
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="gray"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>

        <View style={Spacing.textInputContainer}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
        </View>

        <TouchableOpacity style={Buttons.logInOutButton} onPress={login}>
          <Text style={Typography.logInOutButtonText}>Log In </Text>
          <Entypo name="login" style={Typography.logInOutEntypo} />
        </TouchableOpacity>
      </View>

      <View style={Spacing.bottomNavContainer}>
        <View style={Spacing.bottomTextContainer}>
          <Text style={Typography.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={register}>
            <Text style={Typography.linkText}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={Spacing.bottomTextContainer}>
          <Text style={Typography.footerText}>What is Green Deeds? </Text>
          <TouchableOpacity onPress={about}>
            <Text style={Typography.linkText}>Learn more here</Text>
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

export default LoginScreen;
