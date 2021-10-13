
const crearDiv = () => {
    let div = document.createElement("div");
    div.style.height = "20px";
    div.style.width = "100px";
    div.classList.add ("elementoHijo");
    const contenedor = document.querySelector(".contenedor");
    contenedor.appendChild(div);

    cambiarColor();


}

const cambiarColor = () => {
    document.querySelectorAll (".elementoHijo");
    let color = document.querySelectorAll (".elementoHijo");

for (let index = 0; index < color.length; index++) {
    
    switch (index) {
        case 0:
            color [index].style.backgroundColor = "red";
            break;

        case 1:
            color [index].style.backgroundColor = "green";
            break;

        case 2:
            color [index].style.backgroundColor = "orange";
            break;
    
        default:
            color [index].style.backgroundColor = "black";
            break;
    }


    
}    

}

let boton = document.getElementById ("boton");
document.getElementById("boton");
boton.addEventListener("click", crearDiv);
boton.addEventListener("click", cambiarColor);

