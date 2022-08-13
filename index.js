let listaProductos = []

const searchForm = document.getElementById("search")
const registerForm = document.getElementById("register")
const productDiv = document.getElementById("products")
const bClear = document.getElementById("bClear")

searchForm.addEventListener("submit",handleSubmit)
registerForm.addEventListener("submit",handleSubmit)
bClear.addEventListener("click",()=>{localStorage.clear()})

inicializar()

function handleSubmit(event){
    event.preventDefault()
    const id = event.target.id
    const form = event.target.children

    switch(id){
        case "search":
            searchProduct(form)
            break;
        case "register":
            registerProduct(form)
            break;
        default:
            break;
    }    
}

function registerProduct(datos){

    const newProduct = {
        name: datos[0].value,
        price: datos[1].value
    }

    listaProductos.push(newProduct)

    const JSONlistaProductos = JSON.stringify(listaProductos)

    localStorage.setItem('lista',JSONlistaProductos)
}

function searchProduct(datos){
    const searchedProduct = {
        name: datos[0].value,
    }    

    const JSONlistaProductos = localStorage.getItem('lista')
    listaProductos = JSON.parse(JSONlistaProductos)

    const result = listaProductos.find((producto)=>{
        return producto.name == searchedProduct.name
    })

    if ( result ){
        productDiv.innerHTML = `
            <div>${result.name}</div>
            <div>$${result.price}</div>`  
    } else {
        productDiv.innerHTML = `
            <p>Producto no encontrado</p>
        `       
    }
}

function inicializar(){
    const JSONlistaProductos = localStorage.getItem('lista')
    listaProductos = JSON.parse(JSONlistaProductos)    
}