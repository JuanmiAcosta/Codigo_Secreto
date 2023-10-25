var codigo_act = document.getElementById("codigo");
var boton_enviar = document.getElementById("enviar");
var contenerdor = document.getElementById("container");

codigo_act.setAttribute("autocomplete", "off");

//USO DE APIs PARA RECOGER INFORMACIÓN EXTERNA



//---------------------------------------------

// EXPRESIONES REGULARES

//El mínimo de caracteres del código es 10
var expresion_regular_1 = /^.{10,}$/;

//El código debe comenzar por un dígito
var expresion_regular_2 = /^[0-9]/;

//El código debe contener al ganador de los worlds del LOL en 2011 escrito en tres letras mayúsculas
var expresion_regular_3 = /.*FNC.*/;

//El código debe contener uno de los nombre de los 5 integrantes principales de la familia Simpson
var expresion_regular_4 = /.*Homer|Bart|Marge|Lisa|Maggie.*/;

//---------------------------------------------

//FUNCIÓN PARA FABRICAR & LIMPIAR UN ERROR

function crea_error(msg) {

    //Cogemos todos los div con clase error que tienen el mensaje de error que queremos borrar
    var errores = document.querySelectorAll(".error_msg");

    //Recorremos el array de errores
    for (var i = 0; i < errores.length; i++) {
        //Si el mensaje de error es el que queremos borrar
        if (errores[i].innerHTML == msg) {
            return;
        }
    }

    //crear un div con la clase error
    var div_error = document.createElement("div");
    div_error.classList.add("error");

    var p_error = document.createElement("p");
    p_error.classList.add("error_msg");
    p_error.innerHTML = msg;

    div_error.appendChild(p_error);
    contenerdor.appendChild(div_error);
}

function limpia_error(msg) {
    //Cogemos todos los div con clase error que tienen el mensaje de error que queremos borrar
    var errores = document.querySelectorAll(".error_msg");

    //Recorremos el array de errores
    for (var i = 0; i < errores.length; i++) {

        //Si el mensaje de error es el que queremos borrar
        if (errores[i].innerHTML == msg) {

            //Borramos el div que contiene el mensaje de error
            errores[i].parentNode.remove();

        }

    }

}

function limpia_todos_errores() {
    var errores = document.querySelectorAll(".error");

    for (var i = 0; i < errores.length; i++) {

        errores[i].remove();

    }
}

//FUNCIÓN DE VALIDACIÓN

function validar_codigo(event) {

    event.preventDefault();

    if (expresion_regular_1.test(codigo_act.value)) {

        limpia_error("El código debe tener al menos 10 caracteres");

    } else {

        crea_error("El código debe tener al menos 10 caracteres");
        return;
    }

    if (expresion_regular_2.test(codigo_act.value)) {

        limpia_error("El código debe comenzar por un dígito");

    } else {

        crea_error("El código debe comenzar por un dígito");
        return;

    }

    if (expresion_regular_3.test(codigo_act.value)) {

        limpia_error("El código debe contener el equipo de esports ganador de los worlds del LOL en 2011 (formato FGT)");


    } else {

        crea_error("El código debe contener el equipo de esports ganador de los worlds del LOL en 2011 (formato FGT)");

    }

    if (expresion_regular_4.test(codigo_act.value)) {

        limpia_error("El código debe contener uno de los nombres de los 5 integrantes principales de la familia Simpson");

    } else {

        crea_error("El código debe contener uno de los nombres de los 5 integrantes principales de la familia Simpson");
    }

    if (expresion_regular_1.test(codigo_act.value) && expresion_regular_2.test(codigo_act.value) && expresion_regular_3.test(codigo_act.value) && expresion_regular_4.test(codigo_act.value)) {

        limpia_todos_errores();
        alert("Código correcto");
        
    }

}

//---------------------------------------------

//EVENTOS

boton_enviar.addEventListener("click", validar_codigo);


