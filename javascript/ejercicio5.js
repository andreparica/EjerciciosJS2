const passwordUser = () => {
  let intentoUsuario = prompt("Ingresa tu password para tener acceso");
  let password = "34567Lu";

  if (intentoUsuario == password) {
    alert("Has accedido correctamente");
  } else {
    alert("Password incorrecta, vuelve a intentarlo");
    passwordUser()
  }
};

passwordUser()