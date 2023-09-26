// Expresiones Regulares  (REGEXP)
// Patron que permite validar un campo con un formato que marca ese patron (en este caso un email xxxx@xxxx.xxx)
// Tengo la siguiente expresión regular que exige al menos:
// - Un carácter numérico.
// - Uno del alfabeto en minúscula
// - Uno en mayúscula
// - Uno especial y
// - Entre 8 y 15 carácteres de rango

let emailRegExp = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/;
let passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
// Para comparar el valor del campo (email) con el REGEXP existe un método en JS(test) que devuelve un true si el formato coincide o falso en lo contrario.

// gets

let form = document.getElementsByTagName("form")[0];
let nombreInput = document.getElementById("nombreInput");
let emailInput = document.getElementById("emailInput");
let passInput = document.getElementById("passInput");
let textareaMensaje = document.getElementById("textareaMensaje");
let errorMSG = document.getElementsByClassName("errorMSG");
let boton = document.querySelector("button");
boton.addEventListener("click", () =>{
    resetearErrorMSGsinput();
    // Nombre
    if(nombreInput.value === "") {
        alert("El campo de nombre está vacío");
        nombreInput.classList.add("errorInput");
        errorMSG[0].textContent = "Rellena tu nombre.";
    } else {
        nombreInput.classList.add("validoInput");
        errorMSG[0].textContent = "El campo de nombre está llenado."
    }
    // Email
    if (emailInput.value === "") {
        alert("El campo de email está vacío");
        emailInput.classList.add("errorInput");
        errorMSG[1].textContent = "Rellena tu correo electrónico."
    } else if (!emailRegExp.test(emailInput.value)) {
        emailInput.classList.add("errorInput");
        errorMSG[1].textContent = "El campo de correo electrónico está invalido.";
    } else {
        emailInput.classList.add("validoInput");
        errorMSG[1].textContent = "El campo de correo electrónico con formato está valido! :)";
    }
    // Contraseña
    if (passInput.value === "") {
        alert("El campo de contraseña está vacío");
        passInput.classList.add("errorInput");
        errorMSG[2].textContent = "Rellena el campo de contraseña.";
    } else if (!passRegExp.test(passInput.value)) {
        passInput.classList.add("errorInput");
        errorMSG[2].textContent = "El campo de contraseña con formato está invalido! (minimo 8, maximo 15, una mayuscula, una minuscula, número, caracter especial, por favor."
    } else {
        passInput.classList.add("validoInput");
        errorMSG[2].textContent = "El campo de contraseña con formato valido!";
    }
    // Textarea MSG
    if (textareaMensaje.value === "") {
        alert("El campo de mensaje está vacío");
        textareaMensaje.classList.add("errorInput");
        errorMSG[3].textContent = "El campo de mensaje está vacío!";
    } else if (textareaMensaje.value.length < 10) {
        textareaMensaje.classList.add("errorInput");
        errorMSG[3].textContent = "Rellena más de 10 caracteres.";
    } else {
        textareaMensaje.classList.add("validoInput");
        errorMSG[3].textContent = "El campo de mensaje con formato valido!";
    }
})

// function para resetear
function resetearErrorMSGsinput() {
    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("errorInput");
        errorMSG[i].textContent = "";
    }
    textareaMensaje.classList.remove("errorInput");
    errorMSG[3].textContent = "";
}