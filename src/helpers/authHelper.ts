import AsyncStorage from "@react-native-async-storage/async-storage";
export const isUserLoggedIn = async () => {
  const token = await AsyncStorage.getItem("authToken");
  return token !== null;
};
