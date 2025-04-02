import { useEffect, useMemo, useState } from "react";
import { axiosClient } from "../../core/api/axiosClient";
import { ACCOUNT_ID, API_KEY, BASE_URL, TOKEN } from "../../core/api/config";
import { IDetailScreenProps } from "./Detail.type";
import { Movie, DetailResponse } from "../../core/models/DetailResponse";
import { Language } from "../../core/models/LanguageResponse";
import { Alert } from "react-native";

export const useViewModel = ({ navigation, route }: IDetailScreenProps) => {
  const [movieData, setMovieData] = useState<Movie>();
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState<string>("");
  const options = {
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN} `,
    },
  };

  const fetchMovieDetail = async () => {
    try {
      setLoading(true);
      const movie_id = route.params?.movie_id;
      const { data }: DetailResponse = await axiosClient.get(
        `${BASE_URL}/movie/${movie_id}?append_to_response=credits,similar`,
        options
      );
      setMovieData(data);
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch movies detail:", error);
      setLoading(false);
    }
  };

  const addToWatchList = (id: number) => {
    try {
      const params = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          media_type: "movie",
          media_id: id,
          watchlist: true,
        }),
      };

      fetch(`${BASE_URL}/account/${ACCOUNT_ID}/watchlist`, params)
        .then((res) => res.json())
        .then((res) => Alert.alert("Add To Watchlist", res.status_message))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        setLoading(true);
        const { data } = await axiosClient.get(
          `${BASE_URL}/configuration/languages`,
          options
        );
        const _origin = movieData?.original_language;
        const filterLan = data.filter(
          (val: Language) => val.iso_639_1 === _origin
        );
        setLanguage(filterLan[0].english_name);
        setLoading(false);
      } catch (error) {}
    };

    if (movieData) {
      fetchLanguages();
    }
  }, [movieData]);

  useEffect(() => {
    fetchMovieDetail();
  }, [route.params?.movie_id]);

  const onGoBack = () => {
    navigation.goBack();
  };

  return {
    movieData,
    loading,
    onGoBack,
    addToWatchList,
    language,
  };
};
