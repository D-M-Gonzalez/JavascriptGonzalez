const divEjemplo = document.getElementById("ejemplo")

entrada = prompt("Ingrese su html o SALIR")
if (entrada){
    divEjemplo.innerHTML = `${entrada}`
}
