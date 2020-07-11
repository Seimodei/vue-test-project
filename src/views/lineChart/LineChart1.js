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
        backgroundColor: '#f0f1fb',
        borderColor: '#8a8bdc',
        borderWidth: 3
      }]
    }, {
      ...options,
      elements: {
        point: {
          radius: 0
        }
      }
    });
  },
};
