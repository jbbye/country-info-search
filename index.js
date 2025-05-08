function searchCountry(){
    let input = document.getElementById("search").value;
    let url = `https://restcountries.com/v3.1/name/${input}`;
    fetch(url).then((res) => res.json()).then((data) => display(data));

}
function display(data){
    var oldContent = document.getElementById("display");
    oldContent.textContent = "";

    for(var i = 0; i< data.length;i++){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = 
        `<div class="country">
            <img src="${data[i].flags.png}" alt="flag">
            <h2>${data[i].name.common}</h2>
            <p>Capital: ${data[i].capital}</p>
            <p>Population: ${data[i].population}</p>
            <p>Region: ${data[i].region}</p>
            <p>Subregion: ${data[i].subregion}</p>
            <p>Area: ${data[i].area}</p>
            <button class="moreButton" onclick="weatherInformation('${data[i].name.common}')"> Weather Information </button>
        </div>`;
        oldContent.appendChild(newDiv);
    }

}

function weatherInformation(data){

    var url = `http://api.weatherapi.com/v1/current.json?key=09390724b17442729dc35320240312&q=${data}&aqi=no`;
    fetch(url).then(res => res.json()).then(data => displayWeather(data));
}

function displayWeather(data){
    var weather = data;
    var oldContent = document.getElementById("displayWeather");
    var newDiv = document.createElement("div");
    oldContent.innerHTML = `<div class = "country">Local Time : ${weather.location.localtime} <br> 
    Weather Condition : ${weather.current.condition.text}
    <img src = "${weather.current.condition.icon}">
    </div>`;
    oldContent.appendChild(newDiv);

    
}
    

