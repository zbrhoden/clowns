
export const ReservationForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="ReservationDescription">Description</label>
            <input type="text" name="ReservationDescription" class="input" />
        </div>
        <div class="field">
            <label class="label" for="ReservationAddress">Address</label>
            <input type="text" name="ReservationAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="children_quantity">Number of Attendees </label>
            <input type="number" name="children_quantity" class="input" />
        </div>
        <div class="field">
            <label class="label" for="ReservationDate">Date needed</label>
            <input type="date" name="ReservationDate" class="input" />
        </div>

        <button class="button" id="submitReservation">Submit Reservation</button>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "submitReservation") {
        // Get what the user typed into the form fields
        const userDescription = document.querySelector("input[name='ReservationDescription']").value
        const userAddress = document.querySelector("input[name='ReservationAddress']").value
        const userBudget = document.querySelector("input[name='children_quantity']").value
        const userDate = document.querySelector("input[name='ReservationDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        sendRequest(dataToSendToAPI)
    }
})