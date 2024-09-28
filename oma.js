// tähän kirjoita oman JSON tietueesi URL
fetch('https://m1umau.github.io/moi.JSON'
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
teksti = "<h1>" + data.otsikko + "</h1>";
// muiden tietojen hakeminen
teksti = teksti + "<p>" + data.kuvaus + "</p>";
teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>";
teksti = teksti + "<h3>Opintojakso: " + data.opintojakso.nimi + " " + data.opintojakso.tunnus + " " + data.opintojakso.opintopisteet + " op</h3>";

// haetaan sisältö-taulukkomuotoista tietoa
teksti = teksti + "<ul>";
for(var i = 0; i < data.sisalto.length; i++) {
    teksti = teksti + "<li>" + data.sisalto[i] + "</li>";
}
teksti = teksti + "</ul>";

// haetaan tekniikat-tietoa objektitaulukosta
teksti = teksti + "<ul>";
for(var i = 0; i < data.tekniikat.length; i++) {
    teksti = teksti + "<p>" + data.tekniikat[i].aihe + "</p>";
    teksti = teksti + (data.tekniikat[i].linkki).link(data.tekniikat[i].linkki);
}
teksti = teksti + "</ul>";

// teksti-muuttujan sisällön tulostus
document.getElementById("vastaus").innerHTML = teksti;
}