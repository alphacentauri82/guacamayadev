<template>
  <v-row
    no-gutters
    justify-center
    align-center
  >
    <v-col no-gutters>
      <VEHeroImageContainer
        class="text-center header-image"
        :image="HEADER_IMAGE"
      >
        <div class="content">
          <VELogo class="homepage-logo" />
          <h1 class="ve-heading where-header">🇻🇪 GUACAMAYA DEV ONLINE 🇻🇪 </h1>
          <h1 class="ve-subheading when-header">Enero, 2020 - Via Youtube Stream</h1>
          <h2
            class="ve-subtitle"
            style="margin-top: 10px;"
          >El primer evento online de su categoría!!.</h2>
        </div>
      </VEHeroImageContainer>
      <section class="ve-cta-buttons">
        <VECtaButton
          link
          :href="REGISTRATION_URL"
          target="_blank"
        >Registro</VECtaButton>
        <VECtaButton
          link
          :href="CFP_URL"
          target="_blank"
        >CFP</VECtaButton>
        <VECtaButton
          link
          :href="FAQ_URL"
        >FAQ</VECtaButton>
      </section>
      <v-col
        cols="8"
        class="content-container"
      >
        <VEPresenters>
          <template #header>
            <h1>Conoce a nuestros speakers!!</h1>
          </template>
        </VEPresenters>
        <VETweetTimeline profile="DevGuacamaya">
          <template #header>
            <h1>ALGO AQUI</h1>
            <h2>Que dice la gente!</h2>
          </template>
        </VETweetTimeline>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import VEHeroImageContainer from '../components/HeroImageContainer'
import VECtaButton from '../components/CtaButton'
import VELogo from '../components/Logo'
import VEPresenters from '../components/presenters/Presenters'
import VETweetTimeline from '../components/TweetTimeline'
import { REGISTRATION_URL, CFP_URL, FAQ_URL, HEADER_IMAGE } from '../constants'

export default {
  components: {
    VEHeroImageContainer,
    VECtaButton,
    VELogo,
    VETweetTimeline,
    VEPresenters
  },
  computed: {
    HEADER_IMAGE() {
      return HEADER_IMAGE
    },
    REGISTRATION_URL() {
      return REGISTRATION_URL
    },
    CFP_URL() {
      return CFP_URL
    },
    FAQ_URL() {
      return FAQ_URL
    },
    SPONSOR_URL() {
      return SPONSOR_URL
    }
  }
}
</script>

<style lang="scss">
h1 {
  font-size: 2.7rem;
}
h2 {
  font-size: 2rem;
}

h1,
h2 {
  font-weight: 500;
  font-family: 'Futura-CondensedMedium', 'Helvetica Neue', Arial, sans-serif !important;
  color: #34485d;
  text-align: center;
}

.header-image {
  width: 100%;
  height: 60vh;
  min-height: 490px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  div {
    color: #fff;
  }
}

.content {
  padding-top: 2vh;
}

.content-container {
  max-width: 90vw;
  margin: 20px auto 0;
  @media (max-width: 800px) {
  }

  @media (min-width: 1200px) {
    max-width: 880px;
  }

  & > section:not(:first-child) {
    margin: 20px auto 0;
  }
}

.homepage-logo {
  $width: 150px;

  width: $width;

  // and the fox tail throws it off by 20%
  margin-left: -#{$width * 0.2};
}

.ve-subtitle {
  font-family: 'Futura-MediumItalic', 'Helvetica Neue', Arial, sans-serif;
  font-style: italic;
  font-weight: 400;
  max-width: 390px;
  font-size: 1.2rem;
  margin: 20px auto 0;
}

.ve-heading.where-header {
  font-size: 4.2rem;
}

.ve-subheading.when-header {
  font-size: 2.1rem;
}

.ve-heading,
.ve-subheading {
  &.when-header,
  &.where-header {
    margin-bottom: 25px;
    font-family: 'Futura-CondensedMedium', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
  }
}

.ve-cta-buttons {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  max-width: 830px;
  margin: -80px auto 0;
}
</style>
