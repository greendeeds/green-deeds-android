import React, { useState } from "react";
import { SafeAreaView, Button, Text, View } from "react-native";

export default function CompostScreen({ navigation }) {
  const [composted, setComposted] = useState(0);
  const [redeemableAmount, setRedeemableAmount] = useState("0.00");

  const photo = () => navigation.navigate("Camera");
  const celo = () =>
    navigation.navigate("Celo", { redeemableAmount: redeemableAmount });

  const scanPressed = () => {
    photo();

    // setComposted(3);
    // setRedeemableAmount("3.00");
  };

  console.log(navigation);
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
