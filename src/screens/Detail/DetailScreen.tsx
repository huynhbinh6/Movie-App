import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { styles } from "./Detail.style";
import { FontAwesome } from "@expo/vector-icons";
import { IDetailScreenProps } from "./Detail.type";
import { useViewModel } from "./Detail.viewModel";
import MovieInfo from "../../components/MovieInfo";
import TopCast from "../../components/TopCast";
import SimilarMovie from "../../components/SimilarMovie";

const DetailScreen = ({ navigation, route }: IDetailScreenProps) => {
  const { movieData, loading, onGoBack, addToWatchList, language, watchlistStatus } =
    useViewModel({
      navigation,
      route,
    });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.reactLogo}
          resizeMode="contain"
        />
      </View>
      {loading ? (
        <ActivityIndicator size={"large"} color={"#00B4E4"} />
      ) : (
        <ScrollView style={styles.contentContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onGoBack}>
              <FontAwesome name="chevron-left" size={16} color={"#fff"} />
            </TouchableOpacity>
            <Text style={styles.title}>{movieData?.title}</Text>
            <View style={styles.endHeaderComponent} />
          </View>
          <MovieInfo
            id={movieData?.id ?? 0}
            poster_path={movieData?.poster_path ?? ""}
            release_date={movieData?.release_date ?? ""}
            vote_average={movieData?.vote_average ?? 0}
            runtime={movieData?.runtime ?? 0}
            genres={movieData?.genres ?? []}
            status={movieData?.status ?? ""}
            original_language={language ?? ""}
            credits={movieData?.credits ?? { cast: [], crew: [] }}
            tagline={movieData?.tagline ?? ""}
            overview={movieData?.overview ?? ""}
            onPress={addToWatchList}
            watchlist={watchlistStatus}
          />
          <TopCast data={movieData?.credits.cast ?? []} />
          {movieData?.similar?.results.length !== 0 && (
            <>
              <View style={styles.divider} />
              <SimilarMovie data={movieData?.similar?.results ?? []} />
            </>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default DetailScreen;
