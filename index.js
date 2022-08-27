const divColores = document.getElementById("divColores")
const colores = ["red","green","yellow"]
let indexColores = 0

divColores.addEventListener("click",manualChange)

async function carrousel(elemento){
    const delay = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(true)
        },2000)
    })
    const respuesta = await delay
    if (respuesta){
        indexColores < 2 ? indexColores++ : indexColores = 0
        elemento.style.backgroundColor = colores[indexColores]
        carrousel(elemento)
    }
}

function manualChange(event){
    indexColores < 2 ? indexColores++ : indexColores = 0
    divColores.style.backgroundColor = colores[indexColores]
}

carrousel(divColores)
