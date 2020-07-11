<template>
  <div class="loader d-flex justify-center align-center">
    <v-col>
      <v-row justify="center">
        <vue-loaders-ball-scale-multiple color="#6D6ED3" scale="1" />
      </v-row>
      <v-row justify="center">
        <a href="https://www.ngpltd.co.uk/" class="logo">
          <span>Northern</span>
          <span>Gas & Power</span>
        </a>
      </v-row>
    </v-col>
  </div>
</template>

<script>
  import { gsap, Power4 } from 'gsap';
  import 'vue-loaders/dist/vue-loaders.css';
  import Loader from 'vue-loaders/dist/loaders/ball-scale-multiple';

  export default {
    name: 'Loader',

    components: {
      [Loader.component.name]: Loader.component
    },

    mounted: () => {
      gsap.to('.loader', {
        x: '-100%',
        duration: 2,
        delay: 2,
        ease: Power4.easeInOut
      })
    }
  }
</script>

<style lang="scss">
@import '../sass/variables.scss';
@import '../sass/mixins.scss';

  .loader {
    @include loader;

    width: 100vw;
    height: 100vh;
    background-color: $app-background-color;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
  }
</style>
