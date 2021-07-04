import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Image,
  Platform,
} from "react-native";
import { Buttons, Spacing, Typography } from "../Styles/index";
import { Camera } from "expo-camera";
import { NavigationContainer } from "@react-navigation/native";

// import * as ImagePicker from "expo-image-picker";

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [showCamera, setShowCamera] = useState(true);
  const [showConfirmPhoto, setShowConfirmPhoto] = useState(false);

  const [photoPath, setPhotoPath] = useState(null);
  const [image, setImage] = useState(null);

  const [composted, setComposted] = useState(0);
  const [redeemableAmount, setRedeemableAmount] = useState("0.00");

  const compost = () => navigation.navigate("Compost");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== "web") {
  //       const { status } =
  //         await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== "granted") {
  //         alert("Sorry, we need camera roll permissions to make this work!");
  //       }
  //     }
  //   })();
  // }, []);

  const takePicture = async () => {
    console.log("take picture pressed.");
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      setShowCamera(false);
      setShowConfirmPhoto(true);
      console.log("photo", photo);
      setPhotoPath(photo.uri);
      setImage(true);
      setComposted(3);
      setRedeemableAmount("0.35");
    }
  };

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   } else {
  //     console.log("cancelled: ", result.cancelled);
  //   }
  // };

  const confirmPhoto = () => {
    console.log("confirm pressed ");

    navigation.navigate("Compost", {
      redeemableAmount: redeemableAmount,
      composted: composted,
    });
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      {showCamera === true && (
        <Camera
          style={styles.camera}
          type={type}
          ref={(ref) => {
            setCameraRef(ref);
          }}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: "flex-end",
              }}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}
            >
              <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
                {" "}
                Flip{" "}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignSelf: "center" }}
              onPress={takePicture}
            >
              <View
                style={{
                  height: 50,
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: 40,
                    width: 40,
                    backgroundColor: "white",
                  }}
                ></View>
              </View>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
      {showConfirmPhoto === true && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {image && (
            <>
              <Image
                source={{ uri: photoPath }}
                style={{ width: 300, height: 300 }}
              />
              <View>
                <Text>Bags of compost: {composted}</Text>

                <Text>Redeemable Amount: ${redeemableAmount} </Text>
                <View style={Spacing.bottomTextContainer}>
                  <TouchableOpacity
                    style={Buttons.logInOutButton}
                    onPress={confirmPhoto}
                  >
                    <Text style={Typography.logInOutButtonText}> Confirm </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "column",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
