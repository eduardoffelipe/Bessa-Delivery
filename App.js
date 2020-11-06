import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import "react-native-gesture-handler";

import Button from "./src/Components/Button";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const App = () => {
  return (
    <View style={styles.Container}>
      <Button title='Hiago' color='green' TAM='small'/>
    </View>
  );
};

export default App;
