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
        fill: false,
        data: this.chartData.datasets[0].data,
        stepped: true,
        backgroundColor: '#8a8bdc',
        borderColor: '#8a8bdc',
        borderWidth: 1
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
