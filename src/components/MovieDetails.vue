<template>
  <div>
    <h2>{{details.title}}</h2>
    <img :src="'https://image.tmdb.org/t/p/w500/'+details.poster_path" width="250rem" />
    <p>{{details.overview}}</p>
    <i>{{details.release_date}}</i>
  </div>
</template>

<script>
export default {
  computed: {
    details() {
      return this.$store.state.activeMovie;
    }
  }
};
</script>

<style>
</style>