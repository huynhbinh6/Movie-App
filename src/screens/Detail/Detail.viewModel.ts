import { useEffect, useState } from "react";
import { axiosClient } from "../../core/api/axiosClient";
import { API_KEY, BASE_URL } from "../../core/api/config";
import { IDetailScreenProps } from "./Detail.type";
import { Movie, DetailResponse } from "../../core/models/DetailResponse";

export const useViewModel = ({ navigation, route }: IDetailScreenProps) => {
  const [movieData, setMovieData] = useState<Movie>();
  const [loading, setLoading] = useState(false);
  const fetchMovieDetail = async () => {
    try {
      setLoading(true);
      const movie_id = route.params?.movie_id;
      const { data }: DetailResponse = await axiosClient.get(
        `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&append_to_response=credits,similar`
      );
      setMovieData(data);
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch movies detail:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [route.params?.movie_id]);

  const onGoBack = () => {
    navigation.goBack();
  }


  return {
    movieData,
    loading,
    onGoBack
  };
};
