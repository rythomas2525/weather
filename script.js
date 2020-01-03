function searchCity(city) {



    var inputCity = $("#city-search").val().trim();
    inputCity = inputCity.replace(" ", "+");
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=3235ace4163bd2550b9b7922dde40788";

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
    var inputCity = $("#city-search").val().trim();
    inputCity = inputCity.replace(" ", "+");
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputCity +
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
        console.log(response.list[0].weather[0])

        // var icon1 = response.list[0].weather[0].icon

        // var image = $("<img>").attr("src", icon1);

        // today1.append(image)



        $(".icon1").prepend(response.list[0].weather[0].icon)
        $(".tempmin2").text("Min Temp: " + tempminF + "°")
        $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
        $(".desc2").text(response.list[0].weather[0].main)
        $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
        $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())



        var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
        var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
        // var tempF = tempF.toFixed()

        $(".tempmin3").text("Min Temp: " + tempminF + "°")
        $(".tempmax3").text("Max Temp: " + tempmaxF + "°")
        $(".desc3").text(response.list[11].weather[0].main)
        $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
        $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())


        var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
        var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
        // var tempF = tempF.toFixed()

        $(".tempmin4").text("Min Temp: " + tempminF + "°")
        $(".tempmax4").text("Max Temp: " + tempmaxF + "°")
        $(".desc4").text(response.list[19].weather[0].main)
        $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
        $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())


        var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
        var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
        // var tempF = tempF.toFixed()

        $(".tempmin5").text("Min Temp: " + tempminF + "°")
        $(".tempmax5").text("Max Temp: " + tempmaxF + "°")
        $(".desc5").text(response.list[27].weather[0].main)
        $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
        $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())
    })

    var desc1 = document.getElementsByClassName("desc1")
    if ($(".desc1").text === "Clear") {
        console.log("true")
    } else {
        console.log("false")
    }
}

$("#select-city").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the city
    var inputCity = $("#city-search").val().trim();

    console.log(inputCity)
    searchCity(inputCity);
});


