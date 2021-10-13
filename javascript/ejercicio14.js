
let respuesta = prompt(
  "¿Quiéres conocer tu saldo disponible en tu cuenta bancaria para hacer compras? Inserta Si o No."
);
let saldo = 300000;

if (respuesta == "si") 
alert("Tu saldo actual es, " + saldo);
    
else {
    alert("Gracias por ingresar");

    
}

let articulo = prompt("¿Qué artículo deseas comprar: tenis, cartera o morral ");
let tenis = 100000;
let cartera = 200000;
let morral = 400000;

switch (articulo) {
  case "tenis":
    if (100000 <= saldo) {
      alert("Tenis agregados a tu carrito de compras");
    } else {
      alert(
        "Lo lamentamos, no puedes comprar los tenis. Vuelve cuando tengas dinero disponible"
      );
    }

    break;

  case "cartera":
    if (200000 <= saldo) {
      alert("Cartera agregada a tu carrito de compras");
    } else {
      alert(
        "Lo lamentamos, no puedes comprar la cartera ya que excede el valor de tu saldo. Vuelve cuando tengas dinero disponible"
      );
    }

    break;

  case "morral":
        if (400000 <= saldo) {
          alert("Cartera agregada a tu carrito de compras");
        } else {
          alert(
            "Lo lamentamos, no puedes comprar el morral ya que excede el valor de tu saldo. Vuelve cuando tengas dinero disponible"
          );
        }
    
        break;

  default:
    alert("Por favor elige un artículo válido");
    break;
}

