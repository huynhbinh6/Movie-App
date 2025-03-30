import {
  Image,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";

import { useState } from "react";
import MovieFilter from "../../components/MovieFilter";
import Search from "../../components/Search";
import MovieItem from "../../components/MovieItem";
import { styles } from "./Home.style";
import { useViewModel } from "./Home.viewModel";
import { Movie } from "../../core/models/MovieResponse";
import { IHomeScreenProps } from "./Home.type";

const HomeScreen = ({ navigation, route }: IHomeScreenProps) => {
  const {
    typeFilter,
    typeSelected,
    sortData,
    sortSelected,
    movies,
    onSelectedSort,
    onChangeSearchText,
    onSelectedType,
    toMovieDetail,
    onSearchMovie,
    searchText,
    isLoading,
  } = useViewModel({ navigation, route });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imgContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.reactLogo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.contentContainer}>
          <MovieFilter
            data={typeFilter}
            selected={typeSelected}
            setSelected={onSelectedType}
          />
          <MovieFilter
            data={sortData}
            selected={sortSelected}
            setSelected={onSelectedSort}
          />
          <Search
            value={searchText}
            onChangeText={onChangeSearchText}
            onSearch={onSearchMovie}
          />
          {!!isLoading ? (
            <View style={styles.loading}>
              <ActivityIndicator size={"large"} color={"#5DB8FF"} />
            </View>
          ) : (
            <FlatList
              data={movies}
              style={styles.listContainer}
              nestedScrollEnabled
              keyExtractor={(item: Movie) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    toMovieDetail(item.id);
                  }}
                >
                  <MovieItem
                    id={item.id}
                    overview={item.overview}
                    poster_path={item.poster_path}
                    release_date={item.release_date}
                    title={item.title}
                  />
                </TouchableOpacity>
              )}
              ListFooterComponent={() => {
                return (
                  <View>
                    <TouchableOpacity>
                      <Text>Load More</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
