import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import { IMAGE_URL } from "../core/api/config";
import { MovieSimilarItem } from "../core/models/DetailResponse";

type Props = {
  data: MovieSimilarItem[];
};

const SimilarMovie = ({ data }: Props) => {
  const _renderItem = ({ item }: { item: MovieSimilarItem }) => {
    return (
      <View style={styles.topCastContainer}>
        <Text style={styles.topCast}>Recommendations</Text>
        <View style={styles.cardContainer}>
          <Image
            source={{ uri: `${IMAGE_URL}${item.backdrop_path}` }}
            style={styles.actorImg}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.actorName}>{item.title}</Text>
            <Text style={styles.nickname}>76%</Text>
          </View>
        </View>
      </View>
    );
  };
  return <FlatList data={data} renderItem={_renderItem} />;
};

const styles = StyleSheet.create({
  topCastContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    paddingBottom: 30,
    backgroundColor: "#fff",
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
    width: 286,
    marginTop: 18,
    paddingBottom: 12,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actorName: {
    fontSize: 18,
    fontWeight: "400",
    paddingHorizontal: 6,
    marginTop: 6,
  },
  nickname: {
    fontSize: 18,
    fontWeight: "400",
    paddingHorizontal: 6,
    marginTop: 6,
  },
});

export default SimilarMovie;
