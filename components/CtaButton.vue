<template>
  <v-btn
    v-bind="$attrs"
    color="secondary"
    class="ve-button"
    raised
    x-large
    link
  >
    <slot></slot>
  </v-btn>
</template>

<style scoped lang="scss">
  .ve-button {
    font-family: "Futura-CondensedMedium", "Helvetica Neue", Arial, sans-serif;
    text-transform: initial;
    font-size: 1.7rem;
    letter-spacing: normal;

    /* Bigger buttons than usual. Override specificity of vuetify */
    &.ve-button.ve-button.ve-button {
      padding: 15px 35px;
      height: unset;
    }
  }
</style>
