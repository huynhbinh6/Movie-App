import { AxiosResponse } from "axios";

export interface Detail {
  id: number | undefined;
  adult?: boolean;
  backdrop_path?: string;
  genres?: object[];
  belongs_to_collection?: string;
  budget?: number;
  homepage?: string;
  imdb_id?: string;
  origin_country?: string[];
  original_language?: string;
  original_title?: string;
  overview: string | undefined;
  popularity?: number;
  poster_path: string | undefined;
  production_companies?: object[];
  production_countries?: object[];
  revenue?: number;
  runtime?: number | undefined;
  spoken_languages?: object[];
  status?: string;
  tagline?: string;
  release_date: string | undefined;
  title: string | undefined;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export type DetailResponse = AxiosResponse<Detail>;
