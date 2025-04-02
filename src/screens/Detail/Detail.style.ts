import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgContainer: {
    alignItems: "center",
    gap: 8,
  },
  reactLogo: {
    height: 80,
    width: 58,
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: "#2596be",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 10,
  },
  endHeaderComponent: {
    width: 16,
    height: 16,
  },
  divider: {
    height: 2,
    backgroundColor: "#E4E4E4",
  },
});
