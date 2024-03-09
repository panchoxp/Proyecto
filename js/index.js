// se invoca el html por id
var enlaceTerminos = document.getElementById("mostrarTerminos");
var modalTerminos = document.getElementById("modalTerminos");

// se abre al dar click
enlaceTerminos.onclick = function() {
  modalTerminos.style.display = "block";
}
// para que se cierre al dar aceptar
document.getElementById("aceptar").onclick = function() {
  modalTerminos.style.display = "none";
}
//formulario
function enviarFormulario() {
  // Obtener los valores de los campos
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var sexo = document.querySelector('input[name="sexo"]:checked');
  var product = document.getElementById("product").value;
  var additionalInfo = document.getElementById("additional-info").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var email = document.getElementById("email").value;

  // El nombre debe tener al menos 3 caracteres
  if (nombre.length < 3) {
    alert("El nombre debe tener al menos 3 caracteres.");
    return false;
  }

  // El apellido debe tener al menos 3 caracteres
  if (apellido.length < 3) {
    alert("El apellido debe tener al menos 3 caracteres.");
    return false;
  }

  // Validar que se haya seleccionado un sexo
  if (!sexo) {
    alert("Por favor, seleccione su sexo.");
    return false;
  }

  // El producto debe tener al menos 5 caracteres
  if (product.length < 5) {
    alert("Por favor, ingrese un producto válido.");
    return false;
  }

  // Validar que se haya ingresado información adicional
  if (additionalInfo.trim() === "") {
    alert("Por favor, ingrese información adicional.");
    return false;
  }

  // El número de teléfono tenga entre 7 y 15 caracteres
  if (phone.length < 7 || phone.length > 15) {
    alert("El número de teléfono debe tener entre 7 y 15 caracteres.");
    return false;
  }

  // Validar que se haya seleccionado una fecha
  if (!date) {
    alert("Por favor, seleccione una fecha.");
    return false;
  }

  // Validar el formato del correo electrónico
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingrese una dirección de correo electrónico válida.");
    return false;
  }

  //Mensaje de envío exitoso
  alert("El formulario se ha enviado correctamente.");
  return false;
}