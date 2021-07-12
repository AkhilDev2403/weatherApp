function displayWeather(city){
    let city_name = city.name
    let weather = city.weather[0].main
    let weather_description = city.weather[0].description
    let temparature = city.main.temp
    let icon_id = city.weather[0].icon
    let prssr = city.main.pressure
    let humidity = city.main.humidity
    
    let time_zone = city.timezone
    let sun_rise = city.sys.sunrise
    let sun_down = city.sys.sunset
    let longitude = city.coord.lon
    let latittude = city.coord.lat
    let sea_lvl = city.main.sea_level
    let grnd_lvl = city.main.grnd_level
    let wind_speed = city.wind.speed
    let country_name = city.sys.country


            let html_data = `<div class="row mt-3">
            <div class="col-lg-4 mt-3 col-sm-4 div1">
                <h2> City - <b>${city_name}</b></h2>
                <h4>Time Zone <b>${time_zone}</b></h4>
                <h4>Country <b>${country_name}</b></h4>
            </div>
            <div class="col-lg-4 col-sm-4 card cd1">
                <img src="./icons/01d.png" class="card-img-top" alt="...">
                <h1 class="temp">${weather}</h1>
                <h1>${weather_description}</h1>
            </div>
            <div class="col-lg-4 col-sm-4 mt-4 div3">
                <h1 class="temphead"> <b>${temparature}</b></h1>
                <h5>Pressure :<b>${prssr}</b></h5>
                <h5>Wind Speed :<b>${wind_speed}</b></h5>
            </div>

        </div>


        <div class="row div4">
            <div class="col-lg-4 col-sm-4">
                <h5>Sunrise :<b>${sun_rise}</b></h5>
                <h5>Sundown :<b>${sun_down}</b></h5>
            </div>
            <div class="col-lg-4 col-sm-4 div5">
                <h4>Humidity :<b>${humidity}</b></h4>
                <h4>Sea Level :<b>${sea_lvl}</b></h4>
                <h4>Ground Level :<b>${grnd_lvl}</b></h4>
            </div>
            <div class="col-lg-4 col-sm-4 div6">
                <h6>lon: <b> ${longitude}</b></h6>
                <h6>lat: <b>${latittude}</b></h6>
            </div>
        </div>
`           


           

            result.innerHTML = html_data
}


function fetchWeather(){
    let city_name = srch.value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=c1a1b9b9e827e405dfb59bb86ed05610&units=metric`
    fetch(url).then(res=>res.json()).then(data=>displayWeather(data))
    
}

function reset(){
srch.value = ""
result.innerHTML = ""
}