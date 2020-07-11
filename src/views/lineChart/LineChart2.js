import { Line, mixins } from 'vue-chartjs';
import { options } from '../../shared.const';

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['options, chartData'],

  mounted() {
    this.renderChart({
      ...this.chartData,
      datasets: [{
        data: this.chartData.datasets[0].data,
        fill: true,
        backgroundColor: '#eccc68',
        borderColor: '#6D6ED3',
        borderDash: [2, 2],
        borderWidth: 2
      }]
    }, {
      ...options,
      elements: {
        point: {
          radius: 2
        }
      }
    });
  },
};
