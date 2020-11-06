import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles";
import Button from "../Button";

const CardStore = ({ storeName, description }) => {
  return (
    <>
      <View style={styles.viewPrincipal}>
        <Image style={styles.image} />
        <Text styles={styles.storeName}>{storeName}</Text>
        <Button color="green" title="+Add" />
      </View>
      <View style={styles.viewDescription}>
        <Text>{description}</Text>
      </View>
      <View style={styles.line}/>
    </>
  );
};

export default CardStore;
