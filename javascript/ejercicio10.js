const letras = (palabra) => {

    if (palabra == palabra.toUpperCase()) {
        alert (`palabra: ${palabra} está en mayúscula`  );
        
    } else if (palabra == palabra.toLowerCase()) {
        alert (`palabra: ${palabra} está en minúscula`);
        
    } else  {
        alert (`palabra: ${palabra} está en minúscula y en mayúscula`);

        
    }
    

}

letras(prompt( "Ingresa una palabra" )); 