import axios from 'axios';

// url filmes em cartaz
// https://api.themoviedb.org/3

//movie/now_playing ?api_key=975ed83418e74fd0e441a39fadc3a71a&language=pt-BR&page=1

export const key = '975ed83418e74fd0e441a39fadc3a71a'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;