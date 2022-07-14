const axios = require('axios');

const getData = async () => {
    const { data } = await axios.get(process.env.API_ROUTE);
    if (!data) throw new Error('No se ha podido conectar con la api')
    return data
}

const getUser = async (username) => {
    const data = await getData()
    let userDataArray = data.filter((user) => user.username == username)
    if (userDataArray.length === 1) return userDataArray[0]
    throw new Error('No existe un usuario asociado al ID')
}
const getUsers = async (req, res) => {
    try {
        const data = await getData()
        return res.status(200).json(
            data.map(user => ({
                username: user.username
            }))
        )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const getUserScoreLineChart = async (req, res) => {
    try {
        const username = req.params.username
        let userData = await getUser(username)
        userData.sessions = userData.sessions.sort(function (a, b) {
            a = a.date.split('/').reverse().join('');
            b = b.date.split('/').reverse().join('');
            return a > b ? 1 : a < b ? -1 : 0;
        })
        let scoreLineChart = {
            labels: userData.sessions.map((session) => session.date),
            datasets: [{
                label: 'Gráfico de puntuaciones',
                data: userData.sessions.map((session) => session.score),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
        return res.status(200).json(scoreLineChart)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const getUserDurationLineChart = async (req, res) => {
    try {
        const username = req.params.username
        let userData = await getUser(username)
        userData.sessions = userData.sessions.sort(function (a, b) {
            a = a.date.split('/').reverse().join('');
            b = b.date.split('/').reverse().join('');
            return a > b ? 1 : a < b ? -1 : 0;
        })
        let durationLineChart = {
            labels: userData.sessions.map((session) => session.date),
            datasets: [{
                label: 'Gráfico de duración',
                data: userData.sessions.map((session) => session.duration),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }
        return res.status(200).json(durationLineChart)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const getUserData = async (req, res) => {
    try {
        const username = req.params.username
        const user = await getUser(username)
        return res.status(200).json(user.sessions)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

exports.getUserData = getUserData
exports.getUsers = getUsers
exports.getUserScoreLineChart = getUserScoreLineChart
exports.getUserDurationLineChart = getUserDurationLineChart