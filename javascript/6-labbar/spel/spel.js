/* Kända personer och händelser 

Nobels fredspris går till sydafrikanske biskopen Desmond Tutu. (1962)

Tage Erlander blir populär när han i TV berättar vitsen som avslutas med "huka er gubbar och kärringar för nu laddar han om"  (1984)

Finland blir självständigt (1917)

*/

/* Prylar, nyheter och uppfinningar 

Myndigheten Kongl. Patentbyrån öppnar sina dörrar för allmänheten (1885)

Kaknästornhet står klart (1967)

De första mynten präglas i Sigtuna (995)
*/

/* Sport, fritid och blandad 

På världsutstllningen  i Paris presenteras Picassos verk Guernica (1937)

Andreas Zorn köper krogen Den Gylderne Freden i Gamla Stan (1919)

*/

/* Underhållning

Första Hultsfredssfestivalen går av stapeln (1986)

Tove Jansson kommer ut med sin första bok om mumintrollen (1945)
*/


/* Globala variabler och konstanter*/
var frågor = [
    "Nobels fredspris går till sydafrikanske biskopen Desmond Tutu.", "Tage Erlander blir populär när han i TV berättar vitsen som avslutas med \"huka er gubbar och kärringar för nu laddar han om\"", " Finland blir självständigt", "Myndigheten Kongl. Patentbyrån öppnar sina dörrar för allmänheten ", "Kaknästornhet står klart", "De första mynten präglas i Sigtuna", "På världsutstllningen  i Paris presenteras Picassos verk Guernica", "Andreas Zorn köper krogen Den Gylderne Freden i Gamla Stan", "Första Hultsfredssfestivalen går av stapeln", "Tove Jansson kommer ut med sin första bok om mumintrollen"

];

var årtal = [
    1962, 1984, 1917, 1885, 1967, 995, 1937, 1919, 1986, 1945
];

var slumptal,
    poäng = 0,
    varv = 10;
const elementKontainer = document.querySelector("div");
const elementFrågaRuta = document.querySelector("textarea");
const elementÅrtalRuta = document.querySelector("#årtal");
const elementKnappSkicka = document.querySelector("#skicka");
const elementKnappNästa = document.querySelector("#nästa");
const elementPoängRuta = document.querySelector("#poäng");
const elementTummeUpp = document.querySelector("#upp");
const elementTummeNed = document.querySelector("#ned");


/* Skapa en funktion för att slumpa fram en fråga */

function nyFråga() {
    /* Slumptal 0-9 */
    slumptal = Math.floor(Math.random() * 10);
    console.log(frågor[slumptal]);
    console.log(årtal[slumptal]);

    elementFrågaRuta.value = frågor[slumptal];
    elementÅrtalRuta.value = "";

    /* Dölj tummen */
    elementTummeUpp.style.display = "none";
    elementTummeNed.style.display = "none";
}

/* Kör funktionen */
nyFråga();

/* Plocka fram en ny fråga när man klikar på knappen "Nästa" */
elementKnappNästa.addEventListener("click", nyFråga);

/* Kolla om man svarat rätt årtal på frågan */
elementKnappSkicka.addEventListener("click", kollaSvaret);

/* Skapa en funktion för att kolla om svaret är rätt */
function kollaSvaret() {
    /* Läs av svaret  */
    var svaret = elementÅrtalRuta.value;
    console.log(svaret);

    /* Det rätta årtalet */
    var årtalet = årtal[slumptal];

    /* Kolla om svaret är rätt */
    if (svaret == årtalet) {
        console.log("Yippee! RÄTTTT! ");
        elementTummeUpp.style.display = "block";
        elementTummeNed.style.display = "none";
        poäng = poäng + 1; /* istället för +1 kan man skriva ++, vilket beyder sama sak */

    } else {
        console.log("Ooops, FELLLLLL!");
        elementTummeNed.style.display = "block";
        elementTummeUpp.style.display = "none";
    }

    /* Skriv ut poäng */
    elementPoängRuta.value = poäng;


    /* Antal varv */
    varv--;

    if (varv == 0) {
        if (poäng == 10) {
            elementKontainer.innerHTML = "Good work, you made it!"
            
        } else {
            elementKontainer.innerHTML = "Too bad, better next time"
        }
        
    }
}