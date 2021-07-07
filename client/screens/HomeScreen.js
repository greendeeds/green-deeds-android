import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/AccountActions";
import { SafeAreaView, Text, View, Image, ScrollView } from "react-native";

import { withNavigation } from "@react-navigation/native";
import firebase from "firebase";
import { Buttons, Spacing, Typography } from "../Styles";
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import ActivityBanner from "../components/ActivityBanner";
import InfoBanner from "../components/InfoBanner";


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
    <SafeAreaView  style={Spacing.backgroundContainer}>

      <View style={Spacing.bannerContainer}>
        <View style={Spacing.sectionOne}>
          <View style={{alignSelf: "flex-start"}}>
            <Text style={Typography.headerText}>Do a Green Deed:</Text>
          </View>
          
          <ActivityBanner 
            title="Recycle"
            square={<Entypo name="leaf" style={Typography.roundButtonEntypo}/>} 
            navigate={recycle}     
            />

          <ActivityBanner 
            title="Compost"
            square={<Entypo name="flower" style={Typography.roundButtonEntypo}/>}
            navigate={compost}
            />

          <ActivityBanner
            title="More Green Deeds coming soon!"
            square={<Entypo name="tree" style={Typography.roundButtonEntypo}/>}
          />

        </View>



        <View style={Spacing.sectionTwo}>
          <View style={{alignSelf: "flex-start"}}>
            <Text style={Typography.headerText}>Learn the Facts; 
            Make a Difference:</Text>
          </View>
          <ScrollView horizontal={true}>
            <InfoBanner
              title="In the US, 21.5 Million tons of food is wasted each and every year."  
            />

            <InfoBanner 
              title="Even though it does not have the largest population, the US produces the most municipal solid waste (aka garbage) in the world: 258 Million Tons." 
            />

            <InfoBanner
              title="The EPA estimates that 75% of the American waste stream is recyclable, but we only recycle about 30% of it."
                
            />

      
          </ScrollView>
         
        </View>



        <View style={Spacing.sectionThree}>
          <View style={{alignSelf: "flex-start"}}>
            <Text style={Typography.headerText}>Earn Celo:</Text>
          </View>

          <ActivityBanner
            title="My Celo Wallet"
            square={<Image 
              style={Spacing.celoLogo}
              source={require("../assets/celo-logo-colored-rings.png")} />}
            navigate={celo}
          />  
        </View>
      </View>

      <View style={Spacing.bottomNavContainer}>
        <View style={Spacing.bottomTextContainer}>
          <TouchableOpacity onPress={logout}>
            <Text style={Typography.linkText}>Click here to Log Out</Text>
          </TouchableOpacity>
        </View>
        
        <View style={Spacing.bottomTextContainer}>
          <Text>Learn more about Green Deeds </Text>
          <TouchableOpacity onPress={about}>
            <Text style={Typography.linkText}>here</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
