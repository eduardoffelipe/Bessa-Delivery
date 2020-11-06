import React from "react";
import { TouchableOpacity, Text } from "react-native";

import styles from "./styles";

const Button = ({ action, title, color, tam}) => {
  return (
    <>
      <TouchableOpacity
        style={{
          ...styles.Container,
          backgroundColor: color == "green" ? "#3fae5f" : "#f54c4c",
          width: tam == 'small' ? 150 : 300
        }}
        onPress={action}
      >
        <Text style={styles.Text}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
