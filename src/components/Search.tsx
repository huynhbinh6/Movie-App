import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";

type IInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
};

const Search = (props: IInputProps) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="grey"
        autoCapitalize="none"
        autoCorrect={false}
        value={props.value}
        onSubmitEditing={(event) => {
          console.log(event.nativeEvent.text);
        }}
        onChangeText={(text: string) => {
          props.onChangeText(text);
        }}
      />
      <TouchableOpacity
        style={props.value.length != 0 ? styles.btnActive : styles.btnInactive}
        disabled={props.value.length == 0}
        activeOpacity={0.7}
        testID="search-button"
        onPress={() => {
          props.onSearch();
        }}
      >
        <Text
          style={
            props.value.length != 0
              ? styles.searchTextActive
              : styles.searchTextInactive
          }
        >
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    backgroundColor: "white",
    fontWeight: "600",
    fontSize: 16,
    color: "black",
  },
  btnInactive: {
    paddingVertical: 15,
    marginTop: 18,
    backgroundColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
  },
  btnActive: {
    paddingVertical: 15,
    marginTop: 18,
    backgroundColor: "#5DB8FF",
    borderRadius: 5,
    alignItems: "center",
  },
  searchTextInactive: { color: "#00000080", fontWeight: "600", fontSize: 16 },
  searchTextActive: { color: "#fff", fontWeight: "600", fontSize: 16 },
});
