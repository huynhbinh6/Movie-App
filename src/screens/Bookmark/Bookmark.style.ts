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
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#042541",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  profileIcon: {
    width: 50,
    height: 50,
    backgroundColor: "#7F56D9",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: { marginLeft: 30 },
  profileText: { color: "white", fontSize: 22, fontWeight: "bold" },
  profileName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  memberSince: { color: "#d1d1d1", fontSize: 14 },
  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    paddingBottom: 20,
  },
  watchlistText: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 20
  },
  filters: { flexDirection: "row", alignItems: "center" },
  filterLabel: {
    fontSize: 16,
    fontWeight: "400",
    marginRight: 8,
    color: "#828282",
  },
  filterText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#00B4E4",
    paddingHorizontal: 24,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#00B4E4",
  },
  listMovieContainer: {
    marginTop: 30,
  },
  content: {
    paddingBottom: 90,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginVertical: 5,
    alignItems: "center",
  },
  poster: { width: 95, height: 141, borderRadius: 5 },
  cardContent: { flex: 1, marginLeft: 10 },
  movieTitle: { fontSize: 16, fontWeight: "bold" },
  movieDate: { fontSize: 14, color: "gray" },
  movieDescription: { fontSize: 14, color: "#000", marginTop: 16 },
  removeButton: { padding: 5, position: 'absolute', top: 5, right: 5 },
});
