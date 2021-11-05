import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutAction } from '../actions/AccountActions'
import { useQuery, gql } from '@apollo/client'
import {
  SafeAreaView,
  Text,
  View,
  Button,
  Alert,
  Image,
  ScrollView,
} from 'react-native'

import { withNavigation } from '@react-navigation/native'
import firebase from 'firebase'
import { Buttons, Spacing, Typography } from '../Styles'
import { Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ActivityBanner from '../components/ActivityBanner'
import InfoBanner from '../components/InfoBanner'
import KivaScreen from './KivaScreen'
import SubcategoryList from './KivaSubcategoryList'

import { NativeBaseProvider, Center, Container, Heading } from 'native-base'

const KivaClassDetails = ({ navigation, route }) => {
  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn)
  const dispatch = useDispatch()

  const logout = () => dispatch(logoutAction())
  const compost = () => navigation.navigate('Compost')
  const recycle = () => navigation.navigate('Recycle')
  const celo = () => navigation.navigate('Celo')
  const about = () => navigation.navigate('About')
  const kiva = () => navigation.navigate('Kiva')
  const home = () => navigation.navigate('Home')
  const kivaInvest = () => navigation.navigate('Invest')

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
  `
  const { loading, error, data } = useQuery(GET_CATEGORIES)

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error loading Categories </Text>

  let categories = [
    data.lend.loans.values.map((item) => item.lenders.totalCount),
  ]

  const onLogoutPress = () => {
    firebase.auth().signOut().then(logout)
  }

  return (
    <NativeBaseProvider>
      <Center style={Spacing.kivaContainer}>
        <Container>
          <Center>
            <Heading fontSize="18" paddingBottom="3">
              Your Selection
            </Heading>
            <Heading fontSize="19" paddingBottom="3">
              CLASS A - Agriculture
            </Heading>
            <Text>
              You will be helping fund new farmland in these parts of the world
            </Text>
          </Center>
        </Container>
      </Center>
    </NativeBaseProvider>
  )
}

export default KivaClassDetails
