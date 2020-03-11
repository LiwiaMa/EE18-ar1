/* Element vi jobbar med */
const elementAntal = document.querySelector("#antal");
const elementFrukt = document.querySelector("#frukt");

const elementSkicka = document.querySelector("#skicka");
const elementRadera = document.querySelector("#radera");

const elementOutput = document.querySelector("#output");
const elementFel = document.querySelector("#fel");

elementSkicka.addEventListener("click", skicka);

function skicka() {
    var antal = elementAntal.value;
    var frukt = elementFrukt.value;


    if (antal == "") {
        elementFel.innerHTML = "Du har inte valt antal <br>";
    }

    if (frukt == "") {
        elementFel.innerHTML = "Du har inte valt antal frunk";
    }

    if (antal == 1) {
        antal = "ett";

    }

    if (antal > 1) {
        antal = "ett";

    }
    if (antal == 2) {
        antal = "två";

    }

    if (antal > 2) {
        antal = "två";

    }

    if (elementFel.textContent == "Inga fel!") {
        elementOutput.textContent = "Doktorn säger" + antal + " " + frukt + " " + "om dagen håller doktorn borta";
    }
}