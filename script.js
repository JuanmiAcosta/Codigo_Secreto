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
var expresion_regular_4 = /.*[Hh]omer|[Bb]art|[Mm]arge|[Ll]isa|[Mm]aggie.*/;

//El código debe contener el nombre del alter ego de este personaje 
var expresion_regular_5 = /.*[pP]eter\s*[pP]arker.*/; // Con espacio en blanco opcional y case insensitive

//El código ha de contener un adjetivo calificativo que describa una de estas dos asignaturas
var expresion_regular_6 = /.*[eE]stupend[a|as]|[dD]ivertid[a|as]|[Mm]ejo[r|es]|[Ii]ncre[ií]bl[e|es]|[Aa]sombros[a|as]|[Ff]ant[aá]stic[a|as]|[Ii]nsuperabl[e|es]|[Mm]agnificient[e|es]|[Gg]randilocuent[e|es].*/;

//El código ha de terminar con un teléfono con un correo inventado con el formato xxxx@correo.ugr.es
var expresion_regular_7 = /.*[a-zA-Z0-9_-]*@[a-z]{2}|[a-z]{5}.ugr.es/;

//El código ha de contener una fecha con formato dd/mm/yyyy
var expresion_regular_8 = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/;
//---------------------------------------------

//FUNCIÓN PARA FABRICAR & LIMPIAR UN ERROR

function crea_error(msg, img, alt) {

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

    if (img != "" && alt != "") {

        var img_error = document.createElement("img");
        img_error.classList.add("error_img");
        img_error.setAttribute("src", img);
        img_error.setAttribute("alt", alt);

        div_error.appendChild(img_error);

    }else if(img == "" && alt != ""){

        var error_h2 = document.createElement("h2");
        error_h2.classList.add("error_h2");
        error_h2.innerHTML = alt;

        div_error.appendChild(error_h2);

    }

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

        crea_error("El código debe tener al menos 10 caracteres","","");
    }

    if (expresion_regular_2.test(codigo_act.value)) {

        limpia_error("El código debe comenzar por un dígito");

    } else {

        crea_error("El código debe comenzar por un dígito","","");

    }

    if (expresion_regular_7.test(codigo_act.value)) {

        limpia_error("El código ha de terminar con un correo inventado con el formato de la Universidad de Granada");

    } else {

        crea_error("El código ha de terminar con un correo inventado con el formato de la Universidad de Granada","","");

    }

    if (expresion_regular_3.test(codigo_act.value)) {

        limpia_error("El código debe contener el acrónimo del equipo de esports ganador de los worlds del LOL en 2011 (ejemplo de acrónimo: SKT)");


    } else {

        crea_error("El código debe contener el acrónimo del equipo de esports ganador de los worlds del LOL en 2011 (ejemplo de acrónimo: SKT)","","");

    }

    if (expresion_regular_4.test(codigo_act.value)) {

        limpia_error("El código debe contener uno de los nombres de los 5 integrantes principales de la familia Simpson ");

    } else {

        crea_error("El código debe contener uno de los nombres de los 5 integrantes principales de la familia Simpson ","","");
    }

    if (expresion_regular_5.test(codigo_act.value)) {

        limpia_error("El código debe contener el nombre del alter ego de este personaje (🕷️🕸️)");

    } else {

        crea_error("El código debe contener el nombre del alter ego de este personaje (🕷️🕸️)","icon/spider-man.png","Peter Parker");

    }

    if (expresion_regular_6.test(codigo_act.value)) {

        limpia_error("El código ha de contener un adjetivo calificativo que describa una de estas dos asignaturas: ");

    } else {

        crea_error("El código ha de contener un adjetivo calificativo que describa una de estas dos asignaturas: ","","\"MC\"\"ED\"");
    }

    if (expresion_regular_8.test(codigo_act.value)) {

        limpia_error("El código ha de contener una fecha con formato:");

    } else {

        crea_error("El código ha de contener una fecha con formato:","","\"dd/mm/yyyy\"");

    }


    if (expresion_regular_1.test(codigo_act.value) &&
        expresion_regular_2.test(codigo_act.value) &&
        expresion_regular_3.test(codigo_act.value) &&
        expresion_regular_4.test(codigo_act.value) &&
        expresion_regular_5.test(codigo_act.value) &&
        expresion_regular_6.test(codigo_act.value) &&
        expresion_regular_7.test(codigo_act.value) &&
        expresion_regular_8.test(codigo_act.value)
        ) {

        limpia_todos_errores();
        setTimeout(function(){ alert("Código correcto"); }, 500);
        
    }

}

//---------------------------------------------

//EVENTOS

boton_enviar.addEventListener("click", validar_codigo);


