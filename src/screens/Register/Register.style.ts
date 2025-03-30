import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 200,
  },
  inputContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "500",
    color: "#333",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: "red",
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
  buttonContainer: {
    width: "80%",
    backgroundColor: "#007BFF",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  toggleText: {
    paddingHorizontal: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#00B4E4",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    width: "90%",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    padding: 10,
    alignItems: "center",
  },
  signup: {
    color: "#105E26",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
