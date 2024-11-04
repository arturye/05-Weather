const apiKey = "84a86b58f22def5def1548a1c038b14a";
const fetchWeather = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // Update the DOM with the fetched weather info
      document.getElementById('city').textContent = data.name;
      document.getElementById('date').textContent = new Date();
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('temperature').textContent = `${Math.round(data.main.temp - 273.15)}°C`; // Convert from Kelvin to Celsius
      document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      document.getElementById('input').value = '';
    });
};

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = event.target.firstElementChild.value;
  console.log(userInput);
  fetchWeather(userInput);
});
