export const API_URL = "https://api.themoviedb.org/3";
export const API_KEY = "03de48f66303824c443b36741744feac";

export function buscaPrincipaisFilmes(page, minVotes) {
  return {
    url: `${API_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=pt-BR&sort_by=vote_average.desc&vote_count.gte=${minVotes}&language=pt-BR&page=${page}`,
  };
}
