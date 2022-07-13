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
      selectedUserID: null,
      users: [],
    };
  },
  methods: {
    selectUser(ID) {
      console.log("Seleccionado usuario: " + ID);

    //   try {
    //     const url = `http://localhost:4000/api/resources/apiusers/${ID}/sessions`;
    //     const response = await this.axios.get(url);
    //     this.items = response.data;
    //     this.loaded = true;
    //   } catch (e) {
    //     console.error(e);
    //   }
    },
  },
  async mounted() {
    // this.loaded = false;
    // try {
    //   const url = `http://localhost:4000/api/resources/apiusers`;
    //   const response = await this.axios.get(url);
    //   this.users = response.data;
    //   this.loaded = true;
    // } catch (e) {
    //   console.error(e);
    // }
  },
};
</script>

<template>
  <main>
    <div class="adminUserContent">
      <h3>Bienvenido Administrador</h3>
      <hr />
      <div class="selector">
        <div><h5>Seleccione usuario:</h5></div>
        <div>
          <b-form class="B-Form" @submit.prevent="selectUser(selectedUserID)">
            <b-form-row>
              <b-col cols="10"
                ><b-form-select
                  v-model="selectedUserID"
                  :options="users"
                ></b-form-select
              ></b-col>
              <b-col cols="2"
                ><b-button type="submit" variant="outline-primary"
                  >Seleccionar</b-button
                ></b-col
              >
            </b-form-row>
          </b-form>
        </div>
      </div>
      <div class="table">
        <b-table striped hover :items="items" :fields="fields"></b-table>
      </div>
      <div class="charts">
        <div class="chart">
          <hr />
          <h5>Puntuaciones de las sesiones de estudio:</h5>
          <br />
          <div><ScoreLineChart /></div>
        </div>
        <br />
        <br />
        <div class="chart">
          <h5>Duraciones de las sesiones de estudio:</h5>
          <br />
          <div><DurationLineChart /></div>
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
.adminUserContent {
  padding: 2%;
}
.selector {
  display: grid;
  grid-template-columns: 20%;
  justify-content: center;
}
.chart {
  display: flex;
  justify-content: center;
}
.charts {
  display: grid;
  grid-template-columns: auto;
  justify-content: center;
}
.exitButton {
  display: flex;
  justify-content: center;
}
.table {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
</style>