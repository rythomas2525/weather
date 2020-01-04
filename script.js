function searchCity(city) {



    var inputCity = $("#city-search").val().trim();
    // inputCity = inputCity.replace(" ", "+");
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

        var desc1 = response.weather[0].main
        console.log(desc1)
        if (desc1 === "Clear") {

            $(".img1").attr("src", "images/clear.png")
        }

        if (desc1 === "Snow") {
            console.log("snow")
            $(".img1").attr("src", "images/snow.png")

        }


        if (desc1 === "Rain") {
            console.log("rain")
            $(".img1").attr("src", "images/rain.png")

        } if (desc1 === "Clouds") {
            console.log("clouds")
            $(".img1").attr("src", "images/clouds.png")

        } else {
            console.log("false")
        }

        var lon = response.coords.lon
        var lat = response.coords.lat


        var url = 0


    })

    var APIKey = "3235ace4163bd2550b9b7922dde40788"
    var inputCity = $("#city-search").val().trim();
    // inputCity = inputCity.replace(" ", "+");
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


        var desc2 = response.list[0].weather[0].main
        console.log(desc2)
        if (desc2 === "Clear") {

            $(".img2").attr("src", "images/clear.png")
        }

        if (desc2 === "Snow") {
            console.log("snow")
            $(".img2").attr("src", "images/snow.png")

        }


        if (desc2 === "Rain") {
            console.log("rain")
            $(".img2").attr("src", "images/rain.png")

        } if (desc2 === "Clouds") {
            console.log("clouds")
            $(".img2").attr("src", "images/clouds.png")

        } else {
            console.log("false")
        }


        var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
        var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
        // var tempF = tempF.toFixed()

        $(".tempmin3").text("Min Temp: " + tempminF + "°")
        $(".tempmax3").text("Max Temp: " + tempmaxF + "°")
        $(".desc3").text(response.list[11].weather[0].main)
        $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
        $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())


        var desc3 = response.list[11].weather[0].main
        console.log(desc3)
        if (desc3 === "Clear") {

            $(".img3").attr("src", "images/clear.png")
        }

        if (desc3 === "Snow") {
            console.log("snow")
            $(".img3").attr("src", "images/snow.png")

        }


        if (desc3 === "Rain") {
            console.log("rain")
            $(".img3").attr("src", "images/rain.png")

        } if (desc3 === "Clouds") {
            console.log("clouds")
            $(".img3").attr("src", "images/clouds.png")

        } else {
            console.log("false")
        }

        var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
        var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
        // var tempF = tempF.toFixed()

        $(".tempmin4").text("Min Temp: " + tempminF + "°")
        $(".tempmax4").text("Max Temp: " + tempmaxF + "°")
        $(".desc4").text(response.list[19].weather[0].main)
        $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
        $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())

        var desc4 = response.list[19].weather[0].main
        console.log(desc4)
        if (desc4 === "Clear") {

            $(".img4").attr("src", "images/clear.png")
        }

        if (desc4 === "Snow") {
            console.log("snow")
            $(".img4").attr("src", "images/snow.png")

        }


        if (desc4 === "Rain") {
            console.log("rain")
            $(".img4").attr("src", "images/rain.png")

        } if (desc4 === "Clouds") {
            console.log("clouds")
            $(".img4").attr("src", "images/clouds.png")

        } else {
            console.log("false")
        }


        var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
        var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
        // var tempF = tempF.toFixed()

        $(".tempmin5").text("Min Temp: " + tempminF + "°")
        $(".tempmax5").text("Max Temp: " + tempmaxF + "°")
        $(".desc5").text(response.list[27].weather[0].main)
        $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
        $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())

        var desc5 = response.list[27].weather[0].main
        console.log(desc5)
        if (desc5 === "Clear") {

            $(".img5").attr("src", "images/clear.png")
        }

        if (desc5 === "Snow") {
            console.log("snow")
            $(".img5").attr("src", "images/snow.png")

        }


        if (desc5 === "Rain") {
            console.log("rain")
            $(".img5").attr("src", "images/rain.png")

        } if (desc5 === "Clouds") {
            console.log("clouds")
            $(".img5").attr("src", "images/clouds.png")

        } else {
            console.log("false")
        }


    })


}

$("#select-city").on("click", function (event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the city
    var inputCity = $("#city-search").val().trim();


    var searchItem = $(this).prev().val()
    var searchHistory = []
    var dataNumber = $((".search")).data("number")
    console.log(dataNumber)

    searchHistory.push(searchItem)

    console.log(searchHistory);



    localStorage.setItem("searchItem", searchItem);



    // var item = localStorage.getItem("searchHist", 
    // $(this).prev().val(item)




    console.log(inputCity)
    searchCity(inputCity);
});


