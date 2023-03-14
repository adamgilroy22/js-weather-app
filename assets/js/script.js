const key = "9ff43f92360ed62d34a4c5197bdf8aa2";

let weather = {
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&&appid=" + key
        ).then((response) => {
            if (!response.ok) {
                alert("No weather found.");
                throw new Error("No weather found.");
            }
            return response.json();
        })
            .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
        let { name } = data;
        if (name == "Londonderry"){
            name = "Derry"
        }
        if (name == "Queenstown"){
            name = "Cobh"
        }
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        document.querySelector(".weather").classList.remove("loading...");
    },

    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document
    .querySelector(".search-bar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });

weather.fetchWeather("Cork");