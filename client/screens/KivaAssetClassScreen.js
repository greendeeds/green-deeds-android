import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/AccountActions";
import { useQuery, gql } from '@apollo/client';
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Alert,
  Image,
  ScrollView,
} from "react-native";

import { withNavigation } from "@react-navigation/native";
import firebase from "firebase";
import { Buttons, Spacing, Typography } from "../Styles";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ActivityBanner from "../components/ActivityBanner";
import InfoBanner from "../components/InfoBanner";
import KivaScreen from "./KivaScreen";

const KivaAssetClassScreen = ({ navigation, route }) => {
  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn);
  const dispatch = useDispatch();

  const logout = () => dispatch(logoutAction());
  const compost = () => navigation.navigate("Compost");
  const recycle = () => navigation.navigate("Recycle");
  const celo = () => navigation.navigate("Celo");
  const about = () => navigation.navigate("About");
  const kiva = () => navigation.navigate("Kiva");
  const home = () => navigation.navigate("Home");
  const kivaInvest = () => navigation.navigate("Invest");
  const category_name = route.params.paramKey;

  var invests_A = {};
  var invests_B = {};
  var invests_C = {};
  var invests_D = {};

  const GET_CATEGORIES = gql`
  {
    lend {
      loans {
        totalCount
        values {
          id
          name
          loanAmount
          image {
            url(presetSize: small)
          }
          activity {
            name
          }
          sector{
            name
          }
          geocode {
            country {
              name
            }
          }
          lenders {
            totalCount
          }
          ... on LoanPartner {
            partnerName
          }
          ... on LoanDirect {
            trusteeName
          }
        }
      }
    }
  }
  `;
  const { loading, error, data } = useQuery(GET_CATEGORIES);
    console.log("Error: ", error)
    //console.log("data: ", data)
    
    if (loading) return <Text>Loading...</Text>;
    if (error) return <Text>Error loading Classes </Text>;

    let investments = data.lend.loans.values;
    //console.log(investments)

    {
      investments.map((investment, id) => {
        if ((investment.sector.name === category_name) && (investment.lenders.totalCount > 10)){
          if (investment.lenders.totalCount > 50)
          {
            invests_A[id] = investment;
          }
          if (investment.lenders.totalCount < 30 && investment.lenders.totalCount > 20)
          {
            invests_B[id] = investment;
          }
          if (investment.lenders.totalCount < 20 && investment.lenders.totalCount > 10)
          {
            invests_C[id] = investment;
          }
          if (investment.lenders.totalCount < 10)
          {
            invests_D[id] = investment;
          }
        }
        return null;
      });
    }

    console.log(invests_A)

  const onLogoutPress = () => {
    firebase.auth().signOut().then(logout);
  };

  return (
    <SafeAreaView style={Spacing.backgroundContainer}>
      <View style={Spacing.bannerContainer}>
        <View style={Spacing.sectionOne}>
          <View style={{ alignSelf: "flex-start" }}>
            <Text style={Typography.headerText}>List of Investments with Class Rating:</Text>
          </View>
          <View>
            <Text>Category Name: {category_name}</Text>
          </View>
          <View>
            <Text>Name: {invests_C[0].name}</Text>
            <Text>Sector: {invests_C[0].sector.name}</Text>
            <Text>Country: {invests_C[0].geocode.country.name}</Text>
            <Text>Lenders: {invests_C[0].lenders.totalCount}</Text>
            <Text>Loan Amount: {invests_C[0].loanAmount}</Text>
            <Text>Trustee Name: {invests_C[0].trusteeName}</Text>
          </View>
        </View>
        <Button title="Invest" onPress={kivaInvest} />
        <Button title="Kiva Home" onPress={kiva} />

        <View style={Spacing.bottomNavContainer}>
          <View style={Spacing.bottomTextContainer}>
            <TouchableOpacity onPress={home}>
              <Text style={Typography.linkText}>Homepage</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default KivaAssetClassScreen;
