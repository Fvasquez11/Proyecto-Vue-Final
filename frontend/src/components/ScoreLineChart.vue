<template>
  <div class="chartContainer">
    <Line v-if="loaded" :chart-data="chartData" userID="id" />
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
    userID: Number,
  },
  async mounted() {
    this.loaded = false;
    console.log("score graph called")
    if (this.userID != null) {
      try {
        const url = `http://localhost:4000/api/resources/apiusers/${this.userID}/score-data-chart`;
        const response = await this.axios.get(url);
        this.chartData = response.data;
        console.log(this.chartData);
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