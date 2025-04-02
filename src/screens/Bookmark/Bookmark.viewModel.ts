import { useEffect, useState } from "react";
import { axiosClient } from "../../core/api/axiosClient";
import { ACCOUNT_ID, BASE_URL } from "../../core/api/config";
import { IBookmarkScreenProps } from "./Bookmark.type";
import { WatchListMovie, WatchListResponse } from "../../core/models/WatchListResponse";
export const useViewModel = ({ navigation, route }: IBookmarkScreenProps) => {
  const [data, setData] = useState<WatchListMovie[]>();

  const fetchBookmarkList = async () => {
    try {
      const { data } = await axiosClient.get(
        `${BASE_URL}/account/${ACCOUNT_ID}/watchlist/movies`
      );
      setData(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    fetchBookmarkList();
  }, []);

  return {
    data,
  };
};
