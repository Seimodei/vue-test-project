import { Bar, mixins } from 'vue-chartjs';
import { options } from '../../shared.const';

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['options, chartData'],

  mounted () {
    this.renderChart({
      ...this.chartData,
      datasets: [{
        data: this.chartData.datasets[0].data,
        backgroundColor: '#6D6ED3'
      }]
    }, options)
  }
}