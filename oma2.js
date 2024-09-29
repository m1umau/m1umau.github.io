// tähän kirjoita oman JSON tietueesi URL
fetch('https://m1umau.github.io/teh2.JSON'
)

// muunnetaan vastaus JSON muotoon
.then(function (response) {
return response.json();
})

// käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
// kutsutaan funktiota ja välitetään sille json-vastaus
kerro(responseJson);
})

// jos tuli jokin virhe
.catch(function (error) {
document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
})

function kerro(data) {
// määritellään muuttuja, johon tulostettava tieto kerätään
var teksti = "";
// otsikkotiedon hakeminen ja sijoittaminen h1-elementtiin
teksti = "<h1>" + data.nimi + "</h1>";
// muiden tietojen hakeminen
teksti = teksti + "<p>Osallistujien lukumäärä: " + data.osallistujia + "</p>";
teksti = teksti + "<p>Toteutuksen kesto: " + data.kesto + " viikkoa</p>";
teksti = teksti + "<p>Alkamispäivä: " + data.ajankohta.alku + "</p>";
teksti = teksti + "<p>Loppumispäivä: " + data.ajankohta.loppu + "</p>";

// haetaan sisältö-taulukkomuotoista tietoa
teksti = teksti + "<p>Osallistujien nimet: ";
for(var i = 0; i < data.nimet.length; i++) {
    teksti = teksti + "<li>" + data.nimet[i].etunimi + " " + data.nimet[i].sukunimi + "</li>";
}
teksti = teksti + "</p>";

teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>";

// teksti-muuttujan sisällön tulostus
document.getElementById("vastaus").innerHTML = teksti;
}