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
import { Buttons, Spacing, Typography } from "../styles";
import { Camera } from "expo-camera";
import { NavigationContainer } from "@react-navigation/native";

import exampleCompostImage from "../assets/foodwaste.jpg";
import exampleRecycleImage from "../assets/bottle-receipt.jpg";
const exampleCompostImageUri =
  Image.resolveAssetSource(exampleCompostImage).uri;
const exampleRecycleImageUri =
  Image.resolveAssetSource(exampleRecycleImage).uri;

// import * as ImagePicker from "expo-image-picker";

export default function CameraScreen({ route, navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [showCamera, setShowCamera] = useState(true);
  const [showConfirmPhoto, setShowConfirmPhoto] = useState(false);

  const [photoPath, setPhotoPath] = useState(null);
  const [image, setImage] = useState(null);

  const [recycled, setRecycled] = useState(0);
  const [composted, setComposted] = useState(0);
  const [redeemableAmount, setRedeemableAmount] = useState("0.00");

  const compost = () => navigation.navigate("Compost");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      // let photo = await cameraRef.takePictureAsync();
      setShowCamera(false);
      setShowConfirmPhoto(true);
      setImage(true);
      // setPhotoPath(photo.uri);

      if (route.params.parentComponent === "CompostScreen") {
        setComposted(1);
        setPhotoPath(exampleCompostImageUri);
        setRedeemableAmount("0.35");
      } else {
        setRecycled(11);
        setPhotoPath(exampleRecycleImageUri);
        setRedeemableAmount("0.55");
      }
    }
  };

  const confirmPhoto = () => {
    if (route.params.parentComponent === "CompostScreen") {
      navigation.navigate("Compost", {
        redeemableAmount: redeemableAmount,
        composted: composted,
      });
    } else {
      navigation.navigate("Recycle", {
        redeemableAmount: redeemableAmount,
        recycled: recycled,
      });
    }
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
                  height: 950,
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
      {showConfirmPhoto === true &&
        route.params.parentComponent === "CompostScreen" && (
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
                      <Text style={Typography.logInOutButtonText}>
                        {" "}
                        Confirm{" "}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </View>
        )}
      {showConfirmPhoto === true &&
        route.params.parentComponent === "RecycleScreen" && (
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
                  <Text>Bottles Recycled: {recycled}</Text>

                  <Text>Redeemable Amount: ${redeemableAmount} </Text>
                  <View style={Spacing.bottomTextContainer}>
                    <TouchableOpacity
                      style={Buttons.logInOutButton}
                      onPress={confirmPhoto}
                    >
                      <Text style={Typography.logInOutButtonText}>
                        {" "}
                        Confirm{" "}
                      </Text>
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
