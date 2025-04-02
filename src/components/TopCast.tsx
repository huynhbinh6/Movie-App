import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import { CastMember } from "../core/models/DetailResponse";
import { IMAGE_URL } from "../core/api/config";

type Props = {
  data: CastMember[];
};

const TopCast = ({ data }: Props) => {
  const _renderItem = ({ item }: { item: CastMember }) => (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: `${IMAGE_URL}${item.profile_path}` }}
        style={styles.actorImg}
      />
      <Text style={styles.actorName}>{item.name}</Text>
      <Text style={styles.nickname}>{item.character}</Text>
    </View>
  );

  return (
    <View style={styles.topCastContainer}>
      <Text style={styles.topCast}>{`Top Billed Cast`}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topCastContainer: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    paddingBottom: 30,
    backgroundColor: '#fff'
  },
  topCast: {
    fontSize: 22,
    fontWeight: "600",
  },
  actorImg: {
    width: 140,
    height: 155,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContainer: {
    borderRadius: 8,
    borderWidth: 1,
    width: 142,
    marginTop: 18,
    paddingBottom: 12,
    borderColor: "#E3E3E3",
    marginRight: 16,
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
  },
});

export default TopCast;
