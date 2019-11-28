<template>
  <div style="position: relative; pointer-events: none;">
    <!-- transparent hero image so you can darken/lighten the image for IE11 support -->
    <div class="hero-image" :style="{ backgroundImage }"/>
    <!-- @slot The content to display on top of the Image -->
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  /**
   * Add a color behind a large image as the background for some content
   * This component exists because filter isn't browser compat.
   */
  export default {
    props: {
      image: { type: String },
    },
    computed: {
      backgroundImage() { return `url(${this.image})` }
    }
  }
</script>
<style scoped lang="scss">
  %full-height { height: 100%; }
  %full-width { width: 100%; }

  .content-wrapper {
    @extend %full-width;
    @extend %full-height;
    position: relative;
    z-index: 1; // on top of the image
  }

  .hero-image {
    @extend %full-width;
    @extend %full-height;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    position: absolute;
    left: 0;

    z-index: 0; // behind the content
  }
</style>
