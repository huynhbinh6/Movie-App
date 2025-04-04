import { AxiosResponse } from "axios";
import { MovieResponse } from "./MovieResponse";

export type CastMember = {
  id: number;
  name: string;
  character: string;
  profile_path?: string;
};

export type CrewMember = {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path?: string;
};

export type Credits = {
  cast: CastMember[];
  crew: CrewMember[];
};

export type Genre = {
  id: number;
  name: string;
};

export type ProductionCompany = {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1: string;
  name: string;
};

export type SpokenLanguage = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type MovieSimilarItem = {
  id: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export type MovieSimilar = {
  page: number;
  results: MovieSimilarItem[];
  total_pages: number;
  total_results: number;
};

export type MovieStatus = {
  id: number;
  favorite: boolean;
  rated: boolean;
  watchlist: boolean;
};


export type Movie = {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: null | object;
  budget?: number;
  credits: Credits;
  genres: Genre[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  origin_country?: string[];
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity?: number;
  poster_path: string;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  release_date: string;
  revenue?: number;
  runtime: number;
  spoken_languages?: SpokenLanguage[];
  status: string;
  tagline: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count?: number;
  similar?: MovieSimilar;
};

export type DetailResponse = AxiosResponse<Movie>;
export type MovieStatusResponse = AxiosResponse<MovieStatus>;
