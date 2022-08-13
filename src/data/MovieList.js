import Movie from "./Movie.js"

export default class MovieList{
    constructor(){
        this.movies = []
        this.total = 0
    }
    buyMovie(){
        let chosenMovie = prompt("Ingrese el nombre de la pelicula a comprar")
        const searchedMovie = this.movies.find((movie)=>{
            return movie.name == chosenMovie
        })
        if(searchedMovie){
            console.log("Compré la siguiente película:")
            console.log(searchedMovie)
        } else {
            console.log("No se encontró la película")
        }
    }
    viewAllMovies(){
        this.movies.forEach((movie)=>{
            alert(`Nombre: ${movie.name} Precio: ${movie.price} Duración: ${movie.duration}`)
        })
    }
    addMovie(){
        let newName = prompt("Ingrese el nombre de la película:")
        let newPrice = prompt("Ingrese el precio de la película:")
        let newDuration = prompt("Ingrese la duración de la película:")
    
        const newMovie = new Movie(newName,newPrice,newDuration)
    
        const searchedMovie = this.movies.some((movie)=>{
            return movie.name == newName
        })
    
        if (searchedMovie){
            alert("La película ya existe")
        } else {
            this.movies.push(newMovie)
        }
    }
    removeMovie(){
        let chosenMovie = prompt("Ingrese el nombre de la pelicula a borrar")
        let searchedMovie = 0
    
        this.movies.forEach((movie,index)=>{
            if (movie.nombre == chosenMovie){
                searchedMovie = index
            }
        }) 
    
        if(searchedMovie){
            this.movies.splice(searchedMovie,1)
        } else {
            alert("No se encontró la película")
        }
    }
}

export const movieList = new MovieList()