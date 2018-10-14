<template>
  <div class="box">
    <h2 class="title is-5">Monthly Sales Chart</h2>
    <monthly-sales-chart></monthly-sales-chart>
  </div>
</template>

<script>
import MonthlySalesChart from './components/MonthlySalesChart';

export default {
  name: 'app',
  components: {
    MonthlySalesChart
  }
}
</script>
