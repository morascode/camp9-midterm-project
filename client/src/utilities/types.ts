export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
};

export type MovieDbResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type TicketProps = {
  movieTitle: string;
  movieTime: string;
  movieDate: string;
};

export type MovieDetailDbResponse = {
  title: string;
  backdrop_path: string;
  release_date: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
  runtime: number;
  vote_average: number;
  overview: string;
  imdb_id: string;
  credits: {
    id: number;
    cast: TMDBCast[];
    crew: TMDBCrew[];
  };
};

// types for the credits page
export type TMDBCast = {
  id: number;
  name: string;
  character: string;
};

export type TMDBCrew = { id: number; name: string; job: string };

export type MovieDbCreditsResponse = {
  id: number;
  cast: TMDBCast[];
  crew: TMDBCrew[];
};

export type PersonImagesRequest = {
  id: number;
  profiles: { file_path: string }[];
};

export type SignupUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};