import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/AccountActions";
import { SafeAreaView, Text, View, Button, Image } from "react-native";

import { withNavigation } from "@react-navigation/native";
import firebase from "firebase";
import { Buttons, Spacing, Typography } from "../Styles";
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn);
  const dispatch = useDispatch();

  const logout = () => dispatch(logoutAction());
  const compost = () => navigation.navigate("Compost");
  const recycle = () => navigation.navigate("Recycle");
  const celo = () => navigation.navigate("Celo");
  const about = () => navigation.navigate("About")

  const onLogoutPress = () => {
    firebase.auth().signOut().then(logout);
  };

  return (
    <SafeAreaView style={Spacing.backgroundContainer}>
      <View style={Spacing.topContainer}>
        <View style={Spacing.childToptext}>
          <Text style={Typography.headerText}>Do a Green Deed:</Text>
        </View>

        <View style={Spacing.childTopbuttons}>
          <TouchableOpacity style={Buttons.standardRoundButton} onPress={compost} >
            <Text style={Typography.roundButtonText}>Compost</Text>
            <Entypo name="flower" style={Typography.roundButtonEntypo}/> 
          </TouchableOpacity> 

          <TouchableOpacity style={Buttons.standardRoundButton} onPress={recycle} >
            <Text style={Typography.roundButtonText}>Recycle</Text>
            <Entypo name="leaf" style={Typography.roundButtonEntypo}/>   
          </TouchableOpacity>
        </View>
      </View>
      
      <View style={Spacing.childCelo}>
        <Text style={Typography.headerText}>Get Celo:</Text>
      </View>

      <View style={Spacing.childCeloButton}>
        <TouchableOpacity onPress={celo} >
          <Image
            source={require("../assets/celo-logo-colored-rings.png")}
            style={Buttons.celoRingsLogo}
          />
        </TouchableOpacity>
      </View>  

      <View style={Spacing.childDifference}>
        <Text style={Typography.headerText}>Make a Difference:</Text>
      </View>

      <View style={Spacing.childDifferenceButton}>
        <TouchableOpacity >  
            <Image
              source={require("../assets/Leaf-Logo.png")}
              style={Buttons.celoRingsLogo}
            />
        </TouchableOpacity>
      </View> 

      <View style={Spacing.childLogout}>
        <TouchableOpacity style={Buttons.logInOutButton} onPress={logout} >
          <Text style={Typography.logInOutButtonText}>Log Out </Text>
          <Entypo name="log-out" style={Typography.logInOutEntypo} />
        </TouchableOpacity> 
      </View>

     
    </SafeAreaView>
  );
};

export default HomeScreen;
