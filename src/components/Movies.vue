<template>
  <div>
    <h1>Movie Surfer</h1>
    <p>
      <input type="text" v-model="searchQuery" />
      {{searchQuery}}
    </p>
    <button class="btn btn-info" @click="searchMovies">Search</button>
    <div class="row">
      <div class="col-12 col-md-6">
        <Movie v-for="(movieObj) in movies" :key="movieObj._id" :movieData="movieObj" />
      </div>
      <div class="col-12 col-md-6">
        <MovieDetails />
      </div>
    </div>
  </div>
</template>

<script>
import Movie from "./Movie";
import MovieDetails from "./MovieDetails";

export default {
  name: "Movies",
  props: {},
  mounted() {
    this.$store.dispatch("getMovies");
  },
  methods: {
    searchMovies() {
      this.$store.dispatch("searchMovies", this.searchQuery);
    }
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  components: {
    Movie,
    MovieDetails
  },
  data() {
    return {
      searchQuery: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
