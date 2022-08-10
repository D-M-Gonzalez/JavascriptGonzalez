//Definición de clases, esto en un futuro va en otros archivos
class FormData {
    constructor(name,surname,phone,pass,repass){
        this.name = name
        this.surname = surname
        this.phone = phone
        this.pass = pass
        this.repass = repass
    }
    setValue(value,field){
        switch(field){
            case "Nombre":
                this.name = value
                break;
            case "Apellido":
                this.surname = value
                break;
            case "Teléfono":
                this.phone = value
                break;
            case "Password":
                this.pass = value
                break;
            case "Repetir Password":
                this.repass = value
                break;
            default:
                break;
        }
    }
    getValue(field){
        let value = "";
        switch(field){
            case "Nombre":
                value = this.name
                break;
            case "Apellido":
                value = this.surname
                break;
            case "Teléfono":
                value = this.phone
                break;
            case "Password":
                value = this.pass
                break;
            case "Repetir Password":
                value = this.repass
                break;
            default:
                break;
        }
        return value
    }
}

//Definición de mis objetos
const datosNoControlado = new FormData()
const datosControlado = new FormData()

//Definición de mis elementos de DOM
const formNoControlado = document.getElementById("formNoControlado")
const formControlado = document.getElementById("formControlado")

const submitControlado = document.getElementById("controlAccept")

const repPassword = document.querySelectorAll(".repass")

//Definición de mis eventos

formNoControlado.addEventListener("submit",handleSubmitNoControl)
formNoControlado.addEventListener("input",handleInputNoControl)

formControlado.addEventListener("input",handleInputControl)
formControlado.addEventListener("submit",handleSubmitControl)

repPassword.forEach((field)=>{field.addEventListener("blur",handleBlur)})

//Funciones de mis eventos
//Vamos primero con el form no controlado ( osea manejado por HTML )
function handleInputNoControl(event){
    console.log(event)
    console.log(event.target)
    console.log(event.target.placeholder)
}

function handleSubmitNoControl(event){
    event.preventDefault()
    for( const input of event.target.children){
        console.log(input.placeholder)
        console.log(input.value)
        datosNoControlado.setValue(input.value,input.placeholder)
    }
    console.log(datosNoControlado)
}

//Ahora vamos con las funciones de los form controlados

function handleSubmitControl(event){
    console.log(datosControlado)
}


function handleInputControl(event){
    //console.log(event)
    //console.log(event.target)
    //console.log(event.target.placeholder)
    event.preventDefault()

    const id = event.target.placeholder
    const value = event.target.value

    switch (id) {
        case "Teléfono":
            if (!isNaN(value) || value == ""){
                datosControlado.setValue(value,id)
                event.target.value = datosControlado.getValue(id)
            } else if (datosControlado.getValue(id)) {
                event.target.value = datosControlado.getValue(id)
            } else {
                event.target.value = ""
            }
            break;
        case "Password":
            event.target.type = "password"
            datosControlado.setValue(value,id)
            event.target.value = datosControlado.getValue(id)
        case "Repetir Password":
            event.target.type = "password"
            datosControlado.setValue(value,id)
            event.target.value = datosControlado.getValue(id)
        default:
            datosControlado.setValue(value,id)
            event.target.value = datosControlado.getValue(id)
            break;
    }

}

function handleBlur(event){
    //console.log(event.target.parentNode.id)
    const id = event.target.parentNode.id
    if (id == "formNoControlado"){
        if ( datosNoControlado.pass != datosNoControlado.repass ){
            event.target.style.border = "1px solid red"
        } else {
            event.target.style.border = "0px solid black"
        }
    } else if ( id == "formControlado"){
        if ( datosControlado.pass != datosControlado.repass ){
            console.log("diferentes")
            event.target.style.border = "1px solid red"
        } else {
            console.log("Iguales")
            event.target.style.border = "0px solid black"
        }
    }
}

//Por último, funciones de mi form invisible

//Lo mismo que antes, esta clase estaría en otro archivo
//Esta es una clase del tipo componente de DOM, la cual contiene
//toda la lógica de un objeto, en este caso un formulario
class NewForm {
    constructor (fields,container){
        this.fields = fields
        this.container = container
        this.name = ""
        this.formNode = ""
        this.formData = ""
    }

    //Método que monta el formulario en el DOM
    createForm(name){
        let inputFields = ""
        this.name = name
        this.fields.forEach((field)=>{
            inputFields = inputFields + `<input 
                                            class='${field.class}' 
                                            placeholder='${field.placeholder}'
                                            id='${field.id}'
                                            type='${field.type}'
                                            value='${field.value}'
                                            />`
        })

        this.container.innerHTML = `
        <form class='form' id='${this.name}'>
        ${inputFields}
        <button type='submit'>Aceptar Nuevo</button>
        </form>
        `
        this.formNode = document.getElementById(this.name)
        this.formNode.addEventListener("submit",this.submitForm)
    }

    //Método que maneja cuando se aprieta el submit
    submitForm(event){
        event.preventDefault()
        console.log("Submit form creado:")
        this.formData = new FormData()
        for( const input of event.target.children){
            this.formData.setValue(input.value,input.id)
        }
        console.log(this.formData)
    }

    //Método que desmonta el formulario del DOM y destruye su eventListener
    deleteForm(){
        this.container.innerHTML = ``
    }
}

const formFields = [
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


const buttonCreateForm = document.getElementById("bCreateForm")
const buttonDeleteForm = document.getElementById("bDeleteForm")
const inputCreateForm = document.getElementById("formName")
const formContainer = document.getElementById("createForm")

const customForm = new NewForm(formFields,formContainer)

buttonCreateForm.addEventListener("click",handleClick)
buttonDeleteForm.addEventListener("click",handleClick)

function handleClick(event){
    switch(event.target.id){
        case "bCreateForm":
            if(inputCreateForm.value){
                customForm.createForm(inputCreateForm.value)
            } else {
                alert("Debe ingresar un nombre")
            }
            break;
        case "bDeleteForm":
            if(customForm.name){
                customForm.deleteForm()
            }

    }
}

formContainer.innerHTML = `
<div id="contenedor">
<input id="searchInput" class="input" placeholder="nombre del campo">
<button id="bSearch">Buscar elemento</button>
<div class="divForm">
    <form class="form" id="formNoControlado">
        <input class="input" placeholder="Nombre"/>
        <input class="input" placeholder="Apellido"/>
        <input class="input" type="number" placeholder="Teléfono"/>
        <input class="input" type="password" placeholder="Password"/>
        <input class="input repass" type="password" placeholder="Repetir Password"/>
        <button class="input" type="submit" id="noControlAccept">Aceptar Interior</button>
    </form>
</div>
<div class="divForm">
    <form class="form" id="formControlado">
        <input class="input" placeholder="Nombre"/>
        <input class="input" placeholder="Apellido"/>
        <input class="input" placeholder="Teléfono"/>
        <input class="input" placeholder="Password"/>
        <input class="input repass" placeholder="Repetir Password"/>
    </form>
    <button class="input" id="controlAccept">Aceptar Exterior</button>
</div>
<input id="formName" placeholder="Ingrese el nombre del form">
<button id="bCreateForm">Crear Form</button>
<button id="bDeleteForm">Borrar Form</button>
<div id="createForm" class="divForm">
</div>
</div>
`

formContainer.innerHTML = ``