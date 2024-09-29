fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=helsinki&units=metric&APPID=314de1b8dabfbace7321a5ff474e27d1')
// Muunnetaan vastaus JSON muotoon
.then(function (response) { return response.json();
})

// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {

// kutsutaan saa-funktiota saa(responseJson);
saa(responseJson);
})

// Jos tuli jokin virhe
.catch(function (error) { document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
})

function saa(data){
var teksti = ""; // määritellään muuttuja, johon tulostettava tieto kerätään

// otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
teksti = "<h1>Sää - siitä on aina jotain kerrottavaa</h1>";
teksti = teksti + "<p>Millainen sää Helsingissä on? Entä Tampereella?</p>";

teksti = teksti + "<ul><li>kaupunki: " + data.name + "</li>";
teksti = teksti + "<li>kuvaus: " + data.weather[0].description + "</li>";
teksti = teksti + "<li>lämpötila: " + data.main.temp + "&degC</li>";
teksti = teksti + "<li>tuulen nopeus: " + data.wind.speed + " m/s</li>";

var kuva = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
// tähän tulee muiden tietojen käsittely
teksti = teksti + "<p><img src='" + kuva + "' alt='kuva' ></p></ul>";
// teksti-muuttujan sisällön tulostus
document.getElementById("vastaus").innerHTML = teksti;
}