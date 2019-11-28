<template>
  <v-app-bar
    class="ve-toolbar"
    color="primary darken-1"
    dark
    fixed
    app
  >
    <nuxt-link
      tag="v-toolbar-title"
      class="ve-logo"
      to="/"
    >
      <img
        src="~/assets/images/logo.png"
        alt="Logo"
      /> Devs4Venezuela 2020
    </nuxt-link>
    <div class="spacer" />
    <v-toolbar-title class="ve-logo">
      <a
        href="#"
        class="ve-logo"
        style="color: white; font-size: 16px;"
      >
        Código de Conducta
      </a>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
  //
export default {}
</script>

<style scoped lang="scss">
.ve-logo {
  display: flex;
  align-items: center;
  margin: 0;
  cursor: pointer;
  img {
    max-width: 40px;
    margin-right: 10px;
  }
}

.ve-toolbar {
  z-index: 5;
}
</style>
