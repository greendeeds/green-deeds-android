import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { loginAction } from "../actions/AccountActions";
import { firebase } from "../firebase/config";
import { Buttons, Spacing, Typography } from "../Styles/index";
import { Entypo } from '@expo/vector-icons';

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
    <SafeAreaView style={Spacing.backgroundContainer}>
      <View style={Spacing.logoContainer}>
        <View>
          <Text style={Typography.greenDeedsText}>Green Deeds</Text>
          <Text></Text>
        </View>
        
        <View>
          <Text style={Typography.catchPhraseText}>Turn trash into gold!</Text>
          <Text></Text>
        </View>
        
        <View> 
          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <Image source={require("../assets/Leaf-Logo.png")} style={styles.logo}/>
          </TouchableOpacity>    
        </View>
      </View>

      <View style={Spacing.loginContainer}>
        <View style={Spacing.textInputContainer}>
          <TextInput placeholder="Username or email"
          placeholderTextColor="gray"/>  
        </View>  
      
        <View style={Spacing.textInputContainer}>
          <TextInput placeholder="Password" 
            placeholderTextColor="gray"/>
        </View> 
       
        <TouchableOpacity style={Buttons.logInOutButton} onPress={login}>
            <Text style={Typography.logInOutButtonText}>Log In  </Text>
            <Entypo name="login" style={Typography.logInOutEntypo} />
        </TouchableOpacity>
      </View>

      <View style={Spacing.bottomNavContainer}>
        <View style={Spacing.bottomTextContainer}>
          <Text style={Typography.defaultText}>Don't have an account?  </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={Typography.linkText}>Register</Text>
          </TouchableOpacity> 
        </View>
        <View style={Spacing.bottomTextContainer}>
            <Text>What is Green Deeds?  </Text>
            <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <Text style={Typography.linkText}>Learn more here</Text>
            </TouchableOpacity> 
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  logo: {
    width: 300,
    height: 300,

  },



});

export default LoginScreen;
