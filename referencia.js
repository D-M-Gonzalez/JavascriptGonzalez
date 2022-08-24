const formNuevaCasa = {
    tamano: "100m2",
    habitaciones: 3,
    banos: 1,
    cochera: true,
    patio: true,
}

const arrayCasas = []

//console.log(formNuevaCasa)

// formNuevaCasa no guarda datos. formNuevaCasa es la dirección de los datos que tiene adentro.
// formNuevaCasa es Rivadavia 6590

//console.log(formNuevaCasa) // Andá a Rivadavia 6590, sacale una foto a las cosas de la casa y mostralo por consola

//arrayCasas.push(formNuevaCasa) // Meté adentro de arrayCasas a Rivadavia 6590

// [Rivadavia 6590]

//console.log("primer push")
//console.log(arrayCasas)

/*formNuevaCasa.banos = 3
formNuevaCasa.cochera = true
formNuevaCasa.habitaciones = 5
formNuevaCasa.patio = true
formNuevaCasa.tamano = "200m2"

arrayCasas.push(formNuevaCasa) // Meté adentro de arrayCasas a Rivadavia 6590*/
// [Rivadavia 6590, Rivadavia 6590]

//console.log("segundo push")
//console.log(arrayCasas) // Bueno, recorré el array, sacale una foto a la primera, pasame los datos, sacale una foto a la segunda
// y pasame los datos

/*const objeto2 = formNuevaCasa //Crea un objeto2, que su dirección sea igual a la de formNuevaCasa, osea Rivadavia 6590

console.log(objeto2)

formNuevaCasa.banos = 10

console.log(objeto2)

objeto2.banos = 20

console.log(formNuevaCasa)*/

apretarBoton(formNuevaCasa,arrayCasas)
formNuevaCasa.banos = 5
apretarBoton(formNuevaCasa,arrayCasas)
formNuevaCasa.banos = 10
//cambie datos en formNuevaCasa
apretarBoton(formNuevaCasa,arrayCasas)

/*function apretarBoton(form,array){
    const nuevaCasa = { //Crea un nuevo objeto y asignale una dirección nueva cualquiera
        tamano: form.tamano, //Anda a Rivadavia 6590, saca foto del tamaño y pegalo en cualquiera tamano
        habitaciones: form.habitaciones,
        banos: form.banos,
        cochera: form.cochera,
        patio: form.patio,        
    }
    array.push(nuevaCasa)
} // se destruye nuevaCasa = null

// [Belgrano 4590, Lacarra 7000, Congreso 8705]

console.log(arrayCasas) //Va a Belgrano 4590 saca foto y muestra, despues va a Lacarra 7000 saca foto y muestra
// va a Congreso 8705 saca foto y muestra*/

function apretarBoton(form,array){
    const nuevaCasa = {...form}

    array.push(nuevaCasa)
}

console.log(arrayCasas)