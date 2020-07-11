<template>
  <div class="wrapper">
    <RadarChart
      :styles="chartStyles"
      :chart-data="allChartData"
    />
  </div>
</template>

<script>
import RadarChart from './RadarChart';
import { mapGetters } from 'vuex';

export default {
  name: 'RadarChartWrapper',
  components: { RadarChart },

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