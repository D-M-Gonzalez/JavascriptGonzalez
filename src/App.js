import { movieList } from "./data/MovieList.js";

export function main(){

    let accion = ""

    while (accion != "SALIR"){
        accion = prompt("Ingrese COMPRAR|VER|AGREGAR|BORRAR|SALIR")
        switch (accion){
            case "COMPRAR":
                movieList.buyMovie();
                break;
            case "VER":
                movieList.viewAllMovies();
                break;
            case "AGREGAR":
                movieList.addMovie();
                break;
            case "BORRAR":
                movieList.removeMovie();
                break;
            case "SALIR":
                alert("Estoy saliendo")
                break;
            default:
                alert("Ingrese una acción válida")
                break;
        }
    }
}