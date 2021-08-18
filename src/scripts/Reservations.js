import { getreservations} from "./dataAccess.js"


const convertreservationToListElement = (reservation) => {
    return `<li>
    Request #${reservation.id}
    </li>`
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("reservation--")) {
        const [,reservationId] = click.target.id.split("--")
        deletereservation(parseInt(reservationId))
    }
})

export const Reservation = () => {
    const requests = getreservations()

    let html = `
        <ul>
            ${
                requests.map(convertreservationToListElement)
            }
        </ul>
    `

    return html
}

return `
    <li>
        ${request.description}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>
`