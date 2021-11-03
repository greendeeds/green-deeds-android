import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { firebase } from "./firebase/config";

//graphQL
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

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

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: 'https://api.kivaws.org/graphql',
  cache,
  //defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
})

const store = createStore(rootReducer);

export default function App() {
  return (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Navigator />
    </Provider>
  </ApolloProvider>
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
