/* Element vi använder */
const eAntal1 = document.querySelector("#antal1");
const ePlus1 = document.querySelector("#plus1");
const eMinus1 = document.querySelector("#minus1");
const eSumma1 = document.querySelector("#summa1");

const eAntal2 = document.querySelector("#antal2");
const ePlus2 = document.querySelector("#plus2");
const eMinus2 = document.querySelector("#minus2");
const eSumma2 = document.querySelector("#summa2");


const eFrakt = document.querySelector("#frakt");
const eRabattkod = document.querySelector("#rabattkod");
const eKnapp = document.querySelector("button");
const eTotal = document.querySelector("#total");
const eBeställning = document.querySelector("#beställning");

/* Vad händer när man klickar slutför */
eKnapp.addEventListener("click", resultat);

function resultat() {
    /* Läs av rutorna */
    /* Number ser till att det är tal som ska räknas ut, t.ex. om d e 1+1 så ska det bli 2 nt 11 */
    var antal1 = Number(eAntal1.value);
    var antal2 = Number(eAntal2.value);
    var frakt = Number(eFrakt.value);
    var rabbatkod = eRabattkod.value;

    var rabatt = 0;

    eBeställning.innerHTML = "Du har beställt" + antal1 + "st" + "<strong>Infekterad Lysande Stressboll</strong> och" + antal2 + "st" + "<strong> Pippi parpussel</strong>";

    if (rabbatkod == 5599) {
        rabatt = 29;
    }

    /* plocka ut ngt från rutan elr sätta in är .value, därför kan d vara lurigt*/
    var summa = antal1 * 39 + antal2 * 102 + frakt - rabatt;

    eTotal.value = summa + " kr";
}

/* Vad händer när man klickar på Plus (antal1) */
/* slippa komma på namnet på funktionen --> anonym funktion - baka in function efter "click" */
ePlus1.addEventListener("click", function() {
    /* Läs av rutan */
    var antal1 = eAntal1.value;

    /* Hackar varianten */
    eAntal1.value = antal2;

    /* Skriv in summa1 */
    eSumma1.textContent = antal1 * 39
})

eMinus1.addEventListener("click", function() {
    /* Läs av rutan */
    var antal1 = eAntal1.value;
    antal--;

    /* subtrahetra 1 */
    //antal1 -= 1;

    /* Hackar varianten */
    eAntal1.value = eAntal1.value) - 1;

    eSumma1.textContent = antal1 * 39

})

ePlus2.addEventListener("click", function() {
    /* Läs av rutan */
    var antal2 = eAntal2.value;

    /* Hackar varianten */
    eAntal2.value = Number(eAntal2.value) + 1;

})

eMinus2.addEventListener("click", function() {
    /* Läs av rutan */
    var antal2 = eAntal2.value;
    /* Addera 1 */
    /*antal1 = anral1 + 1;*/ /* antal1 += 1*/
    //antal1 += 1;

    /* Skriv tillbaka resultatet  */
    // eAntal1.value = antal1;

    /* Hackar varianten */
    eAntal2.value = Number(eAntal2.value) - 1;
})