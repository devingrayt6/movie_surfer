import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const _api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query=',
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    activeMovie: [],
    searchQuery: 'movies'
  },
  mutations: {
    getMovies(state, movies) {
      state.movies = movies
    },
    setActiveMovie(state, movie) {
      state.activeMovie = movie
    },
    searchMovies(state, searchQuery) {
      state.searchQuery = searchQuery;
    }
  },
  actions: {
    async getMovies({ commit, dispatch }) {
      try {
        let res = await _api.get(this.state.searchQuery);
        commit('getMovies', res.data.results)
      } catch (error) {
        console.error(error)
      }
    },
    setActiveMovie({ commit }, movie) {
      commit("setActiveMovie", movie)
    },
    async searchMovies({ commit, dispatch }, searchQuery) {
      commit("searchMovies", searchQuery);
      dispatch("getMovies")
    }
  },
  modules: {
  }
})
