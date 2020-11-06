import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";

import Register from "./src/pages/Register";

const App = () => {
  return (
    <View style={styles.Container}>
      <Register />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
