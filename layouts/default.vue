<template>
  <v-app>
    <VVHeader />
    <v-content class="ve-main">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import VVHeader from '../components/Header';

export default {
  components: { VVHeader },
  data() { return {}; }
}
</script>

<style lang="scss">
</style>
