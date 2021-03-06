$(document).ready(function () {

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


            // adds weather conditions to html
            $(".city").text(" in " + response.name)
            $(".desc1").text(response.weather[0].main)
            $(".temp").text("Current Temp: " + tempF + "°")
            $(".humidity").text("Humidity: " + response.main.humidity)
            $(".windspeed").text("Windspeed: " + response.wind.speed)




            var desc1 = response.weather[0].main

            // goes through to decide which weather Icon to use
            if (desc1 === "Clear") {

                $(".img1").attr("src", "images/clear.png")
                document.body.style.backgroundImage = "url('images/clearbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }

            if (desc1 === "Snow") {

                $(".img1").attr("src", "images/snow.png")
                document.body.style.backgroundImage = "url('images/snowbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }


            if (desc1 === "Rain") {

                $(".img1").attr("src", "images/rain.png")
                document.body.style.backgroundImage = "url('images/rain3bg.jpg')"
                document.body.style.backgroundSize = "100%"
            } if (desc1 === "Clouds") {

                $(".img1").attr("src", "images/clouds.png")
                document.body.style.backgroundImage = "url('images/cloudbg.jpg')"
                document.body.style.backgroundSize = "100%"
            } else {

            }

            var lon = response.coord.lon
            var lat = response.coord.lat


            var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=3235ace4163bd2550b9b7922dde40788&lat=" + lat + "&lon=" + lon;


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                $(".index1").text("UV Index: " + response.value.toFixed(1))


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


                // $(".city").text(" " + response.city.name)
                // $(".temp").text("Current Temp: " + tempF + "°")
                // $(".humidity").text("Humidity: " + response.list[0].main.humidity)
                // $(".windspeed").text("Windspeed: " + response.list[0].wind.speed)

                var tempminF = ((response.list[0].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[0].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // var icon1 = response.list[0].weather[0].icon

                // var image = $("<img>").attr("src", icon1);

                // today1.append(image)



                // adds weather conditions to html

                $(".tempmin2").text("Temperature: " + tempminF + "°")
                // $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
                $(".desc2").text(response.list[0].weather[0].main)
                $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
                $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())

                var date = response.list[0].dt_txt
                date = date.substr(0, 10)


                $(".date2").text(date)


                var desc2 = response.list[0].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc2 === "Clear") {

                    $(".img2").attr("src", "images/clear.png")
                }

                if (desc2 === "Snow") {

                    $(".img2").attr("src", "images/snow.png")

                }


                if (desc2 === "Rain") {

                    $(".img2").attr("src", "images/rain.png")

                } if (desc2 === "Clouds") {

                    $(".img2").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // adds weather conditions to html
                $(".tempmin3").text("Temperature: " + tempminF + "°")
                $(".desc3").text(response.list[11].weather[0].main)
                $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
                $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())
                var date = response.list[11].dt_txt
                date = date.substr(0, 10)


                $(".date3").text(date)


                var desc3 = response.list[11].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc3 === "Clear") {

                    $(".img3").attr("src", "images/clear.png")
                }

                if (desc3 === "Snow") {

                    $(".img3").attr("src", "images/snow.png")

                }


                if (desc3 === "Rain") {

                    $(".img3").attr("src", "images/rain.png")

                } if (desc3 === "Clouds") {

                    $(".img3").attr("src", "images/clouds.png")

                } else {

                }

                var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()



                // adds weather conditions to html
                $(".tempmin4").text("Temperature: " + tempminF + "°")
                $(".desc4").text(response.list[19].weather[0].main)
                $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
                $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())

                var date = response.list[19].dt_txt
                date = date.substr(0, 10)


                $(".date4").text(date)

                var desc4 = response.list[19].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc4 === "Clear") {

                    $(".img4").attr("src", "images/clear.png")
                }

                if (desc4 === "Snow") {

                    $(".img4").attr("src", "images/snow.png")

                }


                if (desc4 === "Rain") {

                    $(".img4").attr("src", "images/rain.png")

                } if (desc4 === "Clouds") {

                    $(".img4").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()

                $(".tempmin5").text("Temperature: " + tempminF + "°")
                $(".desc5").text(response.list[27].weather[0].main)
                $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
                $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())

                var date = response.list[27].dt_txt
                date = date.substr(0, 10)


                $(".date5").text(date)

                var desc5 = response.list[27].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc5 === "Clear") {

                    $(".img5").attr("src", "images/clear.png")
                }

                if (desc5 === "Snow") {

                    $(".img5").attr("src", "images/snow.png")

                }


                if (desc5 === "Rain") {

                    $(".img5").attr("src", "images/rain.png")

                } if (desc5 === "Clouds") {

                    $(".img5").attr("src", "images/clouds.png")

                } else {

                }


            })


        })
    }

    // function to save searchHistory
    var searchHistory = []
    $("#select-city").on("click", function (event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the city
        var inputCity = $("#city-search").val().trim();


        var searchItem = $(this).prev().val()



        searchHistory.push(searchItem)

        console.log(searchHistory.length);



        localStorage.setItem("searchItem", searchHistory);

        if (searchHistory.length <= 5) {
            console.log(true)
        } else {
            searchHistory = searchHistory.slice(1)
        }

        $(".data1").text(searchHistory[4])
        $(".data2").text(searchHistory[3])
        $(".data3").text(searchHistory[2])
        $(".data4").text(searchHistory[1])
        $(".data5").text(searchHistory[0])

        var item = localStorage.getItem("searchItem", (searchItem))




        console.log(item)






        // var item = localStorage.getItem("searchItem".data("number"))
        // searchItem.prev().val(item)





        searchCity(inputCity);
    });


    // button for box 5 in search history



    $(".data5").on("click", function () {
        console.log("clicked")
        var inputCity = $(".data5").text()

        // work in progress

        var inputCity = $(".data5").text()
        // inputCity = inputCity.replace(" ", "+");
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=3235ace4163bd2550b9b7922dde40788";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed();
            // var tempF = tempF.toFixed()


            // adds weather conditions to html
            $(".city").text(" in " + response.name)
            $(".desc1").text(response.weather[0].main)
            $(".temp").text("Current Temp: " + tempF + "°")
            $(".humidity").text("Humidity: " + response.main.humidity)
            $(".windspeed").text("Windspeed: " + response.wind.speed)




            var desc1 = response.weather[0].main

            // goes through to decide which weather Icon to use
            if (desc1 === "Clear") {

                $(".img1").attr("src", "images/clear.png")
                document.body.style.backgroundImage = "url('images/clearbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }

            if (desc1 === "Snow") {

                $(".img1").attr("src", "images/snow.png")
                document.body.style.backgroundImage = "url('images/snowbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }


            if (desc1 === "Rain") {

                $(".img1").attr("src", "images/rain.png")
                document.body.style.backgroundImage = "url('images/rain3bg.jpg')"
                document.body.style.backgroundSize = "100%"
            } if (desc1 === "Clouds") {

                $(".img1").attr("src", "images/clouds.png")
                document.body.style.backgroundImage = "url('images/cloudbg.jpg')"
                document.body.style.backgroundSize = "100%"
            } else {

            }

            var lon = response.coord.lon
            var lat = response.coord.lat


            var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=3235ace4163bd2550b9b7922dde40788&lat=" + lat + "&lon=" + lon;


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                $(".index1").text("UV Index: " + response.value.toFixed(1))


            })

            var APIKey = "3235ace4163bd2550b9b7922dde40788"
            var inputCity = $(".data5").text()
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


                // $(".city").text(" " + response.city.name)
                // $(".temp").text("Current Temp: " + tempF + "°")
                // $(".humidity").text("Humidity: " + response.list[0].main.humidity)
                // $(".windspeed").text("Windspeed: " + response.list[0].wind.speed)

                var tempminF = ((response.list[0].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[0].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // var icon1 = response.list[0].weather[0].icon

                // var image = $("<img>").attr("src", icon1);

                // today1.append(image)



                // adds weather conditions to html

                $(".tempmin2").text("Temperature: " + tempminF + "°")
                // $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
                $(".desc2").text(response.list[0].weather[0].main)
                $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
                $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())

                var date = response.list[0].dt_txt
                date = date.substr(0, 10)


                $(".date2").text(date)


                var desc2 = response.list[0].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc2 === "Clear") {

                    $(".img2").attr("src", "images/clear.png")
                }

                if (desc2 === "Snow") {

                    $(".img2").attr("src", "images/snow.png")

                }


                if (desc2 === "Rain") {

                    $(".img2").attr("src", "images/rain.png")

                } if (desc2 === "Clouds") {

                    $(".img2").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // adds weather conditions to html
                $(".tempmin3").text("Temperature: " + tempminF + "°")
                $(".desc3").text(response.list[11].weather[0].main)
                $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
                $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())
                var date = response.list[11].dt_txt
                date = date.substr(0, 10)


                $(".date3").text(date)


                var desc3 = response.list[11].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc3 === "Clear") {

                    $(".img3").attr("src", "images/clear.png")
                }

                if (desc3 === "Snow") {

                    $(".img3").attr("src", "images/snow.png")

                }


                if (desc3 === "Rain") {

                    $(".img3").attr("src", "images/rain.png")

                } if (desc3 === "Clouds") {

                    $(".img3").attr("src", "images/clouds.png")

                } else {

                }

                var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()



                // adds weather conditions to html
                $(".tempmin4").text("Temperature: " + tempminF + "°")
                $(".desc4").text(response.list[19].weather[0].main)
                $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
                $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())

                var date = response.list[19].dt_txt
                date = date.substr(0, 10)


                $(".date4").text(date)

                var desc4 = response.list[19].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc4 === "Clear") {

                    $(".img4").attr("src", "images/clear.png")
                }

                if (desc4 === "Snow") {

                    $(".img4").attr("src", "images/snow.png")

                }


                if (desc4 === "Rain") {

                    $(".img4").attr("src", "images/rain.png")

                } if (desc4 === "Clouds") {

                    $(".img4").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()

                $(".tempmin5").text("Temperature: " + tempminF + "°")
                $(".desc5").text(response.list[27].weather[0].main)
                $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
                $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())

                var date = response.list[27].dt_txt
                date = date.substr(0, 10)


                $(".date5").text(date)

                var desc5 = response.list[27].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc5 === "Clear") {

                    $(".img5").attr("src", "images/clear.png")
                }

                if (desc5 === "Snow") {

                    $(".img5").attr("src", "images/snow.png")

                }


                if (desc5 === "Rain") {

                    $(".img5").attr("src", "images/rain.png")

                } if (desc5 === "Clouds") {

                    $(".img5").attr("src", "images/clouds.png")

                } else {

                }


            })


        })

    })


    // box 4 of search history function

    $(".data4").on("click", function () {
        console.log("clicked")




        var inputCity = $(".data4").text()
        // inputCity = inputCity.replace(" ", "+");
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=3235ace4163bd2550b9b7922dde40788";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed();
            // var tempF = tempF.toFixed()


            // adds weather conditions to html
            $(".city").text(" in " + response.name)
            $(".desc1").text(response.weather[0].main)
            $(".temp").text("Current Temp: " + tempF + "°")
            $(".humidity").text("Humidity: " + response.main.humidity)
            $(".windspeed").text("Windspeed: " + response.wind.speed)




            var desc1 = response.weather[0].main

            // goes through to decide which weather Icon to use
            if (desc1 === "Clear") {

                $(".img1").attr("src", "images/clear.png")
                document.body.style.backgroundImage = "url('images/clearbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }

            if (desc1 === "Snow") {

                $(".img1").attr("src", "images/snow.png")
                document.body.style.backgroundImage = "url('images/snowbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }


            if (desc1 === "Rain") {

                $(".img1").attr("src", "images/rain.png")
                document.body.style.backgroundImage = "url('images/rain3bg.jpg')"
                document.body.style.backgroundSize = "100%"
            } if (desc1 === "Clouds") {

                $(".img1").attr("src", "images/clouds.png")
                document.body.style.backgroundImage = "url('images/cloudbg.jpg')"
                document.body.style.backgroundSize = "100%"
            } else {

            }

            var lon = response.coord.lon
            var lat = response.coord.lat


            var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=3235ace4163bd2550b9b7922dde40788&lat=" + lat + "&lon=" + lon;


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                $(".index1").text("UV Index: " + response.value.toFixed(1))


            })

            var APIKey = "3235ace4163bd2550b9b7922dde40788"
            var inputCity = $(".data4").text()
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


                // $(".city").text(" " + response.city.name)
                // $(".temp").text("Current Temp: " + tempF + "°")
                // $(".humidity").text("Humidity: " + response.list[0].main.humidity)
                // $(".windspeed").text("Windspeed: " + response.list[0].wind.speed)

                var tempminF = ((response.list[0].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[0].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // var icon1 = response.list[0].weather[0].icon

                // var image = $("<img>").attr("src", icon1);

                // today1.append(image)



                // adds weather conditions to html

                $(".tempmin2").text("Temperature: " + tempminF + "°")
                // $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
                $(".desc2").text(response.list[0].weather[0].main)
                $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
                $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())

                var date = response.list[0].dt_txt
                date = date.substr(0, 10)


                $(".date2").text(date)


                var desc2 = response.list[0].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc2 === "Clear") {

                    $(".img2").attr("src", "images/clear.png")
                }

                if (desc2 === "Snow") {

                    $(".img2").attr("src", "images/snow.png")

                }


                if (desc2 === "Rain") {

                    $(".img2").attr("src", "images/rain.png")

                } if (desc2 === "Clouds") {

                    $(".img2").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // adds weather conditions to html
                $(".tempmin3").text("Temperature: " + tempminF + "°")
                $(".desc3").text(response.list[11].weather[0].main)
                $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
                $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())
                var date = response.list[11].dt_txt
                date = date.substr(0, 10)


                $(".date3").text(date)


                var desc3 = response.list[11].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc3 === "Clear") {

                    $(".img3").attr("src", "images/clear.png")
                }

                if (desc3 === "Snow") {

                    $(".img3").attr("src", "images/snow.png")

                }


                if (desc3 === "Rain") {

                    $(".img3").attr("src", "images/rain.png")

                } if (desc3 === "Clouds") {

                    $(".img3").attr("src", "images/clouds.png")

                } else {

                }

                var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()



                // adds weather conditions to html
                $(".tempmin4").text("Temperature: " + tempminF + "°")
                $(".desc4").text(response.list[19].weather[0].main)
                $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
                $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())

                var date = response.list[19].dt_txt
                date = date.substr(0, 10)


                $(".date4").text(date)

                var desc4 = response.list[19].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc4 === "Clear") {

                    $(".img4").attr("src", "images/clear.png")
                }

                if (desc4 === "Snow") {

                    $(".img4").attr("src", "images/snow.png")

                }


                if (desc4 === "Rain") {

                    $(".img4").attr("src", "images/rain.png")

                } if (desc4 === "Clouds") {

                    $(".img4").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()

                $(".tempmin5").text("Temperature: " + tempminF + "°")
                $(".desc5").text(response.list[27].weather[0].main)
                $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
                $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())

                var date = response.list[27].dt_txt
                date = date.substr(0, 10)


                $(".date5").text(date)

                var desc5 = response.list[27].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc5 === "Clear") {

                    $(".img5").attr("src", "images/clear.png")
                }

                if (desc5 === "Snow") {

                    $(".img5").attr("src", "images/snow.png")

                }


                if (desc5 === "Rain") {

                    $(".img5").attr("src", "images/rain.png")

                } if (desc5 === "Clouds") {

                    $(".img5").attr("src", "images/clouds.png")

                } else {

                }


            })


        })

    })


    // box 3 of search history function

    $(".data3").on("click", function () {
        console.log("clicked")




        var inputCity = $(".data3").text()
        // inputCity = inputCity.replace(" ", "+");
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=3235ace4163bd2550b9b7922dde40788";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed();
            // var tempF = tempF.toFixed()


            // adds weather conditions to html
            $(".city").text(" in " + response.name)
            $(".desc1").text(response.weather[0].main)
            $(".temp").text("Current Temp: " + tempF + "°")
            $(".humidity").text("Humidity: " + response.main.humidity)
            $(".windspeed").text("Windspeed: " + response.wind.speed)




            var desc1 = response.weather[0].main

            // goes through to decide which weather Icon to use
            if (desc1 === "Clear") {

                $(".img1").attr("src", "images/clear.png")
                document.body.style.backgroundImage = "url('images/clearbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }

            if (desc1 === "Snow") {

                $(".img1").attr("src", "images/snow.png")
                document.body.style.backgroundImage = "url('images/snowbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }


            if (desc1 === "Rain") {

                $(".img1").attr("src", "images/rain.png")
                document.body.style.backgroundImage = "url('images/rain3bg.jpg')"
                document.body.style.backgroundSize = "100%"
            } if (desc1 === "Clouds") {

                $(".img1").attr("src", "images/clouds.png")
                document.body.style.backgroundImage = "url('images/cloudbg.jpg')"
                document.body.style.backgroundSize = "100%"
            } else {

            }

            var lon = response.coord.lon
            var lat = response.coord.lat


            var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=3235ace4163bd2550b9b7922dde40788&lat=" + lat + "&lon=" + lon;


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                $(".index1").text("UV Index: " + response.value.toFixed(1))


            })

            var APIKey = "3235ace4163bd2550b9b7922dde40788"
            var inputCity = $(".data3").text()
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


                // $(".city").text(" " + response.city.name)
                // $(".temp").text("Current Temp: " + tempF + "°")
                // $(".humidity").text("Humidity: " + response.list[0].main.humidity)
                // $(".windspeed").text("Windspeed: " + response.list[0].wind.speed)

                var tempminF = ((response.list[0].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[0].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // var icon1 = response.list[0].weather[0].icon

                // var image = $("<img>").attr("src", icon1);

                // today1.append(image)



                // adds weather conditions to html

                $(".tempmin2").text("Temperature: " + tempminF + "°")
                // $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
                $(".desc2").text(response.list[0].weather[0].main)
                $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
                $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())

                var date = response.list[0].dt_txt
                date = date.substr(0, 10)


                $(".date2").text(date)


                var desc2 = response.list[0].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc2 === "Clear") {

                    $(".img2").attr("src", "images/clear.png")
                }

                if (desc2 === "Snow") {

                    $(".img2").attr("src", "images/snow.png")

                }


                if (desc2 === "Rain") {

                    $(".img2").attr("src", "images/rain.png")

                } if (desc2 === "Clouds") {

                    $(".img2").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // adds weather conditions to html
                $(".tempmin3").text("Temperature: " + tempminF + "°")
                $(".desc3").text(response.list[11].weather[0].main)
                $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
                $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())
                var date = response.list[11].dt_txt
                date = date.substr(0, 10)


                $(".date3").text(date)


                var desc3 = response.list[11].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc3 === "Clear") {

                    $(".img3").attr("src", "images/clear.png")
                }

                if (desc3 === "Snow") {

                    $(".img3").attr("src", "images/snow.png")

                }


                if (desc3 === "Rain") {

                    $(".img3").attr("src", "images/rain.png")

                } if (desc3 === "Clouds") {

                    $(".img3").attr("src", "images/clouds.png")

                } else {

                }

                var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()



                // adds weather conditions to html
                $(".tempmin4").text("Temperature: " + tempminF + "°")
                $(".desc4").text(response.list[19].weather[0].main)
                $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
                $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())

                var date = response.list[19].dt_txt
                date = date.substr(0, 10)


                $(".date4").text(date)

                var desc4 = response.list[19].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc4 === "Clear") {

                    $(".img4").attr("src", "images/clear.png")
                }

                if (desc4 === "Snow") {

                    $(".img4").attr("src", "images/snow.png")

                }


                if (desc4 === "Rain") {

                    $(".img4").attr("src", "images/rain.png")

                } if (desc4 === "Clouds") {

                    $(".img4").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()

                $(".tempmin5").text("Temperature: " + tempminF + "°")
                $(".desc5").text(response.list[27].weather[0].main)
                $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
                $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())

                var date = response.list[27].dt_txt
                date = date.substr(0, 10)


                $(".date5").text(date)

                var desc5 = response.list[27].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc5 === "Clear") {

                    $(".img5").attr("src", "images/clear.png")
                }

                if (desc5 === "Snow") {

                    $(".img5").attr("src", "images/snow.png")

                }


                if (desc5 === "Rain") {

                    $(".img5").attr("src", "images/rain.png")

                } if (desc5 === "Clouds") {

                    $(".img5").attr("src", "images/clouds.png")

                } else {

                }


            })


        })

    })


    // box 2 of search history function

    $(".data2").on("click", function () {
        console.log("clicked")




        var inputCity = $(".data2").text()
        // inputCity = inputCity.replace(" ", "+");
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=3235ace4163bd2550b9b7922dde40788";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed();
            // var tempF = tempF.toFixed()


            // adds weather conditions to html
            $(".city").text(" in " + response.name)
            $(".desc1").text(response.weather[0].main)
            $(".temp").text("Current Temp: " + tempF + "°")
            $(".humidity").text("Humidity: " + response.main.humidity)
            $(".windspeed").text("Windspeed: " + response.wind.speed)




            var desc1 = response.weather[0].main

            // goes through to decide which weather Icon to use
            if (desc1 === "Clear") {

                $(".img1").attr("src", "images/clear.png")
                document.body.style.backgroundImage = "url('images/clearbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }

            if (desc1 === "Snow") {

                $(".img1").attr("src", "images/snow.png")
                document.body.style.backgroundImage = "url('images/snowbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }


            if (desc1 === "Rain") {

                $(".img1").attr("src", "images/rain.png")
                document.body.style.backgroundImage = "url('images/rain3bg.jpg')"
                document.body.style.backgroundSize = "100%"
            } if (desc1 === "Clouds") {

                $(".img1").attr("src", "images/clouds.png")
                document.body.style.backgroundImage = "url('images/cloudbg.jpg')"
                document.body.style.backgroundSize = "100%"
            } else {

            }

            var lon = response.coord.lon
            var lat = response.coord.lat


            var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=3235ace4163bd2550b9b7922dde40788&lat=" + lat + "&lon=" + lon;


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                $(".index1").text("UV Index: " + response.value.toFixed(1))


            })

            var APIKey = "3235ace4163bd2550b9b7922dde40788"
            var inputCity = $(".data2").text()
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


                // $(".city").text(" " + response.city.name)
                // $(".temp").text("Current Temp: " + tempF + "°")
                // $(".humidity").text("Humidity: " + response.list[0].main.humidity)
                // $(".windspeed").text("Windspeed: " + response.list[0].wind.speed)

                var tempminF = ((response.list[0].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[0].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // var icon1 = response.list[0].weather[0].icon

                // var image = $("<img>").attr("src", icon1);

                // today1.append(image)



                // adds weather conditions to html

                $(".tempmin2").text("Temperature: " + tempminF + "°")
                // $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
                $(".desc2").text(response.list[0].weather[0].main)
                $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
                $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())

                var date = response.list[0].dt_txt
                date = date.substr(0, 10)


                $(".date2").text(date)


                var desc2 = response.list[0].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc2 === "Clear") {

                    $(".img2").attr("src", "images/clear.png")
                }

                if (desc2 === "Snow") {

                    $(".img2").attr("src", "images/snow.png")

                }


                if (desc2 === "Rain") {

                    $(".img2").attr("src", "images/rain.png")

                } if (desc2 === "Clouds") {

                    $(".img2").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // adds weather conditions to html
                $(".tempmin3").text("Temperature: " + tempminF + "°")
                $(".desc3").text(response.list[11].weather[0].main)
                $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
                $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())
                var date = response.list[11].dt_txt
                date = date.substr(0, 10)


                $(".date3").text(date)


                var desc3 = response.list[11].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc3 === "Clear") {

                    $(".img3").attr("src", "images/clear.png")
                }

                if (desc3 === "Snow") {

                    $(".img3").attr("src", "images/snow.png")

                }


                if (desc3 === "Rain") {

                    $(".img3").attr("src", "images/rain.png")

                } if (desc3 === "Clouds") {

                    $(".img3").attr("src", "images/clouds.png")

                } else {

                }

                var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()



                // adds weather conditions to html
                $(".tempmin4").text("Temperature: " + tempminF + "°")
                $(".desc4").text(response.list[19].weather[0].main)
                $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
                $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())

                var date = response.list[19].dt_txt
                date = date.substr(0, 10)


                $(".date4").text(date)

                var desc4 = response.list[19].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc4 === "Clear") {

                    $(".img4").attr("src", "images/clear.png")
                }

                if (desc4 === "Snow") {

                    $(".img4").attr("src", "images/snow.png")

                }


                if (desc4 === "Rain") {

                    $(".img4").attr("src", "images/rain.png")

                } if (desc4 === "Clouds") {

                    $(".img4").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()

                $(".tempmin5").text("Temperature: " + tempminF + "°")
                $(".desc5").text(response.list[27].weather[0].main)
                $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
                $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())

                var date = response.list[27].dt_txt
                date = date.substr(0, 10)


                $(".date5").text(date)

                var desc5 = response.list[27].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc5 === "Clear") {

                    $(".img5").attr("src", "images/clear.png")
                }

                if (desc5 === "Snow") {

                    $(".img5").attr("src", "images/snow.png")

                }


                if (desc5 === "Rain") {

                    $(".img5").attr("src", "images/rain.png")

                } if (desc5 === "Clouds") {

                    $(".img5").attr("src", "images/clouds.png")

                } else {

                }


            })


        })

    })


    // box 1 of search history function

    $(".data1").on("click", function () {
        console.log("clicked")




        var inputCity = $(".data1").text()
        // inputCity = inputCity.replace(" ", "+");
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=3235ace4163bd2550b9b7922dde40788";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed();
            // var tempF = tempF.toFixed()


            // adds weather conditions to html
            $(".city").text(" in " + response.name)
            $(".desc1").text(response.weather[0].main)
            $(".temp").text("Current Temp: " + tempF + "°")
            $(".humidity").text("Humidity: " + response.main.humidity)
            $(".windspeed").text("Windspeed: " + response.wind.speed)




            var desc1 = response.weather[0].main

            // goes through to decide which weather Icon to use
            if (desc1 === "Clear") {

                $(".img1").attr("src", "images/clear.png")
                document.body.style.backgroundImage = "url('images/clearbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }

            if (desc1 === "Snow") {

                $(".img1").attr("src", "images/snow.png")
                document.body.style.backgroundImage = "url('images/snowbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }


            if (desc1 === "Rain") {

                $(".img1").attr("src", "images/rain.png")
                document.body.style.backgroundImage = "url('images/rain3bg.jpg')"
                document.body.style.backgroundSize = "100%"
            } if (desc1 === "Clouds") {

                $(".img1").attr("src", "images/clouds.png")
                document.body.style.backgroundImage = "url('images/cloudbg.jpg')"
                document.body.style.backgroundSize = "100%"
            } else {

            }

            var lon = response.coord.lon
            var lat = response.coord.lat


            var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=3235ace4163bd2550b9b7922dde40788&lat=" + lat + "&lon=" + lon;


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                $(".index1").text("UV Index: " + response.value.toFixed(1))


            })

            var APIKey = "3235ace4163bd2550b9b7922dde40788"
            var inputCity = $(".data1").text()
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


                // $(".city").text(" " + response.city.name)
                // $(".temp").text("Current Temp: " + tempF + "°")
                // $(".humidity").text("Humidity: " + response.list[0].main.humidity)
                // $(".windspeed").text("Windspeed: " + response.list[0].wind.speed)

                var tempminF = ((response.list[0].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[0].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // var icon1 = response.list[0].weather[0].icon

                // var image = $("<img>").attr("src", icon1);

                // today1.append(image)



                // adds weather conditions to html

                $(".tempmin2").text("Temperature: " + tempminF + "°")
                // $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
                $(".desc2").text(response.list[0].weather[0].main)
                $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
                $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())

                var date = response.list[0].dt_txt
                date = date.substr(0, 10)


                $(".date2").text(date)


                var desc2 = response.list[0].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc2 === "Clear") {

                    $(".img2").attr("src", "images/clear.png")
                }

                if (desc2 === "Snow") {

                    $(".img2").attr("src", "images/snow.png")

                }


                if (desc2 === "Rain") {

                    $(".img2").attr("src", "images/rain.png")

                } if (desc2 === "Clouds") {

                    $(".img2").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // adds weather conditions to html
                $(".tempmin3").text("Temperature: " + tempminF + "°")
                $(".desc3").text(response.list[11].weather[0].main)
                $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
                $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())
                var date = response.list[11].dt_txt
                date = date.substr(0, 10)


                $(".date3").text(date)


                var desc3 = response.list[11].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc3 === "Clear") {

                    $(".img3").attr("src", "images/clear.png")
                }

                if (desc3 === "Snow") {

                    $(".img3").attr("src", "images/snow.png")

                }


                if (desc3 === "Rain") {

                    $(".img3").attr("src", "images/rain.png")

                } if (desc3 === "Clouds") {

                    $(".img3").attr("src", "images/clouds.png")

                } else {

                }

                var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()



                // adds weather conditions to html
                $(".tempmin4").text("Temperature: " + tempminF + "°")
                $(".desc4").text(response.list[19].weather[0].main)
                $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
                $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())

                var date = response.list[19].dt_txt
                date = date.substr(0, 10)


                $(".date4").text(date)

                var desc4 = response.list[19].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc4 === "Clear") {

                    $(".img4").attr("src", "images/clear.png")
                }

                if (desc4 === "Snow") {

                    $(".img4").attr("src", "images/snow.png")

                }


                if (desc4 === "Rain") {

                    $(".img4").attr("src", "images/rain.png")

                } if (desc4 === "Clouds") {

                    $(".img4").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()

                $(".tempmin5").text("Temperature: " + tempminF + "°")
                $(".desc5").text(response.list[27].weather[0].main)
                $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
                $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())

                var date = response.list[27].dt_txt
                date = date.substr(0, 10)


                $(".date5").text(date)

                var desc5 = response.list[27].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc5 === "Clear") {

                    $(".img5").attr("src", "images/clear.png")
                }

                if (desc5 === "Snow") {

                    $(".img5").attr("src", "images/snow.png")

                }


                if (desc5 === "Rain") {

                    $(".img5").attr("src", "images/rain.png")

                } if (desc5 === "Clouds") {

                    $(".img5").attr("src", "images/clouds.png")

                } else {

                }


            })


        })

    })



    // this function saves the last search on refresh



    function saveOnRefresh() {


        // Storing the city



        var searchItem = $(this).prev().val()

        // grabbing string of cities out of local storage
        var item = localStorage.getItem("searchItem", (searchItem))


        // turning the string of cities into an array
        var ar = item.split(',');



        // grabbing the last city searched out of an array no matter how big of array
        var lastCitySearchedArray = ar.slice(-1)[0]

        console.log(lastCitySearchedArray);



        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + lastCitySearchedArray + "&APPID=3235ace4163bd2550b9b7922dde40788";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed();
            // var tempF = tempF.toFixed()


            // adds weather conditions to html
            $(".city").text(" in " + response.name)
            $(".desc1").text(response.weather[0].main)
            $(".temp").text("Current Temp: " + tempF + "°")
            $(".humidity").text("Humidity: " + response.main.humidity)
            $(".windspeed").text("Windspeed: " + response.wind.speed)




            var desc1 = response.weather[0].main

            // goes through to decide which weather Icon to use
            if (desc1 === "Clear") {

                $(".img1").attr("src", "images/clear.png")
                document.body.style.backgroundImage = "url('images/clearbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }

            if (desc1 === "Snow") {

                $(".img1").attr("src", "images/snow.png")
                document.body.style.backgroundImage = "url('images/snowbg.jpg')"
                document.body.style.backgroundSize = "100%"
            }


            if (desc1 === "Rain") {

                $(".img1").attr("src", "images/rain.png")
                document.body.style.backgroundImage = "url('images/rain3bg.jpg')"
                document.body.style.backgroundSize = "100%"
            } if (desc1 === "Clouds") {

                $(".img1").attr("src", "images/clouds.png")
                document.body.style.backgroundImage = "url('images/cloudbg.jpg')"
                document.body.style.backgroundSize = "100%"
            } else {

            }

            var lon = response.coord.lon
            var lat = response.coord.lat


            var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=3235ace4163bd2550b9b7922dde40788&lat=" + lat + "&lon=" + lon;


            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                $(".index1").text("UV Index: " + response.value.toFixed(1))


            })

            var APIKey = "3235ace4163bd2550b9b7922dde40788"
            var inputCity = $("#city-search").val().trim();
            // inputCity = inputCity.replace(" ", "+");
            var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + lastCitySearchedArray +
                "&APPID=" + APIKey;
            // var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=Salt+Lake+City&APPID=3235ace4163bd2550b9b7922dde40788"

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                var tempF = ((response.list[0].main.temp - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // $(".city").text(" " + response.city.name)
                // $(".temp").text("Current Temp: " + tempF + "°")
                // $(".humidity").text("Humidity: " + response.list[0].main.humidity)
                // $(".windspeed").text("Windspeed: " + response.list[0].wind.speed)

                var tempminF = ((response.list[0].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[0].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // var icon1 = response.list[0].weather[0].icon

                // var image = $("<img>").attr("src", icon1);

                // today1.append(image)



                // adds weather conditions to html

                $(".tempmin2").text("Temperature: " + tempminF + "°")
                // $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
                $(".desc2").text(response.list[0].weather[0].main)
                $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
                $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())

                var date = response.list[0].dt_txt
                date = date.substr(0, 10)


                $(".date2").text(date)


                var desc2 = response.list[0].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc2 === "Clear") {

                    $(".img2").attr("src", "images/clear.png")
                }

                if (desc2 === "Snow") {

                    $(".img2").attr("src", "images/snow.png")

                }


                if (desc2 === "Rain") {

                    $(".img2").attr("src", "images/rain.png")

                } if (desc2 === "Clouds") {

                    $(".img2").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // adds weather conditions to html
                $(".tempmin3").text("Temperature: " + tempminF + "°")
                $(".desc3").text(response.list[11].weather[0].main)
                $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
                $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())
                var date = response.list[11].dt_txt
                date = date.substr(0, 10)


                $(".date3").text(date)


                var desc3 = response.list[11].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc3 === "Clear") {

                    $(".img3").attr("src", "images/clear.png")
                }

                if (desc3 === "Snow") {

                    $(".img3").attr("src", "images/snow.png")

                }


                if (desc3 === "Rain") {

                    $(".img3").attr("src", "images/rain.png")

                } if (desc3 === "Clouds") {

                    $(".img3").attr("src", "images/clouds.png")

                } else {

                }

                var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()



                // adds weather conditions to html
                $(".tempmin4").text("Temperature: " + tempminF + "°")
                $(".desc4").text(response.list[19].weather[0].main)
                $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
                $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())

                var date = response.list[19].dt_txt
                date = date.substr(0, 10)


                $(".date4").text(date)

                var desc4 = response.list[19].weather[0].main



                // goes through to decide which weather Icon to use
                if (desc4 === "Clear") {

                    $(".img4").attr("src", "images/clear.png")
                }

                if (desc4 === "Snow") {

                    $(".img4").attr("src", "images/snow.png")

                }


                if (desc4 === "Rain") {

                    $(".img4").attr("src", "images/rain.png")

                } if (desc4 === "Clouds") {

                    $(".img4").attr("src", "images/clouds.png")

                } else {

                }


                var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()

                $(".tempmin5").text("Temperature: " + tempminF + "°")
                $(".desc5").text(response.list[27].weather[0].main)
                $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
                $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())

                var date = response.list[27].dt_txt
                date = date.substr(0, 10)


                $(".date5").text(date)

                var desc5 = response.list[27].weather[0].main


                // goes through to decide which weather Icon to use
                if (desc5 === "Clear") {

                    $(".img5").attr("src", "images/clear.png")
                }

                if (desc5 === "Snow") {

                    $(".img5").attr("src", "images/snow.png")

                }


                if (desc5 === "Rain") {

                    $(".img5").attr("src", "images/rain.png")

                } if (desc5 === "Clouds") {

                    $(".img5").attr("src", "images/clouds.png")

                } else {

                }


            })


        })

        $(".data5").on("click", function () {
            console.log("clicked")
            var inputCity = $(".data5").text()

            // work in progress

            var inputCity = $(".data5").text()
            // inputCity = inputCity.replace(" ", "+");
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=3235ace4163bd2550b9b7922dde40788";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // adds weather conditions to html
                $(".city").text(" in " + response.name)
                $(".desc1").text(response.weather[0].main)
                $(".temp").text("Current Temp: " + tempF + "°")
                $(".humidity").text("Humidity: " + response.main.humidity)
                $(".windspeed").text("Windspeed: " + response.wind.speed)




                var desc1 = response.weather[0].main

                // goes through to decide which weather Icon to use
                if (desc1 === "Clear") {

                    $(".img1").attr("src", "images/clear.png")
                    document.body.style.backgroundImage = "url('images/clearbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                }

                if (desc1 === "Snow") {

                    $(".img1").attr("src", "images/snow.png")
                    document.body.style.backgroundImage = "url('images/snowbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                }


                if (desc1 === "Rain") {

                    $(".img1").attr("src", "images/rain.png")
                    document.body.style.backgroundImage = "url('images/rain3bg.jpg')"
                    document.body.style.backgroundSize = "100%"
                } if (desc1 === "Clouds") {

                    $(".img1").attr("src", "images/clouds.png")
                    document.body.style.backgroundImage = "url('images/cloudbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                } else {

                }

                var lon = response.coord.lon
                var lat = response.coord.lat


                var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=3235ace4163bd2550b9b7922dde40788&lat=" + lat + "&lon=" + lon;


                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {

                    $(".index1").text("UV Index: " + response.value.toFixed(1))


                })

                var APIKey = "3235ace4163bd2550b9b7922dde40788"
                var inputCity = $(".data5").text()
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


                    // $(".city").text(" " + response.city.name)
                    // $(".temp").text("Current Temp: " + tempF + "°")
                    // $(".humidity").text("Humidity: " + response.list[0].main.humidity)
                    // $(".windspeed").text("Windspeed: " + response.list[0].wind.speed)

                    var tempminF = ((response.list[0].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[0].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()


                    // var icon1 = response.list[0].weather[0].icon

                    // var image = $("<img>").attr("src", icon1);

                    // today1.append(image)



                    // adds weather conditions to html

                    $(".tempmin2").text("Temperature: " + tempminF + "°")
                    // $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
                    $(".desc2").text(response.list[0].weather[0].main)
                    $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
                    $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())

                    var date = response.list[0].dt_txt
                    date = date.substr(0, 10)


                    $(".date2").text(date)


                    var desc2 = response.list[0].weather[0].main


                    // goes through to decide which weather Icon to use
                    if (desc2 === "Clear") {

                        $(".img2").attr("src", "images/clear.png")
                    }

                    if (desc2 === "Snow") {

                        $(".img2").attr("src", "images/snow.png")

                    }


                    if (desc2 === "Rain") {

                        $(".img2").attr("src", "images/rain.png")

                    } if (desc2 === "Clouds") {

                        $(".img2").attr("src", "images/clouds.png")

                    } else {

                    }


                    var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()


                    // adds weather conditions to html
                    $(".tempmin3").text("Temperature: " + tempminF + "°")
                    $(".desc3").text(response.list[11].weather[0].main)
                    $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
                    $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())
                    var date = response.list[11].dt_txt
                    date = date.substr(0, 10)


                    $(".date3").text(date)


                    var desc3 = response.list[11].weather[0].main



                    // goes through to decide which weather Icon to use
                    if (desc3 === "Clear") {

                        $(".img3").attr("src", "images/clear.png")
                    }

                    if (desc3 === "Snow") {

                        $(".img3").attr("src", "images/snow.png")

                    }


                    if (desc3 === "Rain") {

                        $(".img3").attr("src", "images/rain.png")

                    } if (desc3 === "Clouds") {

                        $(".img3").attr("src", "images/clouds.png")

                    } else {

                    }

                    var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()



                    // adds weather conditions to html
                    $(".tempmin4").text("Temperature: " + tempminF + "°")
                    $(".desc4").text(response.list[19].weather[0].main)
                    $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
                    $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())

                    var date = response.list[19].dt_txt
                    date = date.substr(0, 10)


                    $(".date4").text(date)

                    var desc4 = response.list[19].weather[0].main



                    // goes through to decide which weather Icon to use
                    if (desc4 === "Clear") {

                        $(".img4").attr("src", "images/clear.png")
                    }

                    if (desc4 === "Snow") {

                        $(".img4").attr("src", "images/snow.png")

                    }


                    if (desc4 === "Rain") {

                        $(".img4").attr("src", "images/rain.png")

                    } if (desc4 === "Clouds") {

                        $(".img4").attr("src", "images/clouds.png")

                    } else {

                    }


                    var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()

                    $(".tempmin5").text("Temperature: " + tempminF + "°")
                    $(".desc5").text(response.list[27].weather[0].main)
                    $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
                    $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())

                    var date = response.list[27].dt_txt
                    date = date.substr(0, 10)


                    $(".date5").text(date)

                    var desc5 = response.list[27].weather[0].main


                    // goes through to decide which weather Icon to use
                    if (desc5 === "Clear") {

                        $(".img5").attr("src", "images/clear.png")
                    }

                    if (desc5 === "Snow") {

                        $(".img5").attr("src", "images/snow.png")

                    }


                    if (desc5 === "Rain") {

                        $(".img5").attr("src", "images/rain.png")

                    } if (desc5 === "Clouds") {

                        $(".img5").attr("src", "images/clouds.png")

                    } else {

                    }


                })


            })

        })


        // box 4 of search history function

        $(".data4").on("click", function () {
            console.log("clicked")




            var inputCity = $(".data4").text()
            // inputCity = inputCity.replace(" ", "+");
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=3235ace4163bd2550b9b7922dde40788";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // adds weather conditions to html
                $(".city").text(" in " + response.name)
                $(".desc1").text(response.weather[0].main)
                $(".temp").text("Current Temp: " + tempF + "°")
                $(".humidity").text("Humidity: " + response.main.humidity)
                $(".windspeed").text("Windspeed: " + response.wind.speed)




                var desc1 = response.weather[0].main

                // goes through to decide which weather Icon to use
                if (desc1 === "Clear") {

                    $(".img1").attr("src", "images/clear.png")
                    document.body.style.backgroundImage = "url('images/clearbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                }

                if (desc1 === "Snow") {

                    $(".img1").attr("src", "images/snow.png")
                    document.body.style.backgroundImage = "url('images/snowbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                }


                if (desc1 === "Rain") {

                    $(".img1").attr("src", "images/rain.png")
                    document.body.style.backgroundImage = "url('images/rain3bg.jpg')"
                    document.body.style.backgroundSize = "100%"
                } if (desc1 === "Clouds") {

                    $(".img1").attr("src", "images/clouds.png")
                    document.body.style.backgroundImage = "url('images/cloudbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                } else {

                }

                var lon = response.coord.lon
                var lat = response.coord.lat


                var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=3235ace4163bd2550b9b7922dde40788&lat=" + lat + "&lon=" + lon;


                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {

                    $(".index1").text("UV Index: " + response.value.toFixed(1))


                })

                var APIKey = "3235ace4163bd2550b9b7922dde40788"
                var inputCity = $(".data4").text()
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


                    // $(".city").text(" " + response.city.name)
                    // $(".temp").text("Current Temp: " + tempF + "°")
                    // $(".humidity").text("Humidity: " + response.list[0].main.humidity)
                    // $(".windspeed").text("Windspeed: " + response.list[0].wind.speed)

                    var tempminF = ((response.list[0].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[0].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()


                    // var icon1 = response.list[0].weather[0].icon

                    // var image = $("<img>").attr("src", icon1);

                    // today1.append(image)



                    // adds weather conditions to html

                    $(".tempmin2").text("Temperature: " + tempminF + "°")
                    // $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
                    $(".desc2").text(response.list[0].weather[0].main)
                    $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
                    $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())

                    var date = response.list[0].dt_txt
                    date = date.substr(0, 10)


                    $(".date2").text(date)


                    var desc2 = response.list[0].weather[0].main


                    // goes through to decide which weather Icon to use
                    if (desc2 === "Clear") {

                        $(".img2").attr("src", "images/clear.png")
                    }

                    if (desc2 === "Snow") {

                        $(".img2").attr("src", "images/snow.png")

                    }


                    if (desc2 === "Rain") {

                        $(".img2").attr("src", "images/rain.png")

                    } if (desc2 === "Clouds") {

                        $(".img2").attr("src", "images/clouds.png")

                    } else {

                    }


                    var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()


                    // adds weather conditions to html
                    $(".tempmin3").text("Temperature: " + tempminF + "°")
                    $(".desc3").text(response.list[11].weather[0].main)
                    $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
                    $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())
                    var date = response.list[11].dt_txt
                    date = date.substr(0, 10)


                    $(".date3").text(date)


                    var desc3 = response.list[11].weather[0].main



                    // goes through to decide which weather Icon to use
                    if (desc3 === "Clear") {

                        $(".img3").attr("src", "images/clear.png")
                    }

                    if (desc3 === "Snow") {

                        $(".img3").attr("src", "images/snow.png")

                    }


                    if (desc3 === "Rain") {

                        $(".img3").attr("src", "images/rain.png")

                    } if (desc3 === "Clouds") {

                        $(".img3").attr("src", "images/clouds.png")

                    } else {

                    }

                    var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()



                    // adds weather conditions to html
                    $(".tempmin4").text("Temperature: " + tempminF + "°")
                    $(".desc4").text(response.list[19].weather[0].main)
                    $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
                    $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())

                    var date = response.list[19].dt_txt
                    date = date.substr(0, 10)


                    $(".date4").text(date)

                    var desc4 = response.list[19].weather[0].main



                    // goes through to decide which weather Icon to use
                    if (desc4 === "Clear") {

                        $(".img4").attr("src", "images/clear.png")
                    }

                    if (desc4 === "Snow") {

                        $(".img4").attr("src", "images/snow.png")

                    }


                    if (desc4 === "Rain") {

                        $(".img4").attr("src", "images/rain.png")

                    } if (desc4 === "Clouds") {

                        $(".img4").attr("src", "images/clouds.png")

                    } else {

                    }


                    var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()

                    $(".tempmin5").text("Temperature: " + tempminF + "°")
                    $(".desc5").text(response.list[27].weather[0].main)
                    $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
                    $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())

                    var date = response.list[27].dt_txt
                    date = date.substr(0, 10)


                    $(".date5").text(date)

                    var desc5 = response.list[27].weather[0].main


                    // goes through to decide which weather Icon to use
                    if (desc5 === "Clear") {

                        $(".img5").attr("src", "images/clear.png")
                    }

                    if (desc5 === "Snow") {

                        $(".img5").attr("src", "images/snow.png")

                    }


                    if (desc5 === "Rain") {

                        $(".img5").attr("src", "images/rain.png")

                    } if (desc5 === "Clouds") {

                        $(".img5").attr("src", "images/clouds.png")

                    } else {

                    }


                })


            })

        })


        // box 3 of search history function

        $(".data3").on("click", function () {
            console.log("clicked")




            var inputCity = $(".data3").text()
            // inputCity = inputCity.replace(" ", "+");
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=3235ace4163bd2550b9b7922dde40788";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // adds weather conditions to html
                $(".city").text(" in " + response.name)
                $(".desc1").text(response.weather[0].main)
                $(".temp").text("Current Temp: " + tempF + "°")
                $(".humidity").text("Humidity: " + response.main.humidity)
                $(".windspeed").text("Windspeed: " + response.wind.speed)




                var desc1 = response.weather[0].main

                // goes through to decide which weather Icon to use
                if (desc1 === "Clear") {

                    $(".img1").attr("src", "images/clear.png")
                    document.body.style.backgroundImage = "url('images/clearbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                }

                if (desc1 === "Snow") {

                    $(".img1").attr("src", "images/snow.png")
                    document.body.style.backgroundImage = "url('images/snowbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                }


                if (desc1 === "Rain") {

                    $(".img1").attr("src", "images/rain.png")
                    document.body.style.backgroundImage = "url('images/rain3bg.jpg')"
                    document.body.style.backgroundSize = "100%"
                } if (desc1 === "Clouds") {

                    $(".img1").attr("src", "images/clouds.png")
                    document.body.style.backgroundImage = "url('images/cloudbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                } else {

                }

                var lon = response.coord.lon
                var lat = response.coord.lat


                var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=3235ace4163bd2550b9b7922dde40788&lat=" + lat + "&lon=" + lon;


                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {

                    $(".index1").text("UV Index: " + response.value.toFixed(1))


                })

                var APIKey = "3235ace4163bd2550b9b7922dde40788"
                var inputCity = $(".data3").text()
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


                    // $(".city").text(" " + response.city.name)
                    // $(".temp").text("Current Temp: " + tempF + "°")
                    // $(".humidity").text("Humidity: " + response.list[0].main.humidity)
                    // $(".windspeed").text("Windspeed: " + response.list[0].wind.speed)

                    var tempminF = ((response.list[0].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[0].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()


                    // var icon1 = response.list[0].weather[0].icon

                    // var image = $("<img>").attr("src", icon1);

                    // today1.append(image)



                    // adds weather conditions to html

                    $(".tempmin2").text("Temperature: " + tempminF + "°")
                    // $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
                    $(".desc2").text(response.list[0].weather[0].main)
                    $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
                    $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())

                    var date = response.list[0].dt_txt
                    date = date.substr(0, 10)


                    $(".date2").text(date)


                    var desc2 = response.list[0].weather[0].main


                    // goes through to decide which weather Icon to use
                    if (desc2 === "Clear") {

                        $(".img2").attr("src", "images/clear.png")
                    }

                    if (desc2 === "Snow") {

                        $(".img2").attr("src", "images/snow.png")

                    }


                    if (desc2 === "Rain") {

                        $(".img2").attr("src", "images/rain.png")

                    } if (desc2 === "Clouds") {

                        $(".img2").attr("src", "images/clouds.png")

                    } else {

                    }


                    var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()


                    // adds weather conditions to html
                    $(".tempmin3").text("Temperature: " + tempminF + "°")
                    $(".desc3").text(response.list[11].weather[0].main)
                    $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
                    $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())
                    var date = response.list[11].dt_txt
                    date = date.substr(0, 10)


                    $(".date3").text(date)


                    var desc3 = response.list[11].weather[0].main



                    // goes through to decide which weather Icon to use
                    if (desc3 === "Clear") {

                        $(".img3").attr("src", "images/clear.png")
                    }

                    if (desc3 === "Snow") {

                        $(".img3").attr("src", "images/snow.png")

                    }


                    if (desc3 === "Rain") {

                        $(".img3").attr("src", "images/rain.png")

                    } if (desc3 === "Clouds") {

                        $(".img3").attr("src", "images/clouds.png")

                    } else {

                    }

                    var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()



                    // adds weather conditions to html
                    $(".tempmin4").text("Temperature: " + tempminF + "°")
                    $(".desc4").text(response.list[19].weather[0].main)
                    $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
                    $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())

                    var date = response.list[19].dt_txt
                    date = date.substr(0, 10)


                    $(".date4").text(date)

                    var desc4 = response.list[19].weather[0].main



                    // goes through to decide which weather Icon to use
                    if (desc4 === "Clear") {

                        $(".img4").attr("src", "images/clear.png")
                    }

                    if (desc4 === "Snow") {

                        $(".img4").attr("src", "images/snow.png")

                    }


                    if (desc4 === "Rain") {

                        $(".img4").attr("src", "images/rain.png")

                    } if (desc4 === "Clouds") {

                        $(".img4").attr("src", "images/clouds.png")

                    } else {

                    }


                    var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()

                    $(".tempmin5").text("Temperature: " + tempminF + "°")
                    $(".desc5").text(response.list[27].weather[0].main)
                    $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
                    $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())

                    var date = response.list[27].dt_txt
                    date = date.substr(0, 10)


                    $(".date5").text(date)

                    var desc5 = response.list[27].weather[0].main


                    // goes through to decide which weather Icon to use
                    if (desc5 === "Clear") {

                        $(".img5").attr("src", "images/clear.png")
                    }

                    if (desc5 === "Snow") {

                        $(".img5").attr("src", "images/snow.png")

                    }


                    if (desc5 === "Rain") {

                        $(".img5").attr("src", "images/rain.png")

                    } if (desc5 === "Clouds") {

                        $(".img5").attr("src", "images/clouds.png")

                    } else {

                    }


                })


            })

        })


        // box 2 of search history function

        $(".data2").on("click", function () {
            console.log("clicked")




            var inputCity = $(".data2").text()
            // inputCity = inputCity.replace(" ", "+");
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=3235ace4163bd2550b9b7922dde40788";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // adds weather conditions to html
                $(".city").text(" in " + response.name)
                $(".desc1").text(response.weather[0].main)
                $(".temp").text("Current Temp: " + tempF + "°")
                $(".humidity").text("Humidity: " + response.main.humidity)
                $(".windspeed").text("Windspeed: " + response.wind.speed)




                var desc1 = response.weather[0].main

                // goes through to decide which weather Icon to use
                if (desc1 === "Clear") {

                    $(".img1").attr("src", "images/clear.png")
                    document.body.style.backgroundImage = "url('images/clearbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                }

                if (desc1 === "Snow") {

                    $(".img1").attr("src", "images/snow.png")
                    document.body.style.backgroundImage = "url('images/snowbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                }


                if (desc1 === "Rain") {

                    $(".img1").attr("src", "images/rain.png")
                    document.body.style.backgroundImage = "url('images/rain3bg.jpg')"
                    document.body.style.backgroundSize = "100%"
                } if (desc1 === "Clouds") {

                    $(".img1").attr("src", "images/clouds.png")
                    document.body.style.backgroundImage = "url('images/cloudbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                } else {

                }

                var lon = response.coord.lon
                var lat = response.coord.lat


                var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=3235ace4163bd2550b9b7922dde40788&lat=" + lat + "&lon=" + lon;


                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {

                    $(".index1").text("UV Index: " + response.value.toFixed(1))


                })

                var APIKey = "3235ace4163bd2550b9b7922dde40788"
                var inputCity = $(".data2").text()
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


                    // $(".city").text(" " + response.city.name)
                    // $(".temp").text("Current Temp: " + tempF + "°")
                    // $(".humidity").text("Humidity: " + response.list[0].main.humidity)
                    // $(".windspeed").text("Windspeed: " + response.list[0].wind.speed)

                    var tempminF = ((response.list[0].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[0].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()


                    // var icon1 = response.list[0].weather[0].icon

                    // var image = $("<img>").attr("src", icon1);

                    // today1.append(image)



                    // adds weather conditions to html

                    $(".tempmin2").text("Temperature: " + tempminF + "°")
                    // $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
                    $(".desc2").text(response.list[0].weather[0].main)
                    $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
                    $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())

                    var date = response.list[0].dt_txt
                    date = date.substr(0, 10)


                    $(".date2").text(date)


                    var desc2 = response.list[0].weather[0].main


                    // goes through to decide which weather Icon to use
                    if (desc2 === "Clear") {

                        $(".img2").attr("src", "images/clear.png")
                    }

                    if (desc2 === "Snow") {

                        $(".img2").attr("src", "images/snow.png")

                    }


                    if (desc2 === "Rain") {

                        $(".img2").attr("src", "images/rain.png")

                    } if (desc2 === "Clouds") {

                        $(".img2").attr("src", "images/clouds.png")

                    } else {

                    }


                    var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()


                    // adds weather conditions to html
                    $(".tempmin3").text("Temperature: " + tempminF + "°")
                    $(".desc3").text(response.list[11].weather[0].main)
                    $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
                    $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())
                    var date = response.list[11].dt_txt
                    date = date.substr(0, 10)


                    $(".date3").text(date)


                    var desc3 = response.list[11].weather[0].main



                    // goes through to decide which weather Icon to use
                    if (desc3 === "Clear") {

                        $(".img3").attr("src", "images/clear.png")
                    }

                    if (desc3 === "Snow") {

                        $(".img3").attr("src", "images/snow.png")

                    }


                    if (desc3 === "Rain") {

                        $(".img3").attr("src", "images/rain.png")

                    } if (desc3 === "Clouds") {

                        $(".img3").attr("src", "images/clouds.png")

                    } else {

                    }

                    var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()



                    // adds weather conditions to html
                    $(".tempmin4").text("Temperature: " + tempminF + "°")
                    $(".desc4").text(response.list[19].weather[0].main)
                    $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
                    $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())

                    var date = response.list[19].dt_txt
                    date = date.substr(0, 10)


                    $(".date4").text(date)

                    var desc4 = response.list[19].weather[0].main



                    // goes through to decide which weather Icon to use
                    if (desc4 === "Clear") {

                        $(".img4").attr("src", "images/clear.png")
                    }

                    if (desc4 === "Snow") {

                        $(".img4").attr("src", "images/snow.png")

                    }


                    if (desc4 === "Rain") {

                        $(".img4").attr("src", "images/rain.png")

                    } if (desc4 === "Clouds") {

                        $(".img4").attr("src", "images/clouds.png")

                    } else {

                    }


                    var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()

                    $(".tempmin5").text("Temperature: " + tempminF + "°")
                    $(".desc5").text(response.list[27].weather[0].main)
                    $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
                    $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())

                    var date = response.list[27].dt_txt
                    date = date.substr(0, 10)


                    $(".date5").text(date)

                    var desc5 = response.list[27].weather[0].main


                    // goes through to decide which weather Icon to use
                    if (desc5 === "Clear") {

                        $(".img5").attr("src", "images/clear.png")
                    }

                    if (desc5 === "Snow") {

                        $(".img5").attr("src", "images/snow.png")

                    }


                    if (desc5 === "Rain") {

                        $(".img5").attr("src", "images/rain.png")

                    } if (desc5 === "Clouds") {

                        $(".img5").attr("src", "images/clouds.png")

                    } else {

                    }


                })


            })

        })


        // box 1 of search history function

        $(".data1").on("click", function () {
            console.log("clicked")




            var inputCity = $(".data1").text()
            // inputCity = inputCity.replace(" ", "+");
            var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity + "&APPID=3235ace4163bd2550b9b7922dde40788";

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {

                var tempF = ((response.main.temp - 273.15) * 1.80 + 32).toFixed();
                // var tempF = tempF.toFixed()


                // adds weather conditions to html
                $(".city").text(" in " + response.name)
                $(".desc1").text(response.weather[0].main)
                $(".temp").text("Current Temp: " + tempF + "°")
                $(".humidity").text("Humidity: " + response.main.humidity)
                $(".windspeed").text("Windspeed: " + response.wind.speed)




                var desc1 = response.weather[0].main

                // goes through to decide which weather Icon to use
                if (desc1 === "Clear") {

                    $(".img1").attr("src", "images/clear.png")
                    document.body.style.backgroundImage = "url('images/clearbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                }

                if (desc1 === "Snow") {

                    $(".img1").attr("src", "images/snow.png")
                    document.body.style.backgroundImage = "url('images/snowbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                }


                if (desc1 === "Rain") {

                    $(".img1").attr("src", "images/rain.png")
                    document.body.style.backgroundImage = "url('images/rain3bg.jpg')"
                    document.body.style.backgroundSize = "100%"
                } if (desc1 === "Clouds") {

                    $(".img1").attr("src", "images/clouds.png")
                    document.body.style.backgroundImage = "url('images/cloudbg.jpg')"
                    document.body.style.backgroundSize = "100%"
                } else {

                }

                var lon = response.coord.lon
                var lat = response.coord.lat


                var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=3235ace4163bd2550b9b7922dde40788&lat=" + lat + "&lon=" + lon;


                $.ajax({
                    url: queryURL,
                    method: "GET"
                }).then(function (response) {

                    $(".index1").text("UV Index: " + response.value.toFixed(1))


                })

                var APIKey = "3235ace4163bd2550b9b7922dde40788"
                var inputCity = $(".data1").text()
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


                    // $(".city").text(" " + response.city.name)
                    // $(".temp").text("Current Temp: " + tempF + "°")
                    // $(".humidity").text("Humidity: " + response.list[0].main.humidity)
                    // $(".windspeed").text("Windspeed: " + response.list[0].wind.speed)

                    var tempminF = ((response.list[0].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[0].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()


                    // var icon1 = response.list[0].weather[0].icon

                    // var image = $("<img>").attr("src", icon1);

                    // today1.append(image)



                    // adds weather conditions to html

                    $(".tempmin2").text("Temperature: " + tempminF + "°")
                    // $(".tempmax2").text("Max Temp: " + tempmaxF + "°")
                    $(".desc2").text(response.list[0].weather[0].main)
                    $(".humidity2").text("Humidity: " + response.list[0].main.humidity)
                    $(".windspeed2").text("Windspeed: " + response.list[0].wind.speed.toFixed())

                    var date = response.list[0].dt_txt
                    date = date.substr(0, 10)


                    $(".date2").text(date)


                    var desc2 = response.list[0].weather[0].main


                    // goes through to decide which weather Icon to use
                    if (desc2 === "Clear") {

                        $(".img2").attr("src", "images/clear.png")
                    }

                    if (desc2 === "Snow") {

                        $(".img2").attr("src", "images/snow.png")

                    }


                    if (desc2 === "Rain") {

                        $(".img2").attr("src", "images/rain.png")

                    } if (desc2 === "Clouds") {

                        $(".img2").attr("src", "images/clouds.png")

                    } else {

                    }


                    var tempminF = ((response.list[11].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[11].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()


                    // adds weather conditions to html
                    $(".tempmin3").text("Temperature: " + tempminF + "°")
                    $(".desc3").text(response.list[11].weather[0].main)
                    $(".humidity3").text("Humidity: " + response.list[11].main.humidity)
                    $(".windspeed3").text("Windspeed: " + response.list[11].wind.speed.toFixed())
                    var date = response.list[11].dt_txt
                    date = date.substr(0, 10)


                    $(".date3").text(date)


                    var desc3 = response.list[11].weather[0].main



                    // goes through to decide which weather Icon to use
                    if (desc3 === "Clear") {

                        $(".img3").attr("src", "images/clear.png")
                    }

                    if (desc3 === "Snow") {

                        $(".img3").attr("src", "images/snow.png")

                    }


                    if (desc3 === "Rain") {

                        $(".img3").attr("src", "images/rain.png")

                    } if (desc3 === "Clouds") {

                        $(".img3").attr("src", "images/clouds.png")

                    } else {

                    }

                    var tempminF = ((response.list[19].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[19].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()



                    // adds weather conditions to html
                    $(".tempmin4").text("Temperature: " + tempminF + "°")
                    $(".desc4").text(response.list[19].weather[0].main)
                    $(".humidity4").text("Humidity: " + response.list[19].main.humidity)
                    $(".windspeed4").text("Windspeed: " + response.list[19].wind.speed.toFixed())

                    var date = response.list[19].dt_txt
                    date = date.substr(0, 10)


                    $(".date4").text(date)

                    var desc4 = response.list[19].weather[0].main



                    // goes through to decide which weather Icon to use
                    if (desc4 === "Clear") {

                        $(".img4").attr("src", "images/clear.png")
                    }

                    if (desc4 === "Snow") {

                        $(".img4").attr("src", "images/snow.png")

                    }


                    if (desc4 === "Rain") {

                        $(".img4").attr("src", "images/rain.png")

                    } if (desc4 === "Clouds") {

                        $(".img4").attr("src", "images/clouds.png")

                    } else {

                    }


                    var tempminF = ((response.list[27].main.temp_min - 273.15) * 1.80 + 32).toFixed();
                    var tempmaxF = ((response.list[27].main.temp_max - 273.15) * 1.80 + 32).toFixed();
                    // var tempF = tempF.toFixed()

                    $(".tempmin5").text("Temperature: " + tempminF + "°")
                    $(".desc5").text(response.list[27].weather[0].main)
                    $(".humidity5").text("Humidity: " + response.list[27].main.humidity)
                    $(".windspeed5").text("Windspeed: " + response.list[27].wind.speed.toFixed())

                    var date = response.list[27].dt_txt
                    date = date.substr(0, 10)


                    $(".date5").text(date)

                    var desc5 = response.list[27].weather[0].main


                    // goes through to decide which weather Icon to use
                    if (desc5 === "Clear") {

                        $(".img5").attr("src", "images/clear.png")
                    }

                    if (desc5 === "Snow") {

                        $(".img5").attr("src", "images/snow.png")

                    }


                    if (desc5 === "Rain") {

                        $(".img5").attr("src", "images/rain.png")

                    } if (desc5 === "Clouds") {

                        $(".img5").attr("src", "images/clouds.png")

                    } else {

                    }


                })


            })

        })




    }

    saveOnRefresh()
})