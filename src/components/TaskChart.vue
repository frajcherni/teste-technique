<template>
  <div class="task-chart">
    <canvas ref="chartCanvas"></canvas>

    <!-- Filtering Options -->
    <div class="filters">
      <label for="chartType">{{ t('chart.chartTypeLabel') }}</label>
      <select v-model="chartType" @change="updateChart">
        <option v-for="option in chartOptions" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Chart from 'chart.js/auto';
import i18n from '../traduction/i18n'

export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const chartCanvas = ref(null);
    let chartInstance = null;
    const chartType = ref('bar'); // Default chart type
    const { t } = useI18n(); // Destructure t function from useI18n

    // Chart options based on translations
    const chartOptions = [
      { value: 'bar', label: t('chart.barChart') },
      { value: 'line', label: t('chart.lineChart') },
      { value: 'pie', label: t('chart.pieChart') }
    ];

    // Create the chart when the component is mounted
    onMounted(() => {
      if (chartCanvas.value) {
        createChart();
      }
    });

    const updateChart = () => {
      if (chartInstance) {
        chartInstance.destroy(); // Destroy the current instance of the chart
      }
      createChart();
    };

    // Function to create the chart
    const createChart = () => {
      const data = prepareChartData();
      chartInstance = new Chart(chartCanvas.value.getContext('2d'), {
        type: chartType.value,
        data: data
      });
    };

    // Function to prepare chart data based on tasks
    const prepareChartData = () => {
      const completedTasks = props.tasks.filter(task => task.completed).length;
      const pendingTasks = props.tasks.length - completedTasks;

      return {
        labels: [t('chart.completedTasks'), t('chart.pendingTasks')],
        datasets: [{
          label: t('chart.taskDistribution'),
          backgroundColor: ['#66bb6a', '#ffcc80'],
          data: [completedTasks, pendingTasks]
        }]
      };
    };

    watch(() => props.tasks, () => {
      if (chartInstance) {
        chartInstance.data = prepareChartData();
        chartInstance.update();
      }
    }, { deep: true });

    watch(() => i18n.global.locale.value, () => {
      if (chartInstance) {
        chartInstance.data.labels = [t('chart.completedTasks'), t('chart.pendingTasks')];
        chartInstance.data.datasets[0].label = t('chart.taskDistribution');
        chartInstance.update();
      }
    });

    return {
      chartCanvas,
      chartType,
      chartOptions,
      updateChart,
      t
    };
  }
};
</script>

<style scoped>
.task-chart {
  text-align: center;
  margin-top: 20px;
}

.filters {
  margin-top: 10px;
}

.filters label {
  margin-right: 10px;
}

.filters select {
  padding: 5px;
  font-size: 14px;
}
</style>
