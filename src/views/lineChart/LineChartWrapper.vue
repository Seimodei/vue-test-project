<template>
  <div class="wrapper">
    <LineChart
      :styles="chartStyles"
      :chart-data="allChartData"
    />
  </div>
</template>

<script>
import LineChart from './LineChart';
import { mapGetters } from 'vuex';

export default {
  name: 'LineChartWrapper',
  components: { LineChart },

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