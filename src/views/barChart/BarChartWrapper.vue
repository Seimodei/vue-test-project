<template>
  <div class="wrapper">
    <BarChart
      :styles="chartStyles"
      :chart-data="allChartData"
    />
  </div>
</template>

<script>
import BarChart from './BarChart';
import { mapGetters } from 'vuex';


export default {
  name: 'BarChartWrapper',
  components: { BarChart },

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