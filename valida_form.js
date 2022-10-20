// Validación de campos en formulario de contacto:
// Se valida si cualquiera de los campos está vacío y una vez completo todos los campos 
// se puede enviar el formulario


var valida = document.querySelectorAll(".valida")
var boton = document.getElementById("boton")

// función que ejecuta todas las validaciones
function validaForm() {
    validaOpt()
    validaNom()
    validaApe()
    validaText()
    validaOk()
}

// función que valida el campo "Nombre"
function validaNom() {
    if (valida[0].value == "") {
        valida[0].placeholder = "Campo obligatorio"
        valida[0].className = "warning"
    }
    else {
        valida[0].className = "valida"
    }
}

// función que valida el campo apellido
function validaApe() {
    if (valida[1].value == "") {
        valida[1].placeholder = "Campo obligatorio"
        valida[1].className = "warning"
    }
    else {
        valida[1].className = "valida"
    }
}

// función que valida el menú desplegable
function validaOpt() {
    if (valida[3].selected == true) {
        valida[2].className = "warningOpt"
        valida[3].text = "Obligatorio"
    }
}

// función que valida el campo de texto
function validaText() {
    if (valida[4].value == "") {
        valida[4].placeholder = "Campo obligatorio"
        valida[4].className = "warning"
    }
    else {
        valida[4].className = "valida"
    }
}

// quita el rojo en el menú desplegable al seleccionar una opción 
function selectFunc() {
    valida[2].className = "valida"
}

// función que autoriza al boton a submitear si todas las validaciones fueron correctas
function validaOk() {
    if (valida[0, 1, 2, 4].value != "" && valida[3].selected != true) {
        boton.type = "submit"
    }
}
