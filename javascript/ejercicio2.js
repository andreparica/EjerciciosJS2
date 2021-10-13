let palabra = prompt("Escribe una de estas 4 palabras: casa, mesa, perro o gato para conocer su traducción al inglés");

switch (palabra) {
    case "casa":
        alert ("casa en inglés es house")
        break;

    case "mesa":
        alert ("mesa en inglés es table")
        break;

    case "gato":
        alert ("gato en inglés es cat")
        break;

    case "perro":
    alert ("perro en inglés es dog")
    break;
        
    

    default:
        alert ("Lo siento, debes elegir una de estas cuatro palabras para conocer su traducción")
        break;

    console.log(palabra);
}


