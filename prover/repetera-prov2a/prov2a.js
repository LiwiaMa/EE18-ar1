/* Lista på alla element vi använder */
const elementVara = document.querySelector("#vara");
const elementPris = document.querySelector("#pris");
const elementKnapp = document.querySelector("button");
const elementLista1 = document.querySelector(".lista1");
const elementLista2 = document.querySelector(".lista2");
const elementTotal1 = document.querySelector(".total1");
const elementTotal2 = document.querySelector(".total2");

/* Globala variabler */
var summa1 = 0;
var summa2 = 0; 

/* Användare klickar på lägg till */
elementKnapp.addEventListener("click", fyllalistor);

function fyllalistor() {
    /* Läs av rutorna vara & pris */
    var vara = elementVara.value; // vara = "cola" 
    var pris = Number(elementPris.value); // pris =  20 

    /* Om pris mindre än 100 */
    if (pris <= 100) {
        /* Skriv ut vara och pris i listan "små inköp" */
        elementLista1.innerHTML += vara + " " + pris + " kr <br>"; /* += (...) -- du lägger till, ytterligare */

        /* Räkna ut summan i listan små inköp */
        summa1 += pris;

        /* Visa nya summan */
        elementTotal1.textContent = summa1;
    } else {
        /* Skriv ut vara och pris i listan "små inköp" */
        elementLista2.innerHTML += vara + " " + pris + " kr <br>";  

        /* Räkna ut summan i listan "stora inköp" */
        summa2 += pris;

        /* Visa nya summan */
        elementTotal2.textContent = summa2;
    }

    /* Om total summan > 1000 */
    if (summa1 + summa2 > 1000) {
        /* Ändra backgrundsfärg till rött */
        
        
    }
}