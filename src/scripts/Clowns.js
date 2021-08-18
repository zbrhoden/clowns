import { ReservationForm } from "./ReservationForm.js"
import { Reservations } from "./Reservations.js"

export const Clowns = () => {
    return `
        <h1>Maude and Merle's Sink Repair</h1>
        <section class="serviceForm">
            ${ReservationForm()}
        </section>

        <section class="serviceRequests">
            <h2>Service Requests</h2>
            ${Reservations()}
        </section>
    `
}