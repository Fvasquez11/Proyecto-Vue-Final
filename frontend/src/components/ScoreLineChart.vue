<template>
    <div class="chartContainer">
        <Line v-if="loaded" :chart-data="chartData" />
    </div>
</template>

<script>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'

ChartJS.register(PointElement,Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale)

export default {
    name: 'LineChart',
    components: { Line },
    data: () => ({
        loaded: false,
        chartData: null
    }),
    async mounted() {
        this.loaded = false

        try {
            const url = `http://localhost:4000/api/user/${this.userID}/score-data-chart`
            const response = await this.axios.get(url);
            this.chartData = response.data
            console.log(this.chartData)
            this.loaded = true
        } catch (e) {
            console.error(e)
        }
    }
}
</script>