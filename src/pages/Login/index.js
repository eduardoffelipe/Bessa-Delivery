import React from 'react';
import {Text, TextInput, View } from 'react-native';
import styles from './style'

export function Login() {
    const [Email, onChangeEmail] = React.useState('');
    const [Senha, onChangeSenha] = React.useState('');
    
    
    return (
      <View style={styles.container}>
        <Text>Bem Vindo!\n</Text>
    
        <TextInput 
        onChangeText={text=> onChangeEmail(text)} 
        value={Email} 
        style={{width:200, height:40}}
        placeholder="Email"
        keyboardType="email-address"
        textContentType="emailAddress"
        />
    
        <TextInput 
        onChangeText={text => onChangeSenha(text)} 
        value={Senha} 
        style={{width:200, height:40}}
        placeholder="Senha"
        secureTextEntry
        />


        <Button
        title="Entrar"
        color="#f54c4c"
        />
    
        <StatusBar style="auto" />
    
      </View>
    );
}




