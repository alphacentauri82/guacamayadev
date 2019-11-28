<template>
  <section>
    <slot name="header" />
    <h2>Keynote</h2>
    <v-row
      cols="6"
      md="2"
      lg="4"
      justify="center"
    >
      <v-col
        v-for="presenter in presenters"
        :key="presenter.name"
        style="max-width: 300px"
        height="300px"
        text-align="center"
        justify="center"
        v-if="presenter.keynote"
      >
        <VVPresenterCard :presenter="presenter" />
      </v-col>
    </v-row>
    <h2>Speakers</h2>
    <v-row
      cols="6"
      md="2"
      lg="4"
      justify="center"
    >
      <v-col
        v-for="presenter in presenters"
        :key="presenter.name"
        style="max-width: 300px"
        height="300px"
        text-align="center"
        justify="center"
        v-if="!presenter.keynote"
      >

        <VVPresenterCard :presenter="presenter" />
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { PRESENTERS_DATA } from '../../constants';
import VVPresenterCard from './PresenterCard';

export default {
  components: { VVPresenterCard },
  computed: {
    presenters() { return PRESENTERS_DATA || []; }
  }
}
</script>
