import React from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import styles from "./styles";

import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Register = () => {
  return (
    <KeyboardAvoidingView style={styles.Container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>Cadastrar</Text>
        <Input label="Email : " />
        <Input label="Senha : " />
        <Input label="Cidade : " />
        <Input label="Endereço : " />
        <Input label="Complemento : " />
        <View style={styles.privacyTerm}>
          <CheckBox
            disabled={false}
            tintColors={{ true: "#f54c4c", false: "#fff" }}
            tintColo="#f54c4c"

            // value={toggleCheckBox}
            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={styles.baseText}>
            Eu aceito os <Text style={styles.markedText}>termos de uso</Text>
          </Text>
        </View>
        <Button title="Continuar" />
        <Text style={styles.baseText}>Tem uma conte ? <Text style={styles.markedText}>Logar agora</Text></Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
