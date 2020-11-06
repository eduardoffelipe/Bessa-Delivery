import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import img from "../../Assets/shop.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const OpenAndCloseStores = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.backgroundTitle}>
        <Text style={styles.title}>Comercios Abertos</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={[1, 2, 3]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <TouchableOpacity onPress={()=> navigation.navigate('Stores')} style={styles.flatListItem}>
            <Image source={img} style={styles.img} />
            <View style={styles.alignInformation}>
              <Text style={styles.firstTextInformation}>Bar do seu Zé</Text>
              <Text style={styles.secondTextInformation}>5 - 10 min</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.backgroundTitle}>
        <Text style={styles.title}>Comercios Fechados</Text>
      </View>
      <FlatList
        style={styles.flatList}
        data={[1, 2, 3]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <TouchableOpacity onPress={()=> navigation.navigate('Stores')} style={styles.flatListItem}>
            <Image source={img} style={styles.img} />
            <View style={styles.alignInformation}>
              <Text style={styles.firstTextInformation}>Bar da Maria</Text>
              <Text style={styles.secondTextInformation}>5 - 10 min</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default OpenAndCloseStores;
