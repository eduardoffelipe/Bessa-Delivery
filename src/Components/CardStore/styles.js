import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewPrincipal:{
    flexDirection: "row"
  },
  image:{
    borderRadius: 50,
    borderColor: "#222",
    borderWidth: 1,
  },
  storeName:{
    fontSize: 18,
    color: "#222",
    fontWeight:"bold",
    alignItems: "center",
  },
  viewDescription:{
    marginVertical: 10,
    flexDirection: "column",
    fontSize: 12,
    color: "#444"
  },
  line:{
    borderBottomWidth: 2,
    borderColor:"#777",
  }
  
});

export default styles;
