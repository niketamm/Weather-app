//feature1 week4
let dateoutput = document.querySelector("#date");
function formatDate() {
  let now = new Date();

  let dayList = [
    `Sunday`,
    `Monday`,
    `Tueday`,
    `Wednesday`,
    `Thursday`,
    `Friday`,
    `Saturday`
  ];

  let monthList = [
    `January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`
  ];

  let monthListShort = [
    `Jan`,
    `Feb`,
    `Mar`,
    `Apr`,
    `May`,
    `Jun`,
    `Jul`,
    `Aug`,
    `Sep`,
    `Oct`,
    `Nov`,
    `Dec`
  ];

  let day = dayList[now.getDay()];
  let month = monthList[now.getMonth()];
  let date = now.getDate();

  let dateSentence = ` <i class="fas fa-temperature-high"></i> ${day} ${month} ${date}`;
  return dateSentence;
}

dateoutput.innerHTML = formatDate();

let date2 = document.querySelector("#date2");
function time() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let date2Sentnce = `Current Time ${hour}:${minute}`;
  return date2Sentnce;
}

date2.innerHTML = time();
//feature2 week4

function formatPlace(event) {
  event.preventDefault();
  let result = document.querySelector("#search-text");
  let cityName = result.value;
  let apiKey = `ea83478d04ea758c32daab15e512ea29`;
  let degreeSystem = `metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?`;
  let urlWeather = `${url}q=${cityName}&appid=${apiKey}&units=${degreeSystem}`;
  axios.get(urlWeather).then(dataWeather);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(formatLocation);
}

function formatLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = `ea83478d04ea758c32daab15e512ea29`;
  let degreeSystem = `metric`;
  let url = `https://api.openweathermap.org/data/2.5/weather?`;
  let urlWeather22 = `${url}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${degreeSystem}`;
  axios.get(urlWeather22).then(currentLocation);
}

let form = document.querySelector("#searchEngine,#search-button");
form.addEventListener("submit", formatPlace);

let form2 = document.querySelector("#search-location");
form2.addEventListener("click", getLocation);
//week5 API usage

//for seaerched city
function dataWeather(response) {
  console.log(response.data);
  //for city
  let htmlCityValue = response.data.name;
  let htmlCity = document.querySelector("#city");
  htmlCity.innerHTML = htmlCityValue;
  //degree
  let tempRound = Math.round(response.data.main.temp);
  let tempChange = document.querySelector("#degree-today");
  tempChange.innerHTML = tempRound;
  //humidity
  let humRound = Math.round(response.data.main.humidity);
  let humChange = document.querySelector("#humidity");
  humChange.innerHTML = `Humidity ${humRound} %`;
  //windspeed
  let windRound = response.data.wind.speed;
  let windChange = document.querySelector("#wind-speed");
  windChange.innerHTML = `Wind speed ${windRound} m/s`;
}

//for current location
function currentLocation(response) {
  console.log(response.data);
  //current city
  let htmlCityValue = response.data.name;
  let htmlCity = document.querySelector("#city");
  htmlCity.innerHTML = htmlCityValue;
  //degree
  let tempRound = Math.round(response.data.main.temp);
  let tempChange = document.querySelector("#degree-today");
  tempChange.innerHTML = tempRound;
  //humidity
  let humRound = Math.round(response.data.main.humidity);
  let humChange = document.querySelector("#humidity");
  humChange.innerHTML = `Humidity ${humRound} %`;
  //windspeed
  let windRound = response.data.wind.speed;
  let windChange = document.querySelector("#wind-speed");
  windChange.innerHTML = `Wind speed ${windRound} m/s`;
}
