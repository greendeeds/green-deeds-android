import 'react-native-gesture-handler'
import React from 'react'

//Redux
import { useSelector } from 'react-redux'
import AccountReducer from './reducers/AccountReducer'

//Navigation
import { createStackNavigator } from '@react-navigation/stack'
import AboutScreen from './screens/AboutScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import HomeScreen from './screens/HomeScreen'
import RecycleScreen from './screens/RecycleScreen'
import CompostScreen from './screens/CompostScreen'
import CameraScreen from './screens/CameraScreen'
import CeloScreen from './screens/CeloScreen'
import KivaScreen from './screens/KivaScreen'
import KivaPortfolioScreen from './screens/KivaPortfolioScreen'
import KivaInvestScreen from './screens/KivaInvestScreen'
import KivaClassDetails from './screens/KivaClassDetails'

import { StackRouter } from 'react-navigation'
import { NavigationContainer } from '@react-navigation/native'

//import { StyleSheet, Image, ColorPropType, Button, Alert } from "react-native";

import { Buttons, Colors } from './Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import KivaAssetClassScreen from './screens/KivaAssetClassScreen'
import KivaInvesmentConfirmation from './screens/KivaInvesmentConfirmation'

const Stack = createStackNavigator()

const Navigator = () => {
  const loggedIn = useSelector((state) => state.AccountReducer.loggedIn)
  const logout = () => dispatch(logoutAction())

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <>
            <Stack.Screen
              options={{
                animationTypeForReplace: 'push',
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
              }}
              name="Home"
              component={HomeScreen}
              options={{ exchanged: false }}
            />
            <Stack.Screen
              name="Camera"
              component={CameraScreen}
              options={{
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
              }}
            />

            <Stack.Screen
              name="Celo"
              component={CeloScreen}
              options={{
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
                title: 'Celo Log In',
              }}
            />

            <Stack.Screen
              name="Kiva"
              component={KivaScreen}
              options={{
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
              }}
            />

            <Stack.Screen
              name="Portfolio"
              component={KivaPortfolioScreen}
              options={{
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
                title: 'Portfolio',
              }}
            />

            <Stack.Screen
              name="AssetClass"
              component={KivaAssetClassScreen}
              options={{
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
                title: 'AssetClass',
              }}
            />

            <Stack.Screen
              name="InvesmentConfirmation"
              component={KivaInvesmentConfirmation}
              options={{
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
                title: 'InvesmentConfirmation',
              }}
            />

            <Stack.Screen
              name="Invest"
              component={KivaInvestScreen}
              options={{
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
                title: 'Invest',
              }}
            />

            <Stack.Screen
              name="Compost"
              component={CompostScreen}
              options={{
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
              }}
            />

            <Stack.Screen
              name="Recycle"
              component={RecycleScreen}
              options={{
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
              }}
            />

            <Stack.Screen
              name="About"
              component={AboutScreen}
              options={{
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
              }}
            />
            <Stack.Screen
              name="KivaClassDetails"
              component={KivaClassDetails}
              options={{
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                title: 'Log In',
                animationTypeForReplace: 'pop',
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
              }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
              }}
            />

            <Stack.Screen
              name="About"
              component={AboutScreen}
              options={{
                headerStyle: { backgroundColor: Colors.PRIMARY },
                headerTintColor: Colors.WHITE,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator
