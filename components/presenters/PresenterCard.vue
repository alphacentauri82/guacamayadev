<template>
  <v-card @click="openPresenterLink"
          max-width="300px" height="100%" align="center">
    <v-img :src="presenter.photo" :alt="`Photo of {{ presenter.name }}`"></v-img>
    <p class="title">{{ presenter.name }}</p>
    <v-card-subtitle>{{ presenter.talkTitle }}</v-card-subtitle>
  </v-card>
</template>

<script>
  export default {
    methods: {
      openPresenterLink() { window.open(this.presenter.twitterUrl, '_blank'); }
    },
    props: {
      presenter: { type: Object, required: true }
    },
  }
</script>

<style scoped>
.title {
  text-align:center
}
</style>
