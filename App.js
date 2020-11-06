import React, {useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import TextInput from "./src/Components/Input";
import Button from "./src/Components/Button";

const App = () => {
  const [value, onChangeEmail] = useState('')
  return (
  <View style={styles.Container}>
    <TextInput
      onChangeText={(text) => onChangeEmail(text)}
      placeholder="Email"
      value={value}
      keyboardType="email-address"
      textContentType="emailAddress"
      secureTextEntry={false}
      label= "Email:"
    />

      <Button title='Hiago' color='green' tam='small'/>
  </View>
)};


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
