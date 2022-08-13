import { main } from "../App.js"

export function handleClick(event){
    const id = event.target.id

    switch(id){
        case "bStartApp":
            main()
            break;
        default:
            console.error("Invalid button")
            break;
    }
}