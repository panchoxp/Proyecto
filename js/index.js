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
function enviarFormulario() {
  // Verificar si todos los campos requeridos están completos
  if (!document.getElementById("nombre").value ||
      !document.getElementById("apellido").value ||
      !document.querySelector('input[name="sexo"]:checked') ||
      !document.getElementById("product").value ||
      !document.getElementById("additional-info").value ||
      !document.getElementById("phone").value ||
      !document.getElementById("date").value ||
      !document.getElementById("email").value) {
    // Mostrar alerta si algún campo requerido está vacío
    alert("Por favor, complete todos los campos.");
    return false; // Evitar envío del formulario
  }

  // Si todos los campos están completos, mostrar mensaje de envío exitoso
  alert("El formulario se ha enviado correctamente.");
  return false; // Evitar envío del formulario