import React, {useState} from "react";
import { View, Text, ScrollView  } from "react-native";
import { FlatList } from "react-native";
import Button from "../../Components/Button";
import CardStore from "../../Components/CardStore";
import styles from "./styles";

// import { Container } from './styles';

const DATA = [
  {
    id: "1",
    title: "Prato",
    description: "Lorem ipsum sit dole a met.",
  },
  {
    id: "2",
    title: "Prato 2",
    description: "Lorem ipsum sit dole a met.",
  },
  {
    id: "3",
    title: "Prato 3",
    description: "Lorem ipsum sit dole a met.",
  },
];

const Item = ({ item }) => (
   <CardStore 
    storeName={item.title}
    description={item.description}
   />
);

const Stores = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <>
      <ScrollView>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Bar do seu Zé</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
        <Button
          color="#f54c4c"
          title="Finalizar Pedido"
        />
      </ScrollView>
    </>
  );
};

export default Stores;
