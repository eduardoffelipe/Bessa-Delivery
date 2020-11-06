import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import CheckBox from "@react-native-community/checkbox";
import styles from "./styles";

import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Register = () => {
  const navigation = useNavigation()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [complement, setComplement] = useState("");
  const [check, setCheck] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Cadastrar</Text>
        <Input
          label="Email : "
          value={email}
          onValueChange={(newValue) => setEmail(newValue)}
        />
        <Input
          label="Senha : "
          value={password}
          onValueChange={(newValue) => setPassword(newValue)}
        />
        <Input
          label="Cidade : "
          value={city}
          onValueChange={(newValue) => setCity(newValue)}
        />
        <Input
          label="Endereço : "
          value={address}
          onValueChange={(newValue) => setAddress(newValue)}
        />
        <Input
          label="Complemento : "
          value={complement}
          onValueChange={(newValue) => setComplement(newValue)}
        />
        <View style={styles.privacyTerm}>
          <CheckBox
            disabled={false}
            tintColors={{ true: "#f54c4c", false: "#fff" }}
            tintColor="#f54c4c"
            value={check}
            onValueChange={(newValue) => setCheck(newValue)}
          />
          <Text style={styles.baseText}>
            Eu aceito os <Text style={styles.markedText}>termos de uso</Text>
          </Text>
        </View>
        <Button title="Continuar" action={() => navigation.navigate('Login')}/>
        <Text style={styles.baseText}>
          Tem uma conte ? <Text style={styles.markedText}>Logar agora</Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
