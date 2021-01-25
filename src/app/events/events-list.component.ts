//We need to import this decorator to build app the component
import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Events</h1>
            <hr />
            <event-thumbnail (eventClick) = "handleEventClick($event)" [event]="eventOne"></event-thumbnail>
        </div>
    `
})

export class EventListComponent {
    eventOne = {
        id: 1,
        name: 'Angular connect',
        date: '9/26/2021',
        time: '10:00 a.m',
        price: 100,
        imageUrl: '/assets/images/put-somr-image-hre.png',
        location: {
            address: 'av.1234',
            city: 'Boston',
            country: 'United states'
        }
    }

    handleEventClick(data) {
        console.log('Logged data: ', data)
    }
}