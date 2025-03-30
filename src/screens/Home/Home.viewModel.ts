import { useEffect, useState } from "react";
import { axiosClient } from "../../core/api/axiosClient";
import { API_KEY, BASE_URL } from "../../core/api/config";
import { Movie, MovieResponse } from "../../core/models/MovieResponse";
import { SelectedItem } from "../../components/MovieFilter";
import { useAppNavigator } from "../../routes/AppNavigator.handler";
import { IHomeScreenProps } from "./Home.type";

export const useViewModel = ({ navigation, route }: IHomeScreenProps) => {
  const [typeSelected, setSelected] = useState<SelectedItem>({
    id: "now_playing",
    title: "Now Playing",
  });
  const [sortSelected, setSortSelected] = useState<SelectedItem>({
    id: "title.asc",
    title: "By alphabetical order",
  });
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { navigate } = useAppNavigator();

  const typeFilter = [
    { id: "now_playing", title: "Now Playing" },
    { id: "upcoming", title: "Upcoming" },
    { id: "popular", title: "Popular" },
  ];

  const sortData = [
    { id: "title.asc", title: "By alphabetical order" },
    { id: "vote_average.desc", title: "By rating" },
    { id: "primary_release_date.desc", title: "By release date" },
  ];

  const fetchMovies = async () => {
    try {
      setIsLoading(true);

      const { data }: MovieResponse = await axiosClient.get(
        `${BASE_URL}/movie/${typeSelected.id}?api_key=${API_KEY}&page=${page}&sort_by=${sortSelected.id}`
      );
      setMovies(data.results);
      // console.log(data.results);

      setTotalPage(data.total_pages);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [typeSelected, sortSelected]);

  const onSelectedType = (item: SelectedItem) => {
    setSelected(item);
  };

  const onSelectedSort = (item: SelectedItem) => {
    setSortSelected(item);
  };
  const onChangeSearchText = (text: string) => {
    setSearchText(text);
  };

  const onSearchMovie = async () => {
    try {
      setIsLoading(true);
      const { data }: MovieResponse = await axiosClient.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchText}`
      );

      setMovies(data.results);
      setTotalPage(data.total_pages);
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to fetch movies:", error);
    }
  };

  const toMovieDetail = (id: number) => {
    navigation.navigate("DetailScreen", { movie_id: id });
  };

  return {
    typeFilter,
    sortData,
    typeSelected,
    onSelectedType,
    sortSelected,
    onSelectedSort,
    searchText,
    onChangeSearchText,
    toMovieDetail,
    onSearchMovie,
    isLoading,
    movies,
  };
};
