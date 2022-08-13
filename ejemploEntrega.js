const listaPeliculas = [
    {
        nombre: "Terminator",
        precio: "500$",
        duracion: "120 minutos",
    },
    {
        nombre: "Terminator2",
        precio: "700$",
        duracion: "130 minutos",
    },
    {
        nombre: "Terminator3",
        precio: "900$",
        duracion: "150 minutos",
    },
    {
        nombre: "Harry Potter 1",
        precio: "400$",
        duracion: "90 minutos",
    },
]

let accion = ""

while (accion != "SALIR"){
    accion = prompt("Ingrese COMPRAR|VER|AGREGAR|BORRAR|SALIR")
    switch (accion){
        case "COMPRAR":
            comprarPelicula()
            break;
        case "VER":
            verPelicula()
            break;
        case "AGREGAR":
            agregarPelicula()
            break;
        case "BORRAR":
            borrarPelicula()
            break;
        case "SALIR":
            alert("Estoy saliendo")
            break;
        default:
            alert("Ingrese una acción válida")
            break;
    }
}

function comprarPelicula(){
    let peliculaElegida = prompt("Ingrese el nombre de la pelicula a comprar")
    const peliculaBuscada = listaPeliculas.find((pelicula)=>{
        return pelicula.nombre == peliculaElegida
    })
    if(peliculaBuscada){
        console.log("Compré la siguiente película:")
        console.log(peliculaBuscada)
    } else {
        console.log("No se encontró la película")
    }
}

function verPelicula(){
    listaPeliculas.forEach((pelicula)=>{
        alert(`Nombre: ${pelicula.nombre} Precio: ${pelicula.precio} Duración: ${pelicula.duracion}`)
    })
}

function agregarPelicula(){
    let nuevoNombre = prompt("Ingrese el nombre de la película:")
    let nuevoPrecio = prompt("Ingrese el precio de la película:")
    let nuevoDuracion = prompt("Ingrese la duración de la película:")

    const nuevaPelicula = {
        nombre: nuevoNombre,
        precio: nuevoPrecio,
        duracion: nuevoDuracion,
    }

    const peliculaBuscada = listaPeliculas.some((pelicula)=>{
        return pelicula.nombre == nuevoNombre
    })

    if (peliculaBuscada){
        alert("La película ya existe")
    } else {
        listaPeliculas.push(nuevaPelicula)
    }
}

function borrarPelicula(){
    let peliculaElegida = prompt("Ingrese el nombre de la pelicula a borrar")
    let peliculaEncontrada = 0

    listaPeliculas.forEach((pelicula,indice)=>{
        if (pelicula.nombre == peliculaElegida){
            peliculaEncontrada = indice
        }
    }) 

    if(peliculaEncontrada){
        listaPeliculas.splice(peliculaEncontrada,1)
    } else {
        alert("No se encontró la película")
    }
}