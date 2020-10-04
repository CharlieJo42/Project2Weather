const axios = require("axios")
const API_KEY = "0b0424f8a2f7eb5f9c79a3066c2e0983"

exports.renderHomePage = (req, res) => {
    res.render("index")
}

exports.getWeather = (req, res) => {
    const city = req.body.city
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    axios.get(url).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}

exports.renderAboutPage = (req, res) => {
    res.render("about")
}