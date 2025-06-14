const apiKey = "746eb7085460e99fedd6c9bb81bdbf0f";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&=&units=metric&q=bangalore"

    async function checkWeather(){
        constresponce = await fetch(apiUrl + `&appid=${apiKey}`);
        var data = await response.json();

        console.log(data);
    }

    checkWeather();