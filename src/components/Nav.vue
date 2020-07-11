<template>
  <v-container tag="div" class="navigation">
    <v-col>
      <v-row justify="center">
        <a href="https://www.ngpltd.co.uk/" class="logo">
          <span>Northern</span>
          <span>Gas & Power</span>
        </a>
      </v-row>
    </v-col>
    <v-col class="mt-5">
      <v-row justify="center" class="d-menu">
        <router-link 
          v-for="link in links" 
          :key="link.name" 
          :to="link.url" 
          exact
        >
          <div class="d-flex flex-column justify-center align-center">
            <v-btn 
              :ripple="false" 
              text 
              :color="link.url === $route.path ? '#6D6ED3' : '#1F2B4B'"
            >
              {{link.name}}
            </v-btn>
            <span class="active"></span>
          </div>
        </router-link>
      </v-row>
      <v-col justify="center" class="m-menu">
        <div class="menu-icon d-flex justify-center" @click="toggleMenu">
          <v-icon large :color="open ? '#6D6ED3' : '#1F2B4B'">mdi-dialpad</v-icon>
        </div>
        <div class="menu-links" v-if="open">
          <router-link v-for="link in links" :key="link.name" :to="link.url" exact>
            <div class="d-flex flex-column justify-center align-center mt-5">
              <v-btn 
                :ripple="false" 
                text 
                :color="link.url === $route.path ? '#6D6ED3' : '#1F2B4B'"
                @click.native="toggleMenu"
              >
                {{link.name}}
              </v-btn>
              <span class="active"></span>
            </div>
          </router-link>
        </div>
      </v-col>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    name: 'Nav',

    data: () => ({
      links: [
        { name: 'Bar Chart', url: '/' },
        { name: 'Line Chart', url: '/line-chart' },
        { name: 'Line Chart 1', url: '/line-chart-1' },
        { name: 'Line Chart 2', url: '/line-chart-2' },
        { name: 'Radar Chart', url: '/radar-chart' }
      ],
      open: false
    }),

    methods: {
      toggleMenu () {
        this.open = !this.open
      }
    }
  }
</script>

<style lang="scss">
@import '../sass/variables.scss';
@import '../sass/mixins.scss';

  .navigation {
    color: $main-color;

    @include loader;


    a {
      .active {
        display: block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: $purple-color;
        transform: translateY(20px);
        opacity: 0;
        transition: all .15s;
      }

      &.router-link-active,
      &.router-link-exact-active {
        .active {
          transform: translateY(0px);
          opacity: 1;
        }
      }
    }

    .d-menu {
      @include mQ (815px) {
        display: none;
      }
    }

    .m-menu {
      display: none;

      .menu-icon {
        cursor: pointer;
      }

      @include mQ (815px) {
        display: block;
      }
    }
  }
</style>
