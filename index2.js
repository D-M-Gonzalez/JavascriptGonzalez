const formulario = document.querySelectorAll(".form1")
const aceptar = document.getElementById("buttonAccept")
const mostrar = document.getElementById("buttonShow")

const usuarios = []

const handleClick = (nombre) => (event) => {
    console.log(event.target.innerText)
    switch (nombre){
        case "boton1":
            const usuario = formulario[0].value
            const pass1 = formulario[1].value
            const pass2 = formulario[2].value
            const email = formulario[3].value
            const direc = formulario[4].value
        
            if (pass1 == pass2){
                usuarios.push({
                    nombre: usuario,
                    password: pass1,
                    email: email,
                    direccion: direc,
                })
            } else {
                alert("No son iguales")
            }
            break;
        case "boton2":
            console.log(usuarios)
            break;
    }
}

aceptar.addEventListener("click",handleClick("boton1"))
mostrar.addEventListener("click",handleClick("boton2"))