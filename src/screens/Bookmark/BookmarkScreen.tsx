import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./Bookmark.style";
import { IBookmarkScreenProps } from "./Bookmark.type";
import { useViewModel } from "./Bookmark.viewModel";
import { IMAGE_URL } from "../../core/api/config";
import moment from "moment";

const BookmarkScreen = ({ navigation, route }: IBookmarkScreenProps) => {
  const {
    data,
    sortBy,
    orderBy,
    loading,
    isExpand,
    onChangeOrder,
    onChangeSort,
    onExpand,
  } = useViewModel({
    navigation,
    route,
  });

  // Dummy watchlist data
  const [watchlist, setWatchlist] = useState([
    {
      id: "1",
      title: "Barbie",
      date: "19 July 2023",
      image: "https://image-url.com/barbie.jpg",
      description:
        "Barbie and Ken are having the time of their lives in the colorful and...",
    },
    {
      id: "2",
      title: "Ruby Gillman, Teenage Kraken",
      date: "28 June 2023",
      image: "https://image-url.com/ruby.jpg",
      description: "Ruby Gillman, a sweet and awkward high school student,...",
    },
    {
      id: "3",
      title: "The Flash",
      date: "13 June 2023",
      image: "https://image-url.com/flash.jpg",
      description:
        "When his attempt to save his family inadvertently alters the future,...",
    },
  ]);

  // Remove item from watchlist
  const removeFromWatchlist = (id: any) => {
    setWatchlist(watchlist.filter((item) => item.id !== id));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.reactLogo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.headerContainer}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileText}>J</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text style={styles.profileName}>John Lee</Text>
          <Text style={styles.memberSince}>Member since August 2023</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.watchlistText}>My Watchlist</Text>
        <View style={styles.filters}>
          <TouchableOpacity onPress={onExpand} style={styles.sortBy}>
            <Text style={styles.filterLabel}>Filter by:</Text>
            <Text style={styles.filterText}>
              {sortBy == "vote_average" ? "Rating" : "Creation"}
            </Text>
            <AntDesign name={"down"} size={20} color="#00B4E4" />
            {isExpand ? (
              <View style={styles.sortByModal}>
                <Text
                  onPress={() => onChangeSort("vote_average")}
                  style={
                    sortBy == "vote_average"
                      ? styles.rating
                      : styles.ratingInactive
                  }
                >
                  Rating
                </Text>
                <Text
                  onPress={() => onChangeSort('created_at')}
                  style={
                    sortBy == "created_at"
                      ? styles.creation
                      : styles.creationInactive
                  }
                >
                  Creation
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>
          <Text
            style={[styles.filterLabel, { marginLeft: 16, marginRight: 8 }]}
          >
            Order:
          </Text>
          <TouchableOpacity onPress={onChangeOrder}>
            <AntDesign
              name={orderBy === "asc" ? "arrowup" : "arrowdown"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
        {loading ? (
          <ActivityIndicator
            style={{ marginTop: 30 }}
            color={"#00B4E4"}
            size={"large"}
          />
        ) : (
          <FlatList
            data={data}
            style={styles.listMovieContainer}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image
                  source={{
                    uri: `${IMAGE_URL}${item.poster_path}`,
                  }}
                  style={styles.poster}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.movieTitle}>{item.title}</Text>
                  <Text style={styles.movieDate}>
                    {moment(item.release_date).format("D MMMM YYYY")}
                  </Text>
                  <Text numberOfLines={2} style={styles.movieDescription}>
                    {item.overview}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => removeFromWatchlist(item.id)}
                  style={styles.removeButton}
                >
                  <AntDesign name="close" size={18} color="black" />
                </TouchableOpacity>
              </View>
            )}
            ListFooterComponent={<View style={{ height: 150 }} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default BookmarkScreen;
