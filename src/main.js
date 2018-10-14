import Chart from 'chart.js';
import numeral from 'numeral';

new Chart(document.getElementById('my-chart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: '2018 Sales',
        borderColor: 'rgba(50, 115, 220, 0.5)',
        backgroundColor: 'rgba(50, 115, 220, 0.1)',
        data: [300, 700, 450, 750, 450]
      },
      {
        label: '2017 Sales',
        borderColor: 'rgba(255, 56, 96, 0.5)',
        backgroundColor: 'rgba(255, 56, 96, 0.1)',
        data: [600, 550, 750, 250, 700]
      }
    ]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          callback: value => numeral(value).format('$0,0')
        }
      }]
    },
    tooltips: {
      mode: 'index',
      callbacks: {
        label(tooltipItem, data) {
          // Get the dataset label.
          const label = data.datasets[tooltipItem.datasetIndex].label;

          // Format the y-axis value.
          const value = numeral(tooltipItem.yLabel).format('$0,0');

          return `${label}: ${value}`;
        }
      }
    }
  }
});
