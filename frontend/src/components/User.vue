<script>
import ScoreLineChart from "@/components/ScoreLineChart.vue";
import DurationLineChart from "@/components/DurationLineChart.vue";
import { useMainStore } from "@/stores/mainStore";
export default {
  components: { ScoreLineChart, DurationLineChart },
  setup() {
    const mainStore = useMainStore();
    return {
      mainStore,
    };
  },
  data() {
    return {
      loaded: false,
      fields: [
        { key: "id", label: "Id", sortable: true },
        { key: "date", label: "Fecha", sortable: true },
        { key: "score", label: "Puntuación", sortable: true },
        { key: "duration", label: "Duración", sortable: true },
      ],
      items: [],
    };
  },
  async mounted() {
    this.loaded = false;

    try {
      const url = `http://localhost:4000/api/resources/apiusers/${this.mainStore.username}/`;
      const response = await this.axios.get(url, {withCredentials: true});
      this.items = response.data;
      console.log(items);
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<template>
  <main>
    <div class="userContent">
      <h3>Bienvenido {{ "user.username" }}</h3>
      <hr />
      <h5 class="selector">Sesiones de estudio</h5>
      <div class="table">
        <b-table striped hover :items="items" :fields="fields"></b-table>
      </div>
      <hr />
      <div class="charts">
        <h5>Puntuaciones de las sesiones de estudio:</h5>
        <br />
        <div class="chart">
          <ScoreLineChart :username="this.mainStore.username" />
        </div>
        <br />
        <br />
        <h5>Duraciones de las sesiones de estudio:</h5>
        <br />
        <div class="chart">
          <DurationLineChart :username="this.mainStore.username" />
        </div>
        <br />
        <br />
        <div class="exitButton">
          <b-button variant="primary" href="/">Salir</b-button>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.userContent {
  justify-content: center;
  padding: 2%;
}

</style>