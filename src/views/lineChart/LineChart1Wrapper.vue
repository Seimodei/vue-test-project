<template>
  <div class="wrapper">
    <LineChart1
      :styles="chartStyles"
      :chart-data="allChartData"
    />
  </div>
</template>

<script>
import LineChart1 from './LineChart1';
import { mapGetters } from 'vuex';

export default {
  name: 'LineChart1Wrapper',
  components: { LineChart1 },

  data:() => ({
    
  }),

  computed: {
    chartStyles() {
      return {
        height: '550px'
      }
    },
    ...mapGetters(['allChartData'])
  }
}
</script>