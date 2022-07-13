const axios = require('axios');

const getData = async () => {
    const { data } = await axios.get(process.env.API_ROUTE);
    if (!data) throw new Error('No se ha podido conectar con la api')
    return data
}

const getUser = async (userID) => {
    const data = await getData()
    let userDataArray = data.filter((user) => user.id == userID)
    if (userDataArray.length === 1) return userDataArray[0]
    throw new Error('No existe un usuario asociado al ID')
}

const getUserData = async (req, res) => {
    try {
        const userID = req.params.id
        const userData = await getUser(userID)
        return res.status(200).json(userData)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const getUsers = async (req, res) => {
    try {
        const data = await getData()
        return res.status(200).json(
            data.map(user => ({
                id: user.id,
                username: user.username
            }))
        )
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const getUserSessions = async (req, res) => {
    try {
        const userID = req.params.id
        const user = await getUser(userID)
        return res.status(200).json(user.sessions)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const getUserScoreLineChart = async (req, res) => {
    try {
        const userID = req.params.id
        let userData = await getUser(userID)
        userData.sessions = userData.sessions.sort(function (a, b) {
            a = a.date.split('/').reverse().join('');
            b = b.date.split('/').reverse().join('');
            return a > b ? 1 : a < b ? -1 : 0;
        })
        let scoreLineChart = {
            labels: userData.sessions.map((session) => session.date),
            datasets: [{
                label: 'Score Line Chart',
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
        const userID = req.params.id
        let userData = await getUser(userID)
        userData.sessions = userData.sessions.sort(function (a, b) {
            a = a.date.split('/').reverse().join('');
            b = b.date.split('/').reverse().join('');
            return a > b ? 1 : a < b ? -1 : 0;
        })
        let durationLineChart = {
            labels: userData.sessions.map((session) => session.date),
            datasets: [{
                label: 'Duration Line Chart',
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

exports.getUserData = getUserData
exports.getUsers = getUsers
exports.getUserSessions = getUserSessions
exports.getUserScoreLineChart = getUserScoreLineChart
exports.getUserDurationLineChart = getUserDurationLineChart