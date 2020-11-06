import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
// import Rotas from "./routes/routes.js";
import "react-native-gesture-handler";
import TextInput from "./src/Components/Input";

const App = () => {
  const [value, onChangeText] = useState('')
  return (
  <View>
    <TextInput
      onChangeText={(text) => onChangeEmail(text)}
      placeholder="Email"
      value={value}
      keyboardType="email-address"
      textContentType="emailAddress"
      secureTextEntry={false}
      label= "Email:"
    />
  </View>
)};

export default App;
