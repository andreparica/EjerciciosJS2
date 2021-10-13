const ingresoEdad = () => {
  let edadUsuario = prompt("Bienvenido a la Disco Night! ¿Cuál es tu edad?");
  let edad = 18;

  if (edadUsuario >= edad) {
    alert("¡Bienvenido a Disco Night!");



    switch (prompt("Ingresa tu género: femenino o masculino")) {
      case "femenino":
        if (edadUsuario >= 25) {
          alert("El valor de tu boleta es de 25000");
        } else 
        alert("El valor de tu boleta es de 20000");

        break;




      case "masculino":
        if (edadUsuario >= 24) {
          alert("El valor de tu boleta es de 30000");
        } else {
          alert("El valor de tu boleta es de 25000");

        }

        break;




      default:
        alert("Ingresa uno de ambos sexos");
        break;
    }


    
  } else {
    alert("Debes tener más de 18 años para ingresar");
  }
};

ingresoEdad();
