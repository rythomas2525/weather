


var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Salt+Lake+City&APPID=3235ace4163bd2550b9b7922dde40788"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {

    var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed();
    // var tempF = tempF.toFixed()
    console.log(response.name)


    $(".city").text(" " + response.name)
    $(".desc1").text(response.weather[0].main)
    $(".temp").text("Current Temp: " + tempF + "°")
    $(".humidity").text("Humidity: " + response.main.humidity)
    $(".windspeed").text("Windspeed: " + response.wind.speed)



})

var APIKey = "3235ace4163bd2550b9b7922dde40788"
var city = "Salt+Lake+City"
var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +
    "&APPID=" + APIKey;
// var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=Salt+Lake+City&APPID=3235ace4163bd2550b9b7922dde40788"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    var tempF = ((response.list[0].main.temp - 273.15) * 1.80 + 32).toFixed();
    // var tempF = tempF.toFixed()

    console.log(response.city.name)
    // $(".city").text(" " + response.city.name)
    // $(".temp").text("Current Temp: " + tempF + "°")
    // $(".humidity").text("Humidity: " + response.list[0].main.humidity)
    // $(".windspeed").text("Windspeed: " + response.list[0].wind.speed)

    var tempminF = ((response.list[0].main.temp_min - 273.15) * 1.80 + 32).toFixed();
    var tempmaxF = ((response.list[0].main.temp_max - 273.15) * 1.80 + 32).toFixed();
    // var tempF = tempF.toFixed()

    $(".tempmin2").text("Min Temp: " + tempminF + "°")
    $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
    $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
    $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())


    var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
    var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
    // var tempF = tempF.toFixed()

    $(".tempmin3").text("Min Temp: " + tempminF + "°")
    $(".tempmax3").text("Max Temp: " + tempmaxF + "°")
    $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
    $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())


    var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
    var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
    // var tempF = tempF.toFixed()

    $(".tempmin4").text("Min Temp: " + tempminF + "°")
    $(".tempmax4").text("Max Temp: " + tempmaxF + "°")
    $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
    $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())


    var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
    var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
    // var tempF = tempF.toFixed()

    $(".tempmin5").text("Min Temp: " + tempminF + "°")
    $(".tempmax5").text("Max Temp: " + tempmaxF + "°")
    $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
    $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())
})