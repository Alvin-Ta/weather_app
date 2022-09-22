weather = {
    api_key: "b80050bb2a79a851dadf1e2f4cf2f3a3",
    get_weather_api: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.api_key
        )

        .then((Response) => Response.json())
        .then((data) => this.display_weather(data));
    },
    display_weather: function(data){
        const{name} = data;
        const{temp, feels_like, humidity} = data.main;
        const{description, icon} = data.weather[0];
        let temp_out = temp.toFixed();
        let feelsLike = feels_like.toFixed();
        
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp_out+"°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";;
        document.querySelector(".Desc").innerText = description;
        document.querySelector(".feels_like").innerText = "Feels Like: "+feelsLike+"°C";
        document.querySelector("Humid").innerText = "Humidity: " + humidity;   
    },
    
    search: function (){
    this.get_weather_api(document.querySelector(".search_bar").value)
    },


    
};

document.querySelector(".search button").addEventListener("click", () => {
    weather.search();
});

document.querySelector(".search button").addEventListener("keyup", function(event){
    if (event.key == "Enter")
        weather.search();
});









// let city_searched = document.querySelector(search_bar);