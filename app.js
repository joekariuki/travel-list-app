
//  Travel Class: Represents a trip
class Travel {
    constructor(location, arrivalDate, departureDate, notes) {
        this.location = location,
        this.arrivalDate = arrivalDate,
        this.departureDate = departureDate,
        this.notes = notes,
    }
}
// UI Class: Handle UI Tasks
class UI {
    static displayTrips() {
        const StoredTrips = [
            {
              location: 'Paris, France',
              arrivalDate: '19th March 2019',
              departureDate: '29th March 2019',
              notes: 'Great trip! I loved experiencing the french culture. It was a bit cold though :('
            },
            {
              location: 'Seminyak, Bali',
              arrivalDate: '22nd May 2019',
              departureDate: '1st June 2019',
              notes: 'I loved Bali! The weather and beaches were amazing!'
            },
            {
              location: 'Cape Town, South Africa',
              arrivalDate: '5th October 2019',
              departureDate: '5th November 2019',
              notes: 'Such a great place to visit. I think I want to live here'
            }
        ];

        const trips = StoredTrips;

        trips.forEach()(trip) => UI.addTripToList(trip));
    }
    static addTripToList(trip) {
        const list = document.querySelector('#trip-list');

        const row = document.createElement('tr');
        row.inneHTML = `
            <td>${trip.location}</td>
            <td>${trip.arrivalDate}</td>
            <td>${trip.departureDate}</td>
            <td>${trip.notes}</td>
            <td>
                <a href="#" class="button is-danger delete">
                    <span>Delete</span>
                    <span>
                        <i class="fas fa-times"></i>
                    </span>
                </a>
            </td>
        `;

        list.appendChild(row);
    }
}

// Store Class: Handles Storage

// Event: Display books


// Event: Add a book

// Event: Remove a book
