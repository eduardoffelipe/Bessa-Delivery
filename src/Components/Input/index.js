import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';
import styles from './styles';



const Input = ({label, ...rest}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
      style={styles.input}
      {...rest}
      />
    </>
  );
}

export default Input;