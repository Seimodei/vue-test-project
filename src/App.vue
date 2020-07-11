<template>
  <v-app class="app">
    <v-main class="content">
      <Loader />
      <Nav />
      <v-container tag="div" class="d-flex justify-center drag" ref="draggableElement">
        <router-view></router-view>
      </v-container>
      <v-row justify="center" class="font-weight-bold mt-15 date">
        <span>Last updated:</span>
        <span class="updated-date ml-3">{{ updated }}</span>
      </v-row>
      <div 
        class="d-flex justify-center mt-5 pb-16 font-weight-bold  disclaimer"
      >
        <span>{{ disclaimer }}</span>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { gsap, Draggable } from 'gsap/all';
import Nav from './components/Nav';
import Loader from './components/Loader';

export default {
  name: 'App',

  components: {
    Nav,
    Loader
  },

  data: () => ({
    
  }),

  methods: {
    ...mapActions([
      'fetchChartData'
    ])
  },

  computed: {
    ...mapGetters(['disclaimer', 'updated'])
  },

  created() {
    this.fetchChartData();
  },

  mounted() {
    gsap.registerPlugin(Draggable);
    const { draggableElement } = this.$refs;

    Draggable.create(draggableElement, {
      type: "x,y"
    })
  }
};
</script>

<style lang="scss">
  @import './sass/variables.scss';
  @import './sass/mixins.scss';


  .app {
    font-family: $body-font-family;
    font-size: $font-size-root;
    font-weight: $font-weight-root;

    a {
      text-decoration: none;
    }

    .content {
      @include chartWrapperDefault;

      background-color: $app-background-color;
      color: $main-color;

      .date {
        font-size: 85%;
        text-align: center;

        .updated-date {
          color: $purple-color;
        }
      }

      .disclaimer {
        font-size: 75%;
        text-align: center;
        padding: 0px 10px;
      }
    }
  }
</style>
