import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Movie } from "../core/models/MovieResponse";
import { IMAGE_URL } from "../core/api/config";
import moment from "moment";

const MovieItem = (item: Movie) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: `${IMAGE_URL}/${item.poster_path}` }}
          style={styles.img}
          resizeMode="cover"
        />
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>
            {moment(item.release_date).format("D MMMM YYYY")}
          </Text>
        </View>
        <Text numberOfLines={2} style={styles.description}>
          {item.overview}
        </Text>
      </View>
    </View>
  );
};

export default MovieItem;

const styles = StyleSheet.create({
  container: {
    rowGap: 8,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  img: {
    width: 100,
    height: 150,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  itemContainer: { justifyContent: "center", flex: 1, paddingHorizontal: 12 },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  releaseDate: { fontSize: 14, color: "#666", fontWeight: "400" },
  description: { fontSize: 12, color: "#999", marginTop: 4 },
});
