function sesion() {
    let botonSesion = document.getElementById("buscar");
    botonSesion.innerText = "buscar";
};

function definicion() {
    let botonDefinicion = document.getElementById("buscar");
    botonDefinicion.remove()
};


let likes1 = document.getElementById("likes1").textContent;

let likes2 = document.getElementById("likes2").textContent;

function alerta1() {
    likes1 ++;
    alert("Le diste like a Estrellados");
    document.getElementById("likes1").innerText = likes1
}
function alerta2(){
    likes2 ++;
    alert("Le diste like a Estrellados!")
    document.getElementById("likes2").innerText = likes2
};


console.log(likes1)
console.log(likes2)