import { setInitialMovies } from './helper/initialState.js'
import { handleClick } from './helper/eventHandlers.js'

const bStartApp = document.getElementById("bStartApp")

bStartApp.addEventListener("click",handleClick)

setInitialMovies()