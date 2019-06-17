
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
                <a href="#" class="btn btn-danger btn-sm">
                        <i class="fas fa-times delete"></i>
                </a>
            </td>`;

        list.appendChild(row);
    }

    static deleteTrip(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#trip-form');
        container.insertBefore(div, form);
        // Vanish in 2 secs
        setTimeout(() => document.querySelector('.alert').remove(), 2000);
    }
    static clearFields() {
        document.querySelector('#location').value = '';
        document.querySelector('#arrival-date').value = '';
        document.querySelector('#depart-date').value = '';
        document.querySelector('#trip-notes').value = '';
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

    // validate
    if (location === '' || location === '' || arrivalDate === '' || departDate === '' || tripNotes === '') {
        UI.showAlert('Please fill in all the fields', 'danger');
    } else {
      // Instatiate trip
      const trip = new Trip(location, arrivalDate, departDate, tripNotes);

      // Add trip to UI
      UI.addTripToList(trip);

      // Show success message
      UI.showAlert('Trip Added!', 'success');

      // clear fields
      UI.clearFields();
    }


});

// Event: Remove a trip
document.querySelector('#trip-list').addEventListener('click', (e) => {
    UI.deleteTrip(e.target);
});
