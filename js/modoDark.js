let btn = document.querySelector(".tema");
let contador = 1;
let circulo = document.querySelector(".circulo");
let circuloWhite = document.querySelector("#noturno");

/* bacground API */
let bckgVideoApi = document.getElementById('bckg-api-video');

btn.addEventListener("click", (event) => {
    event.preventDefault();
    contador++;
    
    if(contador % 2 == 0){
        corSite = document.body.style.background = "rgb(3, 31, 48)";
        title = document.body.style.color = "white";
        circulo.style.animation = "deslizar-1 0.3s ease forwards";
        btn.style.background = "white";
        circuloWhite.classList.add("circulo-2");
        bckgVideoApi.style.opacity = "0";
        // body.style.opacity = "0";

        
    } else{
        corSite = document.body.style.background = "rgba(149, 199, 195, 0.87)";
        title = document.body.style.color = "rgb(44, 6, 80)";
        circulo.style.animation = "deslizar-2 0.3s ease forwards";
        btn.style.background = "rgb(44, 6, 80)";
        circuloWhite.classList.remove("circulo-2");
        bckgVideoApi.style.opacity = "1";
        // body.style.opacity = "1";

    }

})