
//  Trip Class: Represents a trip
class Trip {
    constructor(location, arrivalDate, departDate, tripNotes) {
        this.location = location,
        this.arrivalDate = arrivalDate,
        this.departDate = departDate,
        this.tripNotes = tripNotes
    }
}

// UI Class: Handle UI Tasks
class UI {
    static displayTrips() {
        const StoredTrips = [
            {
              location: 'Paris, France',
              arrivalDate: '19th March 2019',
              departDate: '29th March 2019',
              tripNotes: 'Great trip! I loved experiencing the french culture. It was a bit cold though :('
            },
            {
              location: 'Seminyak, Bali',
              arrivalDate: '22nd May 2019',
              departDate: '1st June 2019',
              tripNotes: 'I loved Bali! The weather and beaches were amazing!'
            },
            {
              location: 'Cape Town, South Africa',
              arrivalDate: '5th October 2019',
              departDate: '5th November 2019',
              tripNotes: 'Such a great place to visit. I think I want to live here'
            }
        ];
        const trips = StoredTrips;
        trips.forEach(trip => UI.addTripToList(trip));
    }

    static addTripToList(trip) {

        const list = document.querySelector('#trip-list');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${trip.location}</td>
            <td>${trip.arrivalDate}</td>
            <td>${trip.departDate}</td>
            <td>${trip.tripNotes}</td>
            <td>
                <a href="#" class="btn btn-danger delete btn-sm">
                        <i class="fas fa-times"></i>
                </a>
            </td>`;

        list.appendChild(row);
    }
}

// Store Class: Handles Storage

// Event: Display trips
document.addEventListener('DOMContentLoaded', UI.displayTrips);

// Event: Add a trip
document.querySelector('#trip-form').addEventListener('submit', (e) => {

    // Prevent actual submit
    e.preventDefault();
    // Get form values
    const location = document.querySelector('#location').value;
    const arrivalDate = document.querySelector('#arrival-date').value;
    const departDate = document.querySelector('#depart-date').value;
    const tripNotes = document.querySelector('#trip-notes').value;

    // Instatiate trip
    const trip = new Trip(location, arrivalDate, departDate, tripNotes);

    // Add trip to UI
    UI.addTripToList(trip);
})

// Event: Remove a trip
