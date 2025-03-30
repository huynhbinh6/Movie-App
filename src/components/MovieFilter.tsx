import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export interface SelectedItem {
  id: string;
  title: string;
}

type Props = {
  data: Array<any>;
  selected: SelectedItem;
  setSelected: (value: any) => void;
};

const MovieFilter = ({ data, selected, setSelected }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={{ marginBottom: 16 }}>
      <TouchableOpacity
        style={[
          styles.header,
          {
            borderBottomLeftRadius: isOpen ? 0 : 8,
            borderBottomRightRadius: isOpen ? 0 : 8,
            borderBottomWidth: isOpen ? 0 : 1,
          },
        ]}
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text style={styles.headerText}>{selected.title}</Text>
        <FontAwesome5
          name={isOpen ? "chevron-down" : "chevron-right"}
          size={16}
          color={"black"}
        />
      </TouchableOpacity>
      {isOpen && (
        <View
          style={{
            padding: 15,
            borderWidth: 1,
            borderColor: "#ccc",
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <FlatList
            data={data}
            nestedScrollEnabled
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.option,
                  selected.id === item.id && styles.selectedOption,
                ]}
                onPress={() => {
                  setSelected(item);
                  setIsOpen(false);
                }}
              >
                <Text
                  style={
                    selected.id == item.id
                      ? styles.selectedText
                      : styles.optionText
                  }
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default MovieFilter;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600",
  },
  option: {
    padding: 8,
    borderRadius: 4,
  },
  selectedOption: {
    backgroundColor: "#5DB8FF",
  },
  optionText: {
    fontSize: 16,
  },
  selectedText: {
    color: "#fff",
    fontSize: 16,
  },
});
