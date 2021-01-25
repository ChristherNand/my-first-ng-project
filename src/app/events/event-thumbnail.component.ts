import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `   
  
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <h5>Date: {{event.date}}</h5>
        <h5>Time: {{event.time}}</h5>
        <h5>Price: \${{ event.price }}</h5>
        <h5>Location: {{event.location.city}}</h5>
        <button class="btn btn-primary" (click)="handleClickMe()">Click here!</button>
    </div>
    
    `
})

export class EventThumbnailComponent {
    //Input decorator tells Angular this event property will be passed in from another component
    @Input() event: any
    @Output() eventClick = new EventEmitter()

    handleClickMe() {
        this.eventClick.emit(this.event.name)
    }

}