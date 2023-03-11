var key = config.WEATHER_API_KEY;

let weather = {
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&units=metric&&appid=" + key
        ).then((response) => response.json())
        .then((data) => console.log(data))
    },

    displayWeather: function(data) {

    }
};