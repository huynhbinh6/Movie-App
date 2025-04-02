import { useEffect, useState } from "react";
import { axiosClient } from "../../core/api/axiosClient";
import { ACCOUNT_ID, BASE_URL } from "../../core/api/config";
import { IBookmarkScreenProps } from "./Bookmark.type";
import {
  WatchListMovie,
  WatchListResponse,
} from "../../core/models/WatchListResponse";
export const useViewModel = ({ navigation, route }: IBookmarkScreenProps) => {
  const [data, setData] = useState<WatchListMovie[]>();
  const [sortBy, setSortBy] = useState("vote_average");
  const [orderBy, setOrderBy] = useState("asc");
  const [loading, setLoading] = useState<boolean>(false);
  const [isExpand, setIsExpand] = useState<boolean>(false);

  const fetchBookmarkList = async () => {
    try {
      setLoading(true);
      const { data } = await axiosClient.get(
        `${BASE_URL}/account/${ACCOUNT_ID}/watchlist/movies?sort_by=${sortBy}.${orderBy}`
      );
      setData(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeOrder = () => {
    if (orderBy === "asc") {
      setOrderBy("desc");
    } else {
      setOrderBy("asc");
    }
  };

  const onExpand = () => {
    setIsExpand(!isExpand);
  };

  const onChangeSort = (value: string) => {
    setSortBy(value);
    setIsExpand(false);
  };

  useEffect(() => {
    fetchBookmarkList();
  }, [sortBy, orderBy]);

  return {
    data,
    sortBy,
    orderBy,
    loading,
    isExpand,
    onExpand,
    onChangeOrder,
    onChangeSort,
  };
};
