import { arrayAcordes } from "./data/baseNotas.js"
import { validChars } from "./data/validacion.js"

let notasBuscadas = []

const formNotas = document.getElementById("notas")
const resultado = document.getElementById("result")
formNotas.addEventListener("submit",handleSubmit)

function handleSubmit(event){
    event.preventDefault()
    const notas = event.target.children[0].value
    parseNotas(notas)
    const listaOrdenada = buscarAcorde(notasBuscadas)
    pasarAlDom(listaOrdenada,resultado)
}

function parseNotas(notas){
    let stringNotas = notas.replace(/ /g,"")
    let arrayNotas = []
    let arrayValidacion = stringNotas.split("")
    let valid = true

    arrayValidacion.forEach((caracter)=>{
        if (!validChars.includes(caracter)){
            valid = false
        }
    })

    if (!valid){
        alert("Algun caracter no es válido")
    }

    if (valid){
        arrayNotas = stringNotas.split(",")
    }

    if (valid){
        arrayNotas.forEach((nota)=>{
            if (nota.length != 2){
                valid = false
            }
        })
    }

    if (!valid){
        alert("Alguna nota está mal escrita")
    }

    if (valid && arrayNotas.length != 4){
        valid = false
    }

    if (!valid){
        alert("No ingresó 4 notas")
    }

    if (valid){
        notasBuscadas = arrayNotas
    }
}

function buscarAcorde(notas){
    const listaNueva = arrayAcordes.map((acorde)=>{
        let puntaje = 0

        notas.forEach((notaBuscada,indice)=>{
            if(notaBuscada == acorde.notas[indice]){
                puntaje++
            }
        })

        const nuevoAcorde = {
            acorde: acorde.acorde,
            notas: acorde.notas,
            puntaje: puntaje,            
        }

        return nuevoAcorde
    })

    const listaOrdenada = listaNueva.sort(function(acorde1, acorde2){return acorde2.puntaje-acorde1.puntaje});

    return listaOrdenada
}

function pasarAlDom(listaOrdenada,divVacio){
    divVacio.innerHTML = `
        <p>${listaOrdenada[0].acorde}</p>
        <p>${listaOrdenada[0].notas[0]}${listaOrdenada[0].notas[1]}${listaOrdenada[0].notas[2]}${listaOrdenada[0].notas[3]}</p>
        <p>${listaOrdenada[1].acorde}</p>
        <p>${listaOrdenada[1].notas[0]}${listaOrdenada[1].notas[1]}${listaOrdenada[1].notas[2]}${listaOrdenada[1].notas[3]}</p>
        <p>${listaOrdenada[2].acorde}</p>
        <p>${listaOrdenada[2].notas[0]}${listaOrdenada[2].notas[1]}${listaOrdenada[2].notas[2]}${listaOrdenada[2].notas[3]}</p>
        <p>${listaOrdenada[3].acorde}</p>
        <p>${listaOrdenada[3].notas[0]}${listaOrdenada[3].notas[1]}${listaOrdenada[3].notas[2]}${listaOrdenada[3].notas[3]}</p>
    `
}