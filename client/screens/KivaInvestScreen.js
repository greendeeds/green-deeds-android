import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutAction } from '../actions/AccountActions'
import { useQuery, gql } from '@apollo/client'
import { SafeAreaView, Text, View, Alert, Image } from 'react-native'

import { withNavigation } from '@react-navigation/native'
import firebase from 'firebase'
import { Buttons, Spacing, Typography } from '../Styles'
import { Entypo } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ActivityBanner from '../components/ActivityBanner'
import InfoBanner from '../components/InfoBanner'
import {
  NativeBaseProvider,
  Center,
  Container,
  Heading,
  ScrollView,
} from 'native-base'

const KivaInvestScreen = ({ navigation, route }) => {
  const images = [
    'https://images.unsplash.com/photo-1561099131-1dc11da6dfa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80',

    'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    'https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',

    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1122&q=80',

    'https://images.unsplash.com/photo-1560951016-1242fd973c7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',

    'https://images.unsplash.com/photo-1621782785524-f674b0de624e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80',

    'https://images.unsplash.com/photo-1470298609667-dcd85581b096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  ]
  const img1 =
    'https://images.unsplash.com/photo-1470298609667-dcd85581b096?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'

  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn)
  const dispatch = useDispatch()

  const logout = () => dispatch(logoutAction())
  const compost = () =>
    navigation.navigate('Compost', {
      redeemableAmount: '0.00',
      composted: 0,
    })
  const recycle = () =>
    navigation.navigate('Recycle', {
      redeemableAmount: '0.00',
      recycled: 0,
    })
  const celo = () => navigation.navigate('Celo')
  const about = () => navigation.navigate('About')
  const kiva = () => navigation.navigate('Kiva')
  const home = () => navigation.navigate('Home')
  const kivaScreen = () => navigation.navigate('Kiva')
  const kivaPortfolio = () => navigation.navigate('Portfolio')
  const kivaAssetClass = () => navigation.navigate('AssetClass')

  const GET_CATEGORIES = gql`
    {
      lend {
        loans {
          totalCount
          values {
            activity {
              name
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
    ...new Set(data.lend.loans.values.map((item) => item.activity.name)),
  ]

  const onLogoutPress = () => {
    firebase.auth().signOut().then(logout)
  }

  return (
    <NativeBaseProvider>
      <Center style={Spacing.kivaContainer}>
        <Heading
          color="emerald.500"
          fontSize="32"
          paddingTop="86"
          paddingBottom="3"
        >
          Kiva
        </Heading>
        <Heading>Where to Invest</Heading>

        <Container>
          <Text>
            Select a category below to begin investing in one or many of Kiva’s
            microloans.
          </Text>

          <ScrollView>
            {categories.map((item, index = 0) => (
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  paddingTop: 16,
                  padding: 36,
                }}
              >
                <TouchableOpacity onPress={kivaAssetClass}>
                  <Text style={Typography.registerHeaderText}>{item}</Text>
                  <Image
                    source={{ uri: images[index] ? images[index] : img1 }}
                    style={Spacing.imgKiva}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </Container>
      </Center>
    </NativeBaseProvider>
  )
}

export default KivaInvestScreen
