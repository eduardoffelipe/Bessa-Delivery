import React, { useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';


import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Login = () => {
  const navigation = useNavigation()


  const [email, onChangeEmail] = useState("");
  const [pass, onChangeSenha] = useState("");

  return (
    <View style={styles.container}>
      <Input
        onChangeText={(text) => onChangeEmail(text)}
        value={email}
        keyboardType="email-address"
        textContentType="emailAddress"
        secureTextEntry={false}
        label="Email:"
      />
      <Input
        onChangeText={(text) => onChangeSenha(text)}
        value={pass}
        secureTextEntry
        label="Senha:"
      />
      <View style={styles.viewText}>
        <Text style={styles.esqueceu}>Esqueceu a senha</Text>
        <Text style={styles.criar}>Criar uma conta</Text>
      </View>
      <View style={styles.viewButton}>
        <Button title="Entrar" tam="small" action={() => navigation.navigate('Register')} />
      </View>
    </View>
  );
};

export default Login;
