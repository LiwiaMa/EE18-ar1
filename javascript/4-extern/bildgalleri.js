/* Kod som körs vid start */
/* Välja ut element vi ska jobba med */
const elementBildruta = document.querySelector("#bildruta");

/* Kod som körs efter start, när man klickar på en miniatur */
function visaBild(nr) {
    elementBildruta.innerHTML = "<img src=\./foton/photo" + nr + ".jpg\ alt=\"Foto" + nr + "\">";
}