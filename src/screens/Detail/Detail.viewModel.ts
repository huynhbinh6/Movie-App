import { useEffect, useMemo, useState } from "react";
import { axiosClient } from "../../core/api/axiosClient";
import { API_KEY, BASE_URL } from "../../core/api/config";
import { IDetailScreenProps } from "./Detail.type";
import { Movie, DetailResponse } from "../../core/models/DetailResponse";
import { Language } from "../../core/models/LanguageResponse";

export const useViewModel = ({ navigation, route }: IDetailScreenProps) => {
  const [movieData, setMovieData] = useState<Movie>();
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState<string>("");

  const fetchMovieDetail = async () => {
    try {
      setLoading(true);
      const movie_id = route.params?.movie_id;
      const { data }: DetailResponse = await axiosClient.get(
        `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&append_to_response=credits,similar`
      );
      setMovieData(data);
      console.log(data);
      
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch movies detail:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const { data } = await axiosClient.get(
          `${BASE_URL}/configuration/languages?api_key=${API_KEY}`
        );
        const _origin = movieData?.original_language;
        const filterLan = data.filter(
          (val: Language) => val.iso_639_1 === _origin
        );
        setLanguage(filterLan[0].english_name);
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
    language,
  };
};
