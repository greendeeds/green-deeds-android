import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from "react-native";
import { Buttons, Spacing, Typography } from "../Styles/index";
import { Camera } from "expo-camera";
import { NavigationContainer } from "@react-navigation/native";

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [showCamera, setShowCamera] = useState(true);
  const [showConfirmPhoto, setShowConfirmPhoto] = useState(false);

  const [photoPath, setPhotoPath] = useState(null);

  const compost = () => navigation.navigate("Compost");

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    console.log("take picture pressed.");
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      setShowCamera(false);
      setShowConfirmPhoto(true);
      console.log("photo", photo);
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
                  // borderRadius: "50%",
                  // borderColor: "white",
                  height: 50,
                  width: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    // borderRadius: "50%",
                    // borderColor: "white",
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
