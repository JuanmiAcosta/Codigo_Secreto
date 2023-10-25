var codigo_act = document.getElementById("codigo");
var boton_enviar = document.getElementById("enviar");

//USO DE APIs PARA RECOGER INFORMACIÓN EXTERNA



//---------------------------------------------

// EXPRESIONES REGULARES

//El mínimo de caracteres del código es 10
var expresion_regular_1 = /^.{10,}$/;

//El código debe comenzar por un dígito
var expresion_regular_2 = /^[0-9]/;

//El código debe contener al ganador de los worlds del LOL en 2011 escrito en tres letras mayúsculas

var expresion_regular_3 = /.*FNC.*/;

//---------------------------------------------

//FUNCIÓN PARA FABRICAR UN ERROR

function crea_errpr(msg){
 //crear un div con la clase error
    var div_error = document.createElement("div");
    div_error.classList.add("error");

    var p_error = document.createElement("p");
    p_error.classList.add("error_msg");
}

//FUNCIÓN DE VALIDACIÓN

function validar_codigo(event){

    event.preventDefault();

    if(expresion_regular_1.test(codigo_act.value)){

        console.log("Código tiene al menos 10 caracteres");

        if (expresion_regular_2.test(codigo_act.value)){

            console.log("Código comienza por un dígito");

            if (expresion_regular_3.test(codigo_act.value)){

                console.log("Código contiene las letras FNC");

            }else{

                console.log("Código no contiene las letras FNC");

            }

        }else{

            console.log("Código no comienza por un dígito");

        }

    }else{

        console.log("Código no tiene al menos 10 caracteres");

    }

}

//---------------------------------------------

//EVENTOS

boton_enviar.addEventListener("click", validar_codigo); 


