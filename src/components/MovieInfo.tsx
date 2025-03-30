import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import CircularProgress from "./CircleProgressBar";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { Detail } from "../core/models/DetailResponse";
import moment from "moment";
import { IMAGE_URL } from "../core/api/config";

const MovieInfo = (item: Detail) => {
  function convertMinutes(minutes: number) {
    const hours = Math.floor(minutes / 60); // Get the whole hours
    const remainingMinutes = minutes % 60; // Get the remaining minutes
    return `${hours}h ${remainingMinutes}m`;
  }
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <FontAwesome name="chevron-left" size={16} color={"#fff"} />
          </TouchableOpacity>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.endHeaderComponent} />
        </View>
        <View style={styles.movieInfo}>
          <Image
            source={{
              uri: `${IMAGE_URL}${item.poster_path}`,
            }}
            style={styles.poster}
            resizeMode="cover"
          />
          <View style={styles.info}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>PG13</Text>
            </View>
            <Text style={styles.releaseDate}>
              {moment(item.release_date).format("D MMMM YYYY")} •{" "}
              {item.runtime !== undefined
                ? convertMinutes(item.runtime)
                : "N/A"}
            </Text>
            <Text style={styles.genre}>Comedy, Adventure, Fantasy</Text>
            <Text style={styles.status}>
              <Text style={styles.boldText}>Status:</Text> {item.status}
            </Text>
            <Text style={styles.language}>
              <Text style={styles.boldText}>Original Language:</Text>{" "}
              {item.original_language}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.userContainer}>
        <View style={styles.userScoreContainer}>
          <View style={styles.userScoreContent}>
            <View style={styles.circleProgress}>
              <CircularProgress
                progress={74} //not sure popularity
                size={50}
                outerCircleColor="#D0D2D366"
                progressCircleColor="#45FF8F"
                strokeWidth={6}
                labelStyle={{ fontWeight: "bold", fontSize: 13 }}
              />
            </View>
            <Text style={styles.userScoreLabel}>User Score</Text>
          </View>
          {/* not sure which value can be pass here */}
          <View style={styles.crew}>
            <Text style={styles.crewText}>
              <Text style={styles.boldText}>Greta Gerwig</Text> {"\n"}
              Director, Writer
            </Text>
            <Text style={[styles.crewText, { marginTop: 18 }]}>
              <Text style={styles.boldText}>Noah Baumbach</Text> {"\n"}Writer
            </Text>
          </View>
        </View>
        <Text style={styles.tagline}>{item.tagline}</Text>
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text numberOfLines={5} style={styles.overview}>
          {item.overview}
        </Text>
        <TouchableOpacity style={styles.watchlistButton}>
          <FontAwesome5 name="bookmark" size={16} color="white" />
          <Text style={styles.watchlistText}> Add To Watchlist</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#2596be",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
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
  movieInfo: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 30,
  },
  poster: {
    width: 115,
    height: 145,
    borderRadius: 10,
  },
  info: {
    marginLeft: 15,
    flex: 1,
  },
  badge: {
    borderWidth: 1,
    borderColor: "#FFFFFFB2",
    borderRadius: 3,
    padding: 5,
    alignSelf: "flex-start",
  },
  badgeText: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
  releaseDate: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
    marginVertical: 8,
  },
  genre: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
  status: {
    color: "white",
    fontSize: 14,
    marginVertical: 8,
  },
  language: {
    color: "white",
    fontSize: 14,
  },
  boldText: {
    fontWeight: "bold",
  },
  userContainer: {
    flex: 1,
    backgroundColor: "#00B4E4",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 34,
  },
  userScoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userScoreContent: {
    width: "50%",
  },
  circleProgress: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 60 / 2,
    backgroundColor: "#042541",
  },
  userScoreLabel: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  crew: {
    width: "50%",
    justifyContent: "center",
  },
  crewText: {
    color: "white",
    fontSize: 14,
  },
  tagline: {
    fontStyle: "italic",
    color: "white",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    marginTop: 26,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  overview: {
    color: "white",
    fontSize: 14,
    marginBottom: 20,
  },
  watchlistButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 190,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
  },
  watchlistText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default MovieInfo;
