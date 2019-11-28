<template>
  <v-layout
    class="ve-container"
    fill-height
  >
    <v-container
      class="indexed"
      fill-height
    >
      <v-card height="100%">
        <img
          src="~/assets/images/error.jpg"
          alt="Caperufrino y Lobo`"
        >
        <v-card-title>
          <h3 class="ve-subheading font-lato text-xs-center">{{ $t("title") }}</h3>
          <p class="text-xs-center ve-content title">{{ $t("subtitle") }}</p>
        </v-card-title>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script>
import messages from '../assets/translations/404';
export default {
  props: ['error'],
  layout: 'default',
  i18n: {
    messages
  }
};
</script>

<style scoped lang="scss">
  img {
    width: 100%;
  }

  .ve-container {
    padding-bottom: 0;
  }

  .container.indexed {
    padding-top: 0;
    padding-bottom: 0;
  }

  h3,
  p {
    width: 100%;
  }
</style>
