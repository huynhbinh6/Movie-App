import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
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
  const { data } = useViewModel({ navigation, route });
  const [sortOrder, setSortOrder] = useState("asc"); // Sorting order
  const [filter, setFilter] = useState("Rating"); // Default filter

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

  // Sorting logic (based on filter & order)
  const sortedWatchlist = [...watchlist].sort((a, b) => {
    return sortOrder === "asc"
      ? a.title.localeCompare(b.title)
      : b.title.localeCompare(a.title);
  });

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
          <Text style={styles.filterLabel}>Filter by:</Text>
          <Text style={styles.filterText}>{filter}</Text>
          <AntDesign name={"down"} size={20} color="#00B4E4" />
          <Text
            style={[styles.filterLabel, { marginLeft: 16, marginRight: 8 }]}
          >
            Order:
          </Text>
          <TouchableOpacity
            onPress={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          >
            <AntDesign
              name={sortOrder === "asc" ? "arrowup" : "arrowdown"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>
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
      </View>
    </SafeAreaView>
  );
};

export default BookmarkScreen;
