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
  topCastContainer: {
    paddingHorizontal: 24,
    marginVertical: 16,
    marginBottom: 30,
  },
  topCast: {
    fontSize: 22,
    fontWeight: "600",
  },
  actorImg: {
    width: 286,
    height: 162,
    borderRadius: 8,
  },
  cardContainer: {
    width: 142,
    marginTop: 18,
    paddingBottom: 12,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    // backgroundColor: 'red'
  },
  actorName: {
    fontSize: 18,
    fontWeight: "700",
    paddingHorizontal: 6,
    marginTop: 6,
  },
  nickname: {
    fontSize: 16,
    fontWeight: "400",
    paddingHorizontal: 6,
    marginTop: 6,
  },
  divider: {
    height: 2,
    backgroundColor: "#E4E4E4",
  },
});
