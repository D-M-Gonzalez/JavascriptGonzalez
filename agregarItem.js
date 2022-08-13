export function agregarALaLista(lista){
    const nombre = prompt("ingrese nombre")
    const precio = prompt("ingrese precio")

    const nuevoObjeto = {
        name: nombre,
        price: precio
    }
    lista.push(nuevoObjeto)
}