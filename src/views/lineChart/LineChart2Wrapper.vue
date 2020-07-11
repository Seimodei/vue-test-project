<template>
  <div class="wrapper">
    <LineChart2
      :styles="chartStyles"
      :chart-data="allChartData"
    />
  </div>
</template>

<script>
import LineChart2 from './LineChart2';
import { mapGetters } from 'vuex';

export default {
  name: 'LineChart1Wrapper',
  components: { LineChart2 },

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