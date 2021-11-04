import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logoutAction } from '../actions/AccountActions'
import { useQuery, gql } from '@apollo/client'
import { SafeAreaView, Text, View, Alert, Image, Button } from 'react-native'

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
  Spacer,
} from 'native-base'

const KivaInvestScreen = ({ navigation, route }) => {
  const img1 =
    'https://images.unsplash.com/photo-1560951016-1242fd973c7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
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
            sector {
              name
            }
          }
        }
      }
    }
  `
  const { loading, error, data } = useQuery(GET_CATEGORIES)
  console.log('Error: ', error)
  console.log('data: ', data)

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error loading Categories </Text>

  let categories = [
    ...new Set(data.lend.loans.values.map((item) => item.sector.name)),
  ]

  const onLogoutPress = () => {
    firebase.auth().signOut().then(logout)
  }

  return (
    <NativeBaseProvider>
      <Center>
        <Heading
          color="emerald.500"
          fontSize="32"
          paddingTop="76"
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

          {categories.map((item, key) => (
            <Text key={key}> {item} </Text>
          ))}

          <View>
            <Button
            title="Agriculture"
            //Button Title
            onPress={() =>
              navigation.navigate('AssetClass', {
                paramKey: "Agriculture",
              })
            }
            />
            <View>
              {/* <View style={{ alignSelf: 'flex-start' }}>
                  <Text>Choose a category</Text>
                </View> */}
              <View>
                {/* <Text>Total Count: {data.lend.loans.totalCount}</Text> */}
                {/* <Text>List of all Categories:</Text>
                  {categories.map((item, key) => (
                    <Text key={key}> {item} </Text>
                  ))} */}
              </View>
              {/* <Button title="Invest" onPress={kivaAssetClass} />
                <Button title="Portfolio" onPress={kivaPortfolio} />
                <Button title="Kiva Home" onPress={kivaScreen} /> */}
            </View>

            {/* <View style={Spacing.bottomNavContainer}>
                <View style={Spacing.bottomTextContainer}>
                  <TouchableOpacity onPress={home}>
                    <Text style={Typography.linkText}>Homepage</Text>
                  </TouchableOpacity>
                </View>
              </View> */}
          </View>
          {/* <ScrollView>
            {categories.map((item, key) => (
              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                  paddingTop: 16,
                  padding: 36,
                }}
              >
                <Text style={Typography.registerHeaderText}>{item}</Text>
                <Image source={{ uri: img1 }} style={Spacing.imgKiva} />
              </View>
            ))}
          </ScrollView> */}
        </Container>
      </Center>
    </NativeBaseProvider>
  )
}

export default KivaInvestScreen
