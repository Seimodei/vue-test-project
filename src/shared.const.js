export const options = {
  responsive: true, 
  maintainAspectRatio: false,
  title: {
    display: true,
    text: 'BITCOIN PRICE INDEX'
  },
  legend: {
    display: false
  },
  tooltips: {
    callbacks: {
      label: (tooltipItem) => {
        const label = `BP: $${tooltipItem.value}`;
        return label;
      },
      labelColor: () => {
        return {
          borderColor: '#eccc68',
          backgroundColor: '#eccc68'
        };
      },
      labelTextColor: () => {
        return '#eccc68';
      }
    }
  },
  scales: {
    xAxes: [{
      type: 'time',
      time: {
        unit: 'month'
      },
      gridLines: {
        borderDash: [2,2],
        color: "#a4b0be"
      },
      ticks: {
        fontColor: "#6D6ED3"
      }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true,
        fontSize: 15,
        fontColor: "#1F2B4B"
      },
      gridLines: {
        borderDash: [2,2],
        color: "#a4b0be"
      }
    }]
  }
}