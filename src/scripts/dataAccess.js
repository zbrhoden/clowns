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

export const sendreservation = (userreservationRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userreservationRequest)
    }


    return fetch(`${API}/reservations`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchreservations = () => {
    return fetch(`${API}/reservations`)
        .then(response => response.json())
        .then(
            (reservationRequests) => {
                // Store the external state in application state
                applicationState.reservations = reservationRequests
            }
        )
}

export const getreservations = () => {
    return applicationState.requests.map(request => ({...request}))
}