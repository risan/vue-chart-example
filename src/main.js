import Chart from 'chart.js';

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
          beginAtZero: true
        }
      }]
    }
  }
});
