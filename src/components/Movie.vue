<template>
  <div class="mb-5 text-info">
    <p>{{movieData.title}}</p>
    <img
      :src="'https://image.tmdb.org/t/p/w500/'+movieData.poster_path"
      alt
      width="100px"
      @click="setActive"
    />
  </div>
</template>

<script>
export default {
  props: ["movieData"],
  methods: {
    setActive() {
      this.$store.dispatch("setActiveMovie", this.movieData);
    }
  }
};
</script>

<style>
img {
  cursor: pointer;
}
</style>