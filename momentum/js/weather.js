const API_KEY = "d02ef6bbe545bdf6a086e9ef9c7ef913";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    console.log("You live in ", lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError(){
    alert("Can't Find You!!")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);