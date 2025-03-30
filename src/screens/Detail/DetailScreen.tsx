import {
  View,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { styles } from "./Detail.style";
import { FontAwesome } from "@expo/vector-icons";
import CircularProgress from "../../components/CircleProgressBar";
import { FontAwesome5 } from "@expo/vector-icons";
import { IDetailScreenProps } from "./Detail.type";
import { useViewModel } from "./Detail.viewModel";
import MovieInfo from "../../components/MovieInfo";

const DetailScreen = ({ navigation, route }: IDetailScreenProps) => {
  const { movieData, loading } = useViewModel({ navigation, route });
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../assets/logo.png")}
          style={styles.reactLogo}
          resizeMode="contain"
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        <MovieInfo
          id={movieData?.id}
          overview={movieData?.overview}
          poster_path={movieData?.poster_path}
          release_date={movieData?.release_date}
          title={movieData?.title}
        />
        <View style={styles.topCastContainer}>
          <Text style={styles.topCast}>Top Billed Cast</Text>
          <View style={styles.cardContainer}>
            <Image
              source={require("../../assets/icon.png")}
              style={styles.actorImg}
            />
            <Text style={styles.actorName}>Margot Robbie</Text>
            <Text style={styles.nickname}>Barbie</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.topCastContainer}>
          <Text style={styles.topCast}>Recommendations</Text>
          <View style={styles.cardContainer}>
            <Image
              source={require("../../assets/icon.png")}
              style={styles.actorImg}
            />
            <Text style={styles.actorName}>Margot Robbie</Text>
            <Text style={styles.nickname}>Barbie</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
