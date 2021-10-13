const imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", () => {
    console.log("letras");


imagen.setAttribute("src", "javascript/img/centralpark.jpg");

    

} )

imagen.addEventListener("mouseout", () => {
    console.log("letras");


imagen.setAttribute("src", "javascript/img/jardines.jpg");

    

} )