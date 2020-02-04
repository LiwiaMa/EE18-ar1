/* Element vi använder */
const elementFönster = document.querySelector("#fönster");
const elementKol4 = document.querySelector(".kol4");

elementKol4.addEventListener("click", tryck);

function tryck(event) {

    if (event.target.tagName == "BUTTON") {
        console.log(event.target.textContent); /* vilken element klickar vi på */

        switch (event.target.textContent) {
            case "0":

                break;

            
                break;
            case "2":

                break;

            
                break;
            case "2":

                break;

            
                break;
            case "3":

                break;

            
                break;
            case "4":

                break;

            
                break;
            case "5":

                break;

            
                break;
            case "6":

                break;

            
                break;
            case "7":

                break;

            
                break;
            case "8":

                break;

            
                break;
            case "9":
                elementFönster.value = event.target.textContent;

                break;

                elementFönster.value = event.target.textContent;
                break;
        }

        //elementFönster.value = event.target.textContent;
    }

}