import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { loginAction } from "../actions/AccountActions";
import { firebase } from "../firebase/config";

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

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn);
  const dispatch = useDispatch();
  const login = () => dispatch(loginAction());
  const register = () => navigation.navigate("Register");

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
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/Logo.png")} style={styles.logo} />
        <Text style={styles.logoText}>Turn trash into gold!</Text>
      </View>

      <View style={styles.loginContainer}>
        <ScrollView>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />

          <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>
              Don't have an account?{" "}
              <Text onPress={register} style={styles.registerLink}>
                Register
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#27ce7f",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
  },
  logoText: {
    color: "#e4a914",
    fontSize: 36,
  },
  logoContainer: {
    position: "absolute",
    top: 5,
    alignItems: "center",
  },
  input: {
    width: 350,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
  },
  loginButton: {
    height: 40,
    backgroundColor: "#0052ff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 18,
  },
  loginContainer: {
    position: "absolute",
    top: 350,
    height: 200,
    justifyContent: "space-around",
  },
  registerText: {
    fontSize: 16,
    top: 10,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    height: 40,
  },
  registerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default LoginScreen;
