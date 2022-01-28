const API_KEY = "6942ae65f2845d42771de75d2f946301";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movies/top_rated?api_key${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&genres=99`,
};
export default requests;
