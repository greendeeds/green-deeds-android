import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/AccountActions";
import { useQuery, gql } from "@apollo/client";
import { SafeAreaView, Text, View, Alert, Image } from "react-native";

import { withNavigation } from "@react-navigation/native";
import firebase from "firebase";
import { Buttons, Spacing, Typography } from "../Styles";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ActivityBanner from "../components/ActivityBanner";
import InfoBanner from "../components/InfoBanner";
import KivaScreen from "./KivaScreen";
import SubcategoryList from "./KivaSubcategoryList";

import {
  NativeBaseProvider,
  Center,
  Container,
  Heading,
  Button,
  ScrollView,
} from "native-base";

const KivaClassDetails = ({ navigation, route }) => {
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
  const InvesmentConfirmation = () =>
    navigation.navigate("InvesmentConfirmation");

  const GET_CATEGORIES = gql`
    {
      lend {
        loans(filters: { gender: female, country: ["KE", "US"] }, limit: 5) {
          totalCount
          values {
            name
            loanAmount
            image {
              url(presetSize: small)
            }
            activity {
              name
            }
            geocode {
              country {
                isoCode
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

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading Categories </Text>;

  let categories = [
    data.lend.loans.values.map((item) => item.lenders.totalCount),
  ];

  const onLogoutPress = () => {
    firebase.auth().signOut().then(logout);
  };

  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center style={Spacing.kivaContainer}>
          <Container>
            <Center>
              <Heading fontSize="18" paddingBottom="3" paddingTop="5">
                Your Selection
              </Heading>
              <Heading fontSize="19" paddingBottom="3">
                CLASS A - FARMING
              </Heading>
              <Text style={Typography.kivaheaderText}>
                You will be helping fund new farmland in these parts of the
                world
              </Text>
              <Image
                source={require("../assets/map.png")}
                style={Spacing.imgKiva}
              />

              <Text
                style={{ paddingTop: "10%", paddingBottom: "7%", fontSize: 18 }}
              >
                This will help create...
              </Text>

              <View style={Spacing.containerKiva}>
                <View style={Spacing.itemKiva}>
                  <Image
                    source={require("../assets/logo1.png")}
                    style={Spacing.iconsKiva}
                  />
                  <Text>40 acres of farmland </Text>
                </View>

                <View style={Spacing.itemKiva}>
                  <Image
                    source={require("../assets/logo2.png")}
                    style={Spacing.iconsKiva}
                  />
                  <Text style={{ textAlign: "center" }}>100 farming jobs</Text>
                </View>
              </View>

              <Button
                size="lg"
                marginTop="0"
                marginBottom="4"
                px="60"
                backgroundColor="#0FA429"
                onPress={InvesmentConfirmation}
              >
                Invest
              </Button>
            </Center>
          </Container>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default KivaClassDetails;
