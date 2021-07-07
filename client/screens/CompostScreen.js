import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import ActivityBanner from "../components/ActivityBanner";
import { Entypo } from '@expo/vector-icons';
import { Spacing, Typography } from "../Styles";
import { TouchableOpacity } from "react-native-gesture-handler";


export default class CompostScreen extends React.Component {
  state = {
    composted: 0,
    redeemableAmount: "0.00"  //route.params !== undefined ? route.params.redeemableAmount : "0.00"
  }

  photo = () => this.props.navigation.navigate("Camera")
  celo = () => this.props.navigation.navigate("Celo", { redeemableAmount: this.state.redeemableAmount });
  

  photoPressed = () => {
    this.setState({
      composted: 3,
      redeemableAmount: "3.00"
    })

  }

  render() {
    return (
      <SafeAreaView>
        <View style={Spacing.bannerContainer}>

          <View style={Spacing.topLogo}>
            <Image
              source={require("../assets/check-logo.png")}
              style={styles.logo}
            />
          </View>

          <View style={Spacing.sectionOneScan}>
            <View style={{alignSelf: "flex-start"}}>
              <Text style={Typography.headerText}>Scan Compost Receipt:</Text>
            </View>

            <ActivityBanner 
              title="Click here to scan your receipt"
              square={<Entypo name="camera" style={Typography.roundButtonEntypo}/>}    
              navigate={this.photo}
            />
          </View> 


          <View style={Spacing.sectionTwoScan}>
            <View style={{alignSelf: "flex-start"}}>
              <Text style={Typography.headerText}>Scan Results:</Text>
            </View>

            <View style={Spacing.scanResults}>
              <Text style={Typography.quantityText}>Amount Composted: {this.state.composted}</Text>
              <Text style={Typography.quantityText}>Redeemable Amount: ${this.state.redeemableAmount} </Text>
            </View>
          </View>

          <View style={Spacing.sectionThreeScan}>
            <View style={{alignSelf: "flex-start"}}>
              <Text style={Typography.headerText}>Redeem for Celo:</Text>
            </View>

            <ActivityBanner
              title="My Celo Wallet"
              square={<Image 
                style={Spacing.celoLogo}
                source={require("../assets/celo-logo-colored-rings.png")} />}
                navigate={this.celo}
            />  
          </View>
          
          <View style={Spacing.blankVoid} />

        </View>  
              
      <View style={Spacing.bottomNavContainer}>
        <View style={Spacing.bottomTextContainer}>
          <TouchableOpacity onPress={this.logout}>
            <Text style={Typography.linkText}>Click here to Log Out</Text>
          </TouchableOpacity>
        </View>
        
        <View style={Spacing.bottomTextContainer}>
          <Text>Learn more about Green Deeds </Text>
          <TouchableOpacity onPress={this.about}>
            <Text style={Typography.linkText}>here</Text>
          </TouchableOpacity>
        </View>

      </View>

      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  logo: {
    width: 115,
    height: 115,
  },
});
