<template>
  <div>
    <line-chart
      :width="500"
      :height="300"
      :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May']"
      :datasets="$options.datasets"
      :options="$options.options"
    ></line-chart>
  </div>
</template>

<script>
import numeral from 'numeral';
import LineChart from './LineChart';

const datasets = [
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
];

const options = {
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
        const label = data.datasets[tooltipItem.datasetIndex].label;
        const value = numeral(tooltipItem.yLabel).format('$0,0');

        return `${label}: ${value}`;
      }
    }
  }
};

export default {
  name: 'monthly-sales-chart',
  datasets,
  options,
  components: {
    LineChart
  }
}
</script>
