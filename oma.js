fetch('https://run.mocky.io/v3/f0a157d4-10ad-42a7-a24f-0d3bcb08c6a8'
)

.then(function (response) {
return response.json();
})

.then(function (responseJson) {
kerro(responseJson);
})

.catch(function (error) {
document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
})

function kerro(data) {
var teksti = "";
teksti = "<h1>" + data.otsikko + "</h1>";
teksti = teksti + "<p>" + data.kuvaus + "</p>";
teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>";
teksti = teksti + "<h3>Opintojakso: " + data.opintojakso.nimi + " " + data.opintojakso.tunnus + " " + data.opintojakso.opintopisteet + " op</h3>";


teksti = teksti + "<ul>";
for(var i = 0; i < data.sisalto.length; i++) {
    teksti = teksti + "<li>" + data.sisalto[i] + "</li>";
}
teksti = teksti + "</ul>";

document.getElementById("vastaus").innerHTML = teksti;
}
