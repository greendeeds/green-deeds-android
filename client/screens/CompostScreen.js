import React, { useState, useEffect, useRef } from "react";
import { SafeAreaView, Button, Text, View, Alert } from "react-native";

export default function CompostScreen({ navigation, route }) {
  const [composted, setComposted] = useState(0);
  const [redeemableAmount, setRedeemableAmount] = useState("0.00");
  const [confirmed, setConfirmed] = useState(false);

  const photo = () => navigation.navigate("Camera");
  const celo = () =>
    navigation.navigate("Celo", { redeemableAmount: redeemableAmount });

  //watch states for changes from camera screen
  useEffect(() => {
    console.log("useEffect ", route.params);
    setComposted(route.params.composted);
    setRedeemableAmount(route.params.redeemableAmount);
    // setConfirmed(true);
  }, [route.params]);

  // useEffect(() => {
  //   if (confirmed === true) {
  //     Alert.alert(
  //       "Confirmed!",
  //       `Compost drop off confirmed!  Redeem ${redeemableAmount} for cUSD`,
  //       [{ text: "Redeem", onPress: () => celo }]
  //     );
  //   }
  // }, [confirmed]);

  const scanPressed = () => {
    photo();
  };
  return (
    <SafeAreaView>
      <Button title="Scan Receipt" onPress={scanPressed} />

      <View>
        <Text>Bags of compost: {composted}</Text>

        <Text>Redeemable Amount: ${redeemableAmount} </Text>
        <Button title="Redeem for Celo Dollars" onPress={celo} />
      </View>
    </SafeAreaView>
  );
}
