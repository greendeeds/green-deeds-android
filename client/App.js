import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { firebase } from "./firebase/config";

//Redux
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import AccountReducer from "./reducers/AccountReducer";

import { decode, encode } from "base-64";
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

//Navigation
import Navigator from "./Navigator";

const rootReducer = combineReducers({
  AccountReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
