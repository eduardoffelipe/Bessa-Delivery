import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  backgroundTitle: {
    borderWidth: 1,
    borderRightColor: "#fff",
    borderTopColor: "#fff",
    borderLeftColor: "#fff",
    borderBottomColor: "#ccc",
    width: "90%",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  flatList: {
    height: "30%",
    width: "90%",
    marginBottom: 30,
  },
  flatListItem: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 100,
    width: "100%",
    marginBottom: 10,
  },
  img: {
    marginLeft: 40,
    width: 50,
    height: 50, 
    resizeMode: "contain"
  },
  alignInformation: {
      marginRight: 40
  },
  firstTextInformation: {
      fontSize: 18,
      fontWeight: 'bold',

  },
  secondTextInformation: {
    fontSize: 15,
    color: '#333',},
});

export default styles;
