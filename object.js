const fields = [
    {
        id: "Nombre",
        class: "input",
        placeholder: "Ingrese su Nombre",
        type: "text",
        value: "",
    },
    {
        id: "Apellido",
        class: "input",
        placeholder: "Ingrese su Apellido",
        type: "text",
        value: "",
    },
    {
        id: "Teléfono",
        class: "input",
        placeholder: "Ingrese su Teléfono",
        type: "text",
        value: "",
    },
    {
        id: "Password",
        class: "input",
        placeholder: "Ingrese su Password",
        type: "password",
        value: "",
    },
    {
        id: "Repetir Password",
        class: "input",
        placeholder: "Re-ingrese su password",
        type: "password",
        value: "",
    },
]

const search = document.getElementById("bSearch")
const searchInput = document.getElementById("searchInput")
search.addEventListener("click",handleSearch)

function handleSearch(){
    const result = fields.find((field)=>{
        console.log(field.id)
        console.log(searchInput.value)
        return field.id === searchInput.value
    })
    console.log("El campo buscado es:")
    console.log(result)
}