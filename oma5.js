fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=tampere&units=metric&APPID=314de1b8dabfbace7321a5ff474e27d1')
// Muunnetaan vastaus JSON muotoon
.then(function (response) { return response.json();
})

// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {

// kutsutaan saa-funktiota saa(responseJson);
saa2(responseJson);
})

// Jos tuli jokin virhe
.catch(function (error) { document.getElementById("vastaus2").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
})

function saa2(data){
var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

// haetaan tiedot listaan
teksti = teksti + "<ul><li>kaupunki: " + data.name + "</li>";
teksti = teksti + "<li>kuvaus: " + data.weather[0].description + "</li>";
teksti = teksti + "<li>lämpötila: " + data.main.temp + "&degC</li>";
teksti = teksti + "<li>tuulen nopeus: " + data.wind.speed + " m/s</li>";
// haetaan kuva
var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
// sijoitetaan kuva
teksti = teksti + "<p><img class='center' src='" + kuva + "' alt='kuva' ></p></ul>";
// teksti-muuttujan sisällön tulostus
document.getElementById("vastaus2").innerHTML = teksti;
}