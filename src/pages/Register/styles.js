import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  scrollView: {
    paddingTop: 40,
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  privacyTerm: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: 10,
  },
  markedText: {
    color: "#f54c4c",
    fontWeight: "bold",
  },
  baseText: {
    textAlign: "center",
  },
});

export default styles;
