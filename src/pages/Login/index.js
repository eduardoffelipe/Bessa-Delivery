import React from "react";
import { View } from "react-native";
import styles from "./styles";

import TextInput from "../../Components/Input";
import Button from "../../Components/Button";

const Login = () => {
  const [email, onChangeEmail] = React.useState("");
  const [Senha, onChangeSenha] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => onChangeEmail(text)}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        textContentType="emailAddress"
        secureTextEntry={false}
        label="Email:"
      />

      <Button title="Hiago" tam="small" />
    </View>
  );
}
export default Login;
