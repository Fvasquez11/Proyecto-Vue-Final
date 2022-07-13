const axios = require('axios');

const getUserData = async (userID) => {
    const { data } = await axios.get(process.env.API_ROUTE);
    let userDataArray = data.filter((user) => user['id'] === userID)
    if (userDataArray.length === 1) return userDataArray[0]
    throw new Error('No existe un usuario asociado al ID')
}

const getUserScoreLineChart = async (userID) => {
    let userData = await getUserData(userID)
    userData.sessions = userData.sessions.sort(function (a, b) {
        a = a.date.split('/').reverse().join('');
        b = b.date.split('/').reverse().join('');
        return a > b ? 1 : a < b ? -1 : 0;
    })
    let scoreLineChart = {
        labels : userData.sessions.map((session) => session.date),
        datasets: [{
            label: 'Score Line Chart',
            data: userData.sessions.map((session) => session.score),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }
    return scoreLineChart
}

const getUserDurationLineChart = async (userID) => {
    let userData = await getUserData(userID)
    userData.sessions = userData.sessions.sort(function (a, b) {
        a = a.date.split('/').reverse().join('');
        b = b.date.split('/').reverse().join('');
        return a > b ? 1 : a < b ? -1 : 0;
    })
    let scoreLineChart = {
        labels : userData.sessions.map((session) => session.date),
        datasets: [{
            label: 'Score Line Chart',
            data: userData.sessions.map((session) => session.duration),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }
    return scoreLineChart
}

exports.getUserData = getUserData
exports.getUserScoreLineChart = getUserScoreLineChart
exports.getUserDurationLineChart = getUserDurationLineChart