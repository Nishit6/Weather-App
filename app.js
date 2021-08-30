const form = document.querySelector("form");

const span = document.getElementsByTagName("span");
$(".alert").hide();
$("span").hide();
async function getWeather(searchText) {
  const apiKey = "39b80372d332a70481350ffe138edb3c";

  const fetchedData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=metric`
  );

  const response = await fetchedData.json();

  console.log(response);

  if (searchText === "") {
    $(".alert").show();
    $("#divs").hide();
  }

  // city name

  $("#city").html(response.name + "(" + response.sys.country + ")");

  //  current Temp.

  $("#currentTemp").html(` ${response.main.temp}°C `);
  $("#feelsLike").html(` Feels Like :${response.main.feels_like}°C`);

  $("span").show();

  // max and min

  $("#max_min").html(
    `Max : ${response.main.temp_max}°C | Min : ${response.main.temp_min}°C`
  );

  //    humidity
  $("#humidity").html(` Humidity : ${response.main.humidity}%`);

  // wind
  const kmPH = 3.6;
  const wind = Math.floor(response.wind.speed * kmPH);

  $("#wind")
    .html(`Wind <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
   <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
 </svg> : ${wind} Kmph`);

  // weather arry

  for (let item of response.weather) {
    if (item) {
      // weather info - clouds,haze,etc
      $("#weather").html(` ${item.main}`);

      // icon
      const iconRes = item.icon;
      const iconUrl = "http://openweathermap.org/img/w/" + iconRes + ".png";
      let icon = document.getElementById("icon");
      let iconImg = document.createElement("img");
      $("#icon").attr("src", iconUrl);
      icon.appendChild(iconImg);
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchText = form.elements[0].value;
  console.log(searchText);
  getWeather(searchText);
  form.elements[0].value = "";
});
