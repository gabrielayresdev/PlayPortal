export const API_URL = "https://api.themoviedb.org/3";
export const API_KEY = "03de48f66303824c443b36741744feac";

// Retorna url para os filmes mais bem avaliados
export function buscaPrincipaisFilmes(page, minVotes) {
  return {
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=pt-BR&sort_by=vote_average.desc&vote_count.gte=${minVotes}&language=pt-BR&page=${page}`,
  };
}

// Retorna url para ps filmes mais populares
export function buscaFilmesPopulares(page) {
  return {
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&language=pt-BR&page=${page}`,
  };
}

// Retorna url para as séries mais populares
export function buscaSeriesPopulares(page, minVotes) {
  return {
    url: `${API_URL}//discover/tv?api_key=${API_KEY}&include_adult=false&include_null_first_air_dates=false&sort_by=popularity.desc&vote_count.gte=${minVotes}&language=pt-BR&page=${page}`,
  };
}

// Retorna url para busca de um show por um nome específico
export function buscaShowPorNome(page, nome) {
  return {
    url: `${API_URL}/search/movie?api_key=${API_KEY}&query=${nome}&page=${page}`,
  };
}
