import { fetchreservations } from "./dataAccess.js"
import { Clowns } from "./Clowns.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)


const render = () => {
    fetchreservations().then(
        () => {
            mainContainer.innerHTML = Clowns()
        }
    )
}

render()
