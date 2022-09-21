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
        console.log(name, temp, feels_like, humidity, description, icon);

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp+"°";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";;
        document.querySelector(".Desc").innerText = description;
        document.querySelector("city").innerText = "Weather in " + name;
        document.querySelector("city").innerText = "Weather in " + name;
        

    }


    
}
// let city_searched = document.querySelector(search_bar);