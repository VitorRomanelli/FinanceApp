<template>
  <div class="chart ma-2">
    <canvas id="bar"></canvas>
  </div>
</template>

<style scoped>
.chart {
  width: 50%;
}

@media (max-width: 850px) {
  .chart {
    width: 100%;
  }
}
</style>

<script>
import Chart from 'chart.js';

export default {
  name: 'HorizontalChart',

  mounted() {
    this.data = JSON.parse(localStorage.getItem('data'));
    const taxes = JSON.parse(localStorage.getItem('taxes'));

    const ctx = document.getElementById('bar');

    this.config.data.labels.push(...taxes.map((tax) => tax.name));

    this.config.data.datasets.push({
      label: 'Taxas',
      data: taxes.map((tax) => tax.tax),
      backgroundColor: [...taxes.map((tax) => tax.background)],
    });
    this.chart = new Chart(ctx, this.config);
  },

  data: () => ({
    chart: null,
    data: null,
    config: {
      type: 'horizontalBar',
      data: {
        labels: [],
        datasets: [],
      },
      options: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    },
  }),
};
</script>
