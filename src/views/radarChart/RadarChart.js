import { PolarArea, mixins } from 'vue-chartjs';

export default {
  extends: PolarArea,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },

  mounted() {
    this.renderChart({
      ...this.chartData,
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        data: this.chartData.datasets[0].data,
        backgroundColor: '#8a8bdc',
        borderColor: '#fff',
        borderWidth: 0.25
      }]
    },{
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'right',
      },
      tooltips: {
        enabled: false
      },
      title: {
        display: true,
        text: 'BITCOIN PRICE INDEX'
      },
      scale: {
        ticks: {
          beginAtZero: true
        },
        reverse: false
      },
      animation: {
        animateRotate: false,
        animateScale: true
      }
    });
  },
};
