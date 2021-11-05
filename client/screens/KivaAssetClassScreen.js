import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../actions/AccountActions";
import { useQuery, gql } from "@apollo/client";
import { SafeAreaView, Text } from "react-native";

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
  ScrollView,
} from "native-base";

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
  const KivaClassDetails = () => navigation.navigate("KivaClassDetails");

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
            <Heading paddingTop="6" fontSize="19" paddingBottom="3">
              List of Investments with Class Rating
            </Heading>
            <Text>
              Kiva microloans have been bucketized into asset classes for you to
              invest your change in. That way, that tiny contribution is helping
              make big change across multiple projects.
              {`\n`}
              {`\n`}
              You can also choose from individual microloans hosted on Kiva
            </Text>
            <SubcategoryList KivaClassDetails={KivaClassDetails} />
          </Container>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default KivaAssetClassScreen;
