<template>
  <div class="chartContainer">
    <Line v-if="loaded" :chart-data="chartData" :username="username" />
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  PointElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "LineChart",
  components: { Line },
  data: () => ({
    loaded: false,
    chartData: null,
  }),
  props: {
    username: String,
  },
  async mounted() {
    this.loaded = false;
    if (this.username != null) {
      try {
        const url = `http://localhost:4000/api/resources/apiusers/${this.username}/duration-data-chart`;
        const response = await this.axios.get(url);
        this.chartData = response.data;
        this.loaded = true;
      } catch (e) {
        console.error(e);
      }
    } else {
      console.log("Petición no hecha por ID nulo");
    }
  },
};
</script>