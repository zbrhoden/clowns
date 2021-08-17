const applicationState = {
    reservations: []
}
const API = "http://localhost:8088"

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)